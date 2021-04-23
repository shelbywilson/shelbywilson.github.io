import * as THREE from 'three';

export const petal = (rotateZ, up) => {
    const x = 0, y = 0;

    const heartShape = new THREE.Shape();

    heartShape.moveTo( (x + 5) * 0.04, (y + 5) * 0.04 );
    heartShape.bezierCurveTo( (x + 5) * 0.04, (y + 5) * 0.04, (x + 4) * 0.04, y * 0.04, x * 0.04, y * 0.04);
    heartShape.bezierCurveTo( (x - 6) * 0.04, y * 0.04, (x - 6) * 0.04, (y + 7) * 0.04, (x - 6) * 0.04, (y + 7) * 0.04 );
    heartShape.bezierCurveTo( (x - 6) * 0.04, (y + 11) * 0.04, (x - 3) * 0.04, (y + 15.4) * 0.04, (x + 5) * 0.04, (y + 19) * 0.04 );
    // heartShape.bezierCurveTo( (x + 12) * 0.02, (y + 15.4) * 0.02, (x + 16) * 0.02, (y + 11) * 0.02, (x + 16) * 0.02, (y + 7) * 0.02 );
    // heartShape.bezierCurveTo( (x + 16) * 0.02, (y + 7) * 0.02, (x + 16) * 0.02, y * 0.02, (x + 10) * 0.02, y * 0.02);

    const geometry = new THREE.ShapeGeometry( heartShape );
    const material = new THREE.MeshPhongMaterial( { color: 0xffff00 } );

    geometry.rotateX(Math.PI / 12 * (up ? -1 : 1))
    geometry.rotateZ(rotateZ)

    const mesh = new THREE.Mesh( geometry, material ) ;
    
    return mesh;
}