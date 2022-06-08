const stem = () => {
    let group = new THREE.Group();
    let cylGeom = new THREE.CylinderGeometry( 0.1, 0.1, 20 )
    let stemMat = new THREE.MeshLambertMaterial( {color: 0x009150 });
    let cyl = new THREE.Mesh(cylGeom, stemMat);
    let sphereGeom = new THREE.SphereGeometry(0.1, 10, 10)
    let cylTop = new THREE.Mesh(sphereGeom, stemMat);
    cylTop.position.set(0, 0.01, 0)

    group.add(cylTop);
    group.add(cyl);
    cyl.position.set(0, -10, 0)

    cylGeom = new THREE.CylinderGeometry( 0.2, 0.1, 0.5 )
    let connector = new THREE.Mesh(cylGeom, stemMat);
    connector.position.set(0.12, 0.24, -0.01)
    connector.rotateZ(-Math.PI/6)

    let connectorTop = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 10), stemMat);
    connectorTop.position.set(0.27, 0.5, 0);

    group.add(connector);
    group.add(connectorTop);
    group.position.set(-0.08, -0.5, -3.8);
    group.rotateY(-Math.PI/6)
    
    return group;
}