import * as THREE from 'three';
import { WEBGL } from '../../../util/webgl';
import { petal } from './components/petal';

export default () => {
    if (WEBGL.isWebGLAvailable()) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        let flowers = [];

        // const light = new THREE.PointLight(0xff3333, 1);
        // light.position.set(10, 10, 10);
        // scene.add(light);

        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(-10, 10, 10);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0xf7bf16);
        ambientLight.intensity = 0.5;
        scene.add(ambientLight);

        camera.position.set(0, 0, 5);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        for (let i = 0; i < 10; i += 1) {
            let daffodil = new THREE.Group();
            let daffodilFlower = new THREE.Group();

            let coneGeom = new THREE.ConeGeometry(0.25, 0.75, 36);
            coneGeom.translate(0, -0.375, 0);
            coneGeom.rotateX(Math.PI * 3/2);
            let coneMat = new THREE.MeshPhongMaterial();
            let cone = new THREE.Mesh(coneGeom, coneMat);
            cone.lookAt(new THREE.Vector3(0, 1, 0));

            for (let j = 0; j < 6; j += 1) {
                let p = petal(j%2);

                p.geometry.rotateZ(Math.PI/3 * j)  
                p.lookAt(new THREE.Vector3(0, 1, 0));

                daffodilFlower.add(p)
            }

            daffodilFlower.add(cone);
            daffodil.add(daffodilFlower);

            daffodil.position.set((Math.round(i % 5) - 2.25) * 2 + (i%2 * 0.625), (i % 2) * 1.5, -1)

            let stem = new THREE.Group();
            let cylGeom = new THREE.CylinderGeometry( 0.05, 0.05, 20, 16 )
            let stemMat = new THREE.MeshPhongMaterial( {color: 0x88ffaa });
            let cyl = new THREE.Mesh(cylGeom, stemMat);
            let sphereGeom = new THREE.SphereGeometry(0.0625, 10, 10)
            let cylTop = new THREE.Mesh(sphereGeom, stemMat);
            
            stem.add(cylTop);
            stem.add(cyl);
            cyl.position.set(0, -10, 0)
            stem.position.set(0, 0, -0.05);

            daffodil.add(stem)

            flowers.push(daffodilFlower);
            scene.add(daffodil);
        }

        // const grid = new THREE.GridHelper(10, 10, "white", "white");
        // grid.rotation.x = Math.PI / 2;
        // scene.add(grid);

        const marker = new THREE.Mesh(new THREE.SphereGeometry(0.062, 4, 2), new THREE.MeshBasicMaterial({
            color: "red"
        }));
        scene.add(marker);

        window.addEventListener("mousemove", onmousemove, false);

        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const intersectPoint = new THREE.Vector3();

        onmousemove({clientX: window.innerWidth/2, clientY: window.innerHeight/2})

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
            
            marker.position.copy(intersectPoint);
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