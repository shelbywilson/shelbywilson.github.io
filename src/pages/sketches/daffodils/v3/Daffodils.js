import * as THREE from 'three';
import { WEBGL } from '../../../../common/webgl';
import { petal } from './components/petal';

export default () => {
    if (WEBGL.isWebGLAvailable()) {
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color( 0xffd4ff );
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        let flowers = [];

        const light = new THREE.PointLight(0xffffff, 0.75);
        light.position.set(-10, 10, 10);
        scene.add(light);

        const hemiLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 0.3 );
        scene.add( hemiLight );

        const ambientLight = new THREE.AmbientLight(0xf7bf16);
        ambientLight.intensity = 0.3;
        scene.add(ambientLight);

        camera.position.set(0, 0, 5);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        for (let i = 0; i < 11; i += 1) {
            let daffodil = new THREE.Group();
            let daffodilFlower = new THREE.Group();
            let daffodilFlowerCenter = new THREE.Group();

            let trumpetGeom = new THREE.CylinderGeometry(0.1, 0.33, 0.75, 12);
            trumpetGeom.translate(0, -0.375, 0);
            trumpetGeom.rotateX(Math.PI * 3/2);
            let trumpetMat = new THREE.MeshPhongMaterial();
            let trumpet = new THREE.Mesh(trumpetGeom, trumpetMat);

            for (let j = 0; j < 6; j += 1) {
                let p = petal(j%2);

                p.geometry.rotateZ(Math.PI/3 * j) 
                p.lookAt(new THREE.Vector3(0, 1, 0));

                daffodilFlower.add(p)
            }
            daffodilFlowerCenter.add(trumpet);

            let stem = new THREE.Group();
            let cylGeom = new THREE.CylinderGeometry( 0.05, 0.05, 20 )
            let stemMat = new THREE.MeshPhongMaterial( {color: 0x83ffba });
            let cyl = new THREE.Mesh(cylGeom, stemMat);
            let sphereGeom = new THREE.SphereGeometry(0.07, 10, 10)
            let cylTop = new THREE.Mesh(sphereGeom, stemMat);
            
            stem.add(cylTop);
            stem.add(cyl);
            cyl.position.set(0, -10, 0)
            stem.position.set(0, -0.5, -0.2);

            cylGeom = new THREE.CylinderGeometry( 0.1, 0.05, 0.5 )
            let connector = new THREE.Mesh(cylGeom, stemMat);
            connector.position.set(0.09, 0.25, 0)
            connector.rotateZ(-Math.PI/8)

            let connectorTop = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 10), stemMat);
            connectorTop.position.set(0.18, 0.5, 0);

            stem.add(connector);
            stem.add(connectorTop);
            stem.rotateY(Math.PI/16)

            daffodilFlower.add(daffodilFlowerCenter);
            daffodilFlower.position.set(0.18, 0.1, 0)
            daffodil.add(stem)
            daffodil.add(daffodilFlower);

            flowers.push(daffodilFlower);

            daffodil.position.set((Math.round(i % 5) - 2) * 2 + (i%2 * 0.75), (i % 2) * 1.5, -1.5 - ((i % 2) * 1) )

            scene.add(daffodil);
        }

        // const marker = new THREE.Mesh(new THREE.SphereGeometry(0.062, 14, 12), new THREE.MeshBasicMaterial({
        //     color: "white"
        // }));
        // scene.add(marker);

        window.addEventListener("mousemove", onmousemove, false);

        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const intersectPoint = new THREE.Vector3();

        onmousemove({clientX: window.innerWidth/2, clientY: -window.innerHeight})

        function onmousemove(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(plane, intersectPoint);

            flowers.forEach(flower => {
                flower.children.forEach(child => {
                    child.lookAt(intersectPoint)
                })
            })
            
            // marker.position.copy(intersectPoint);
        }

        render();

        function render() {
            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }
    } else {
        var warning = WEBGL.getWebGLErrorMessage()
        document.body.appendChild(warning)
    }
}