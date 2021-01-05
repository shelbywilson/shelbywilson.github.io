import * as THREE from 'three';
import { WEBGL } from './static/webgl';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import dn from './static/arid2_dn.jpg';
import up from './static/arid2_up.jpg';
import bk from './static/arid2_bk.jpg';
import lf from './static/arid2_lf.jpg';
import rt from './static/arid2_rt.jpg';
import ft from './static/arid2_ft.jpg';

// import ft from './static/cloud_cubemap/px.png';
// import bk from './static/cloud_cubemap/nx.png';
// import up from './static/cloud_cubemap/py.png';
// import dn from './static/cloud_cubemap/ny.png';
// import rt from './static/cloud_cubemap/pz.png';
// import lf from './static/cloud_cubemap/nz.png';

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
        // sphereCamera.position.set(0,100,0);
        sphereCamera.position.set(0, -200,-400);
        scene.add(sphereCamera);

        let reflective = new THREE.MeshBasicMaterial({
          envMap: sphereCamera.renderTarget
        });
        // let sphereGeo = new THREE.SphereGeometry(150,5,5);
        // let sphere = new THREE.Mesh(sphereGeo,reflective);
        // sphere.position.set(0,100,0);
        // scene.add(sphere);

        let boxGeo = new THREE.BoxGeometry(100, 1200, 300);
        let box = new THREE.Mesh(boxGeo,reflective);
        box.position.set(0, -200,-400);
        box.rotateY(-30);
        scene.add(box);

        // let g = new THREE.CylinderGeometry(300, 300, 300, 50, 50);
        // let cyl = new THREE.Mesh(g, reflective);
        // cyl.position.set(0, 0, 0);
        // scene.add(cyl)

        // let gCone = new THREE.ConeGeometry(410, 200, 10)
        // let cone = new THREE.Mesh(gCone, reflective);
        // cone.position.set(0, 220, 0);
        // scene.add(cone);

        render();
      }
      function render() {
        renderer.render(scene,camera);
        sphereCamera.updateCubeMap(renderer,scene);
        requestAnimationFrame(render);
      }
      init();
    } else {
        var warning = WEBGL.getWebGLErrorMessage()
        document.body.appendChild(warning)
    }
}