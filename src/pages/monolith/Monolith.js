import * as THREE from 'three';
import { WEBGL } from './../../util/webgl';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import dn from './../../images/monolith/arid2/arid2_dn.jpg';
import up from './../../images/monolith/arid2/arid2_up.jpg';
import bk from './../../images/monolith/arid2/arid2_bk.jpg';
import lf from './../../images/monolith/arid2/arid2_lf.jpg';
import rt from './../../images/monolith/arid2/arid2_rt.jpg';
import ft from './../../images/monolith/arid2/arid2_ft.jpg';

export default () => {
    if (WEBGL.isWebGLAvailable()) {
        let scene, camera, renderer, sphereCamera;
        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight,1,5000);
            camera.position.set(0,400,1000);

            renderer = new THREE.WebGLRenderer({antialias:true});
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            let controls = new OrbitControls(camera, renderer.domElement);
            controls.enableZoom = false;

            let urls = [
                ft, 
                bk, 
                up, 
                dn,
                rt,
                lf
            ];
            let loader = new THREE.CubeTextureLoader();
            scene.background = loader.load(urls);

            const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(500);

            sphereCamera = new THREE.CubeCamera(1,1000, cubeRenderTarget);
            sphereCamera.position.set(0, -window.innerHeight / 4, 0);
            scene.add(sphereCamera);

            let reflective = new THREE.MeshBasicMaterial({
                envMap: sphereCamera.renderTarget
            });

            let boxGeo = new THREE.BoxGeometry(300, window.innerHeight * 1.2, 100);
            let box = new THREE.Mesh(boxGeo,reflective);
            box.position.set(0, -window.innerHeight / 4, 0);
            scene.add(box);

            render();
        }

        function render() {
            renderer.render(scene,camera);
            sphereCamera.update(renderer,scene);
            requestAnimationFrame(render);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()

            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        init();
        window.addEventListener('resize', onWindowResize, false)
    } else {
        var warning = WEBGL.getWebGLErrorMessage()
        document.body.appendChild(warning)
    }
}