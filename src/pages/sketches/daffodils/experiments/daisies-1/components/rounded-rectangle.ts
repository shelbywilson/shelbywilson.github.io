import * as THREE from 'three';
  
  // Adapted from ShapeGeometry
  export class RoundedRectGeometry extends THREE.BufferGeometry {
    parameters: {
      width: number;
      height: number;
      borderRadius: number;
      curveSegments: number;
    };
  
    constructor(
      width: number,
      height: number,
      borderRadius: number,
      curveSegments = 12
    ) {
      super();
      this.type = "RoundedRectGeometry";
  
      this.parameters = {
        width,
        height,
        borderRadius,
        curveSegments,
      };
  
      const x = -width / 2;
      const y = -height / 2;
      const ctx = new THREE.Shape();
      ctx.moveTo(x, y + borderRadius);
      ctx.lineTo(x, y + height - borderRadius);
      ctx.quadraticCurveTo(x, y + height, x + borderRadius, y + height);
      ctx.lineTo(x + width - borderRadius, y + height);
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width,
        y + height - borderRadius
      );
      ctx.lineTo(x + width, y + borderRadius);
      ctx.quadraticCurveTo(x + width, y, x + width - borderRadius, y);
      ctx.lineTo(x + borderRadius, y);
      ctx.quadraticCurveTo(x, y, x, y + borderRadius);
  
      // buffers
  
      const indices: number[] = [];
      const vertices: number[] = [];
      const normals: number[] = [];
      const uvs: number[] = [];
  
      // allow single and array values for "shapes" parameter
  
      addShape(ctx);
  
      // build geometry
  
      this.setIndex(indices);
      this.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
      this.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
      this.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  
      // helper functions
  
      function addShape(shape: THREE.Shape) {
        const indexOffset = vertices.length / 3;
        const points = shape.extractPoints(curveSegments);
  
        let shapeVertices = points.shape;
        const shapeHoles = points.holes;
  
        // check direction of vertices
  
        if (THREE.ShapeUtils.isClockWise(shapeVertices) === false) {
          shapeVertices = shapeVertices.reverse();
        }
  
        for (let i = 0, l = shapeHoles.length; i < l; i++) {
          const shapeHole = shapeHoles[i];
  
          if (THREE.ShapeUtils.isClockWise(shapeHole) === true) {
            shapeHoles[i] = shapeHole.reverse();
          }
        }
  
        const faces = THREE.ShapeUtils.triangulateShape(shapeVertices, shapeHoles);
  
        // join vertices of inner and outer paths to a single array
  
        for (let i = 0, l = shapeHoles.length; i < l; i++) {
          const shapeHole = shapeHoles[i];
          shapeVertices = shapeVertices.concat(shapeHole);
        }
  
        // vertices, normals, uvs
  
        for (let i = 0, l = shapeVertices.length; i < l; i++) {
          const vertex = shapeVertices[i];
  
          vertices.push(vertex.x, vertex.y, 0);
          normals.push(0, 0, 1);
                                                        
          // difference from Shape Geometry, uvs are updated to properly fit the texture
          uvs.push(
            (vertex.x + width / 2) / width,
            (vertex.y + height / 2) / height
          ); // world uvs
        }
  
        // incides
  
        for (let i = 0, l = faces.length; i < l; i++) {
          const face = faces[i];
  
          const a = face[0] + indexOffset;
          const b = face[1] + indexOffset;
          const c = face[2] + indexOffset;
  
          indices.push(a, b, c);
        }
      }
    }
  }