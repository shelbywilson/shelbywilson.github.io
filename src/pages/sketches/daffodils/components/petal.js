import * as THREE from 'three';

export const petal = (bend) => {
    const petalShape = new THREE.Shape();
    const scale = 220;
    const cps = [
        [
            {
                "x": -85,
                "y": -15 - 10
            },
            {
                "x": -85,
                "y": -15 - 126
            }
        ],
        [
            {
                "x": 33,
                "y": -15 - 0
            },
            {
                "x": -34,
                "y": -15 - 0
            }
        ],
        [
            {
                "x": 85,
                "y": -15 - 126
            },
            {
                "x": 85,
                "y": -15 - 10
            }
        ],
    ]
    const vs = [
        {
            "x": 0,
            "y": -15 - 240
        },
        {
            "x": -85,
            "y": -15 - 58
        },
        {
            "x": 0,
            "y": -15 - 0
        },
        {
            "x": 85,
            "y": -15 - 58
        },
    ]

    petalShape.moveTo(vs[1].x / scale, vs[1].y / scale);
    petalShape.bezierCurveTo(
      cps[0][0].x / scale,
      cps[0][0].y / scale,
      cps[1][1].x / scale,
      cps[1][1].y / scale,
      vs[2].x / scale,
      vs[2].y / scale
    );
    petalShape.bezierCurveTo(
      cps[1][0].x / scale,
      cps[1][0].y / scale,
      cps[2][1].x / scale,
      cps[2][1].y / scale,
      vs[3].x / scale,
      vs[3].y / scale
    );

    petalShape.quadraticCurveTo(
      cps[2][0].x / scale,
      cps[2][0].y / scale,
      vs[0].x / scale,
      vs[0].y / scale
    );
    
    petalShape.quadraticCurveTo(
        cps[0][1].x / scale, 
        cps[0][1].y / scale, 
        vs[1].x / scale, 
        vs[1].y / scale
    )


    const extrudeSettings = {
        steps: 2,
        depth: 0.001,
        bevelEnabled: true,
        bevelThickness: 0.01,
        bevelSize: 0.01,
        bevelOffset: 0,
        bevelSegments: 30
    };

    const geometry = new THREE.ExtrudeGeometry( petalShape, extrudeSettings );
    const material = new THREE.MeshPhongMaterial( { color: 0xffffd1 } );

    geometry.rotateX(-Math.PI / 12 * bend)

    const mesh = new THREE.Mesh( geometry, material ) ;
    
    return mesh;
}