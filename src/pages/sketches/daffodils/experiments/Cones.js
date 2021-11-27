import * as THREE from 'three';
import { WEBGL } from '../../../../common/webgl';

export default () => {
    if (WEBGL.isWebGLAvailable()) {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
        let cones = [];

        camera.position.set(0, 0, 5);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        let coneGeom, coneMat, cone, daffodil;

        for (let i = 0; i < 45; i += 1) {
            daffodil = new THREE.Group();

            coneGeom = new THREE.ConeGeometry(0.25, 0.75, 36);
            coneGeom.translate(0, -0.375, 0);
            coneGeom.rotateX(Math.PI * 3/2);
            // coneGeom.rotateY(Math.PI/6);
            coneMat = new THREE.MeshNormalMaterial();
            cone = new THREE.Mesh(coneGeom, coneMat);
            cone.lookAt(new THREE.Vector3(0, 1, 0));

            cones.push(cone)

            daffodil.add(cone);

            daffodil.position.set(Math.round(i / 5) - 5, (i % 5) - 2, -1 - (i % 5))

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

        function onmousemove(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(plane, intersectPoint);

            cones.forEach((cone) => cone.lookAt(intersectPoint))

            // cone.lookAt(intersectPoint)
            
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