/* ****** 

import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const style = {
    height: 500 // we can control scene size by setting container dimensions
};

class App extends Component {
    componentDidMount() {
        this.sceneSetup();
        this.addCustomSceneObjects();
        this.startAnimationLoop();
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
        window.cancelAnimationFrame(this.requestID);
        this.controls.dispose();
    }

    // Standard scene setup in Three.js. Check "Creating a scene" manual for more information
    // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    sceneSetup = () => {
        // get container dimensions and use them for scene sizing
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75, // fov = field of view
            width / height, // aspect ratio
            0.1, // near plane
            1000 // far plane
        );
        this.camera.position.z = 9; // is used here to set some distance from a cube that is located at z = 0
        // OrbitControls allow a camera to orbit around the object
        // https://threejs.org/docs/#examples/controls/OrbitControls
        this.controls = new OrbitControls( this.camera, this.mount );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( width, height );
        this.mount.appendChild( this.renderer.domElement ); // mount using React ref
    };

    // Here should come custom code.
    // Code below is taken from Three.js BoxGeometry example
    // https://threejs.org/docs/#api/en/geometries/BoxGeometry
    addCustomSceneObjects = () => {
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshPhongMaterial( {
            color: 0x156289,
            emissive: 0x072534,
            side: THREE.DoubleSide,
            flatShading: true
        } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );

        const lights = [];
        lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

        lights[ 0 ].position.set( 0, 200, 0 );
        lights[ 1 ].position.set( 100, 200, 100 );
        lights[ 2 ].position.set( - 100, - 200, - 100 );

        this.scene.add( lights[ 0 ] );
        this.scene.add( lights[ 1 ] );
        this.scene.add( lights[ 2 ] );
    };

    startAnimationLoop = () => {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        this.renderer.render( this.scene, this.camera );

        // The window.requestAnimationFrame() method tells the browser that you wish to perform
        // an animation and requests that the browser call a specified function
        // to update an animation before the next repaint
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    handleWindowResize = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        this.renderer.setSize( width, height );
        this.camera.aspect = width / height;

        // Note that after making changes to most of camera properties you have to call
        // .updateProjectionMatrix for the changes to take effect.
        this.camera.updateProjectionMatrix();
    };

    render() {
        return <div style={style} ref={ref => (this.mount = ref)} />;
    }
}

class Container extends React.Component {
    state = {isMounted: true};

    render() {
        const {isMounted = true} = this.state;
        return (
            <>
                <button onClick={() => this.setState(state => ({isMounted: !state.isMounted}))}>
                    {isMounted ? "Unmount" : "Mount"}
                </button>
                {isMounted && <App />}
                {isMounted && <div>Scroll to zoom, drag to rotate</div>}
            </>
        )
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Container />, rootElement);

****** */

import * as THREE from 'three';
import { WEBGL } from './static/webgl';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import dn from './static/zeus/zeus_dn.jpg';
import up from './static/zeus/zeus_up.jpg';
import bk from './static/zeus/zeus_bk.jpg';
import lf from './static/zeus/zeus_lf.jpg';
import rt from './static/zeus/zeus_rt.jpg';
import ft from './static/zeus/zeus_ft.jpg';

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
        let color = new THREE.MeshBasicMaterial({
        })
        scene.background = loader.load(urls);

        const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(500);

        sphereCamera = new THREE.CubeCamera(1,1000, cubeRenderTarget);
        sphereCamera.position.set(0,100,0);
        scene.add(sphereCamera);

        let reflective = new THREE.MeshBasicMaterial({
          envMap: sphereCamera.renderTarget
        });
        let sphereGeo = new THREE.SphereGeometry(50,50,50);
        let sphere = new THREE.Mesh(sphereGeo,reflective);
        sphere.position.set(0,100,0);
        scene.add(sphere);

        // let boxGeo = new THREE.BoxGeometry(300, 700, 100);
        // let box = new THREE.Mesh(boxGeo,reflective);
        // box.position.set(0,-400,0);
        // scene.add(box);

        let g = new THREE.CylinderGeometry(50, 50, 50, 50, 50);
        let cyl = new THREE.Mesh(g, reflective);
        cyl.position.set(0, 125, 0);
        scene.add(cyl)

        let stemG = new THREE.CylinderGeometry(8, 8, 170, 50, 50);
        let stem = new THREE.Mesh(stemG, reflective);
        stem.position.set(0, 0, 0);
        scene.add(stem)

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
        
        // let camera, scene, renderer
        // let plane
        // let mouse,
        //     raycaster,
        //     isShiftDown = false

        // let rollOverMesh, rollOverMaterial
        // let cubeGeo, cubeMaterial

        // let objects = []

        // init()
        // render()

        // function init() {
        //     camera = new THREE.PerspectiveCamera(
        //     45,
        //     window.innerWidth / window.innerHeight,
        //     1,
        //     10000
        //     )
        //     camera.position.set(500, 800, 1300)
        //     camera.lookAt(0, 0, 0)

        //     scene = new THREE.Scene()
        //     scene.background = new THREE.Color(0xf0f0f0)

        //     // roll-over helpers

        //     var rollOverGeo = new THREE.BoxBufferGeometry(50, 50, 50)
        //     rollOverMaterial = new THREE.MeshBasicMaterial({
        //     color: 0xff0000,
        //     opacity: 0.5,
        //     transparent: true,
        //     })
        //     rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial)
        //     scene.add(rollOverMesh)

        //     // cubes

        //     cubeGeo = new THREE.BoxBufferGeometry(50, 50, 50)
        //     cubeMaterial = new THREE.MeshLambertMaterial({
        //     color: 0xfeb74c,
        //     map: new THREE.TextureLoader().load(arid2_bk),
        //     })

        //     // grid

        //     var gridHelper = new THREE.GridHelper(1000, 20)
        //     scene.add(gridHelper)

        //     //

        //     raycaster = new THREE.Raycaster()
        //     mouse = new THREE.Vector2()

        //     var geometry = new THREE.PlaneBufferGeometry(1000, 1000)
        //     geometry.rotateX(-Math.PI / 2)

        //     plane = new THREE.Mesh(
        //     geometry,
        //     new THREE.MeshBasicMaterial({ visible: false })
        //     )
        //     scene.add(plane)

        //     objects.push(plane)

        //     // lights

        //     var ambientLight = new THREE.AmbientLight(0x606060)
        //     scene.add(ambientLight)

        //     var directionalLight = new THREE.DirectionalLight(0xffffff)
        //     directionalLight.position.set(1, 0.75, 0.5).normalize()
        //     scene.add(directionalLight)

        //     renderer = new THREE.WebGLRenderer({ antialias: true })
        //     renderer.setPixelRatio(window.devicePixelRatio)
        //     renderer.setSize(window.innerWidth, window.innerHeight)
        //     document.body.appendChild(renderer.domElement)

        //     document.addEventListener('mousemove', onDocumentMouseMove, false)
        //     document.addEventListener('mousedown', onDocumentMouseDown, false)
        //     document.addEventListener('keydown', onDocumentKeyDown, false)
        //     document.addEventListener('keyup', onDocumentKeyUp, false)

        //     //

        //     window.addEventListener('resize', onWindowResize, false)
        // }

        // function onWindowResize() {
        //     camera.aspect = window.innerWidth / window.innerHeight
        //     camera.updateProjectionMatrix()

        //     renderer.setSize(window.innerWidth, window.innerHeight)
        // }

        // function onDocumentMouseMove(event) {
        //     event.preventDefault()

        //     mouse.set(
        //     (event.clientX / window.innerWidth) * 2 - 1,
        //     -(event.clientY / window.innerHeight) * 2 + 1
        //     )

        //     raycaster.setFromCamera(mouse, camera)

        //     var intersects = raycaster.intersectObjects(objects)

        //     if (intersects.length > 0) {
        //     var intersect = intersects[0]

        //     rollOverMesh.position.copy(intersect.point).add(intersect.face.normal)
        //     rollOverMesh.position
        //         .divideScalar(50)
        //         .floor()
        //         .multiplyScalar(50)
        //         .addScalar(25)
        //     }

        //     render()
        // }

        // function onDocumentMouseDown(event) {
        //     event.preventDefault()

        //     mouse.set(
        //     (event.clientX / window.innerWidth) * 2 - 1,
        //     -(event.clientY / window.innerHeight) * 2 + 1
        //     )

        //     raycaster.setFromCamera(mouse, camera)

        //     var intersects = raycaster.intersectObjects(objects)

        //     if (intersects.length > 0) {
        //     var intersect = intersects[0]

        //     // delete cube

        //     if (isShiftDown) {
        //         if (intersect.object !== plane) {
        //         scene.remove(intersect.object)

        //         objects.splice(objects.indexOf(intersect.object), 1)
        //         }

        //         // create cube
        //     } else {
        //         var voxel = new THREE.Mesh(cubeGeo, cubeMaterial)
        //         voxel.position.copy(intersect.point).add(intersect.face.normal)
        //         voxel.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25)
        //         scene.add(voxel)

        //         objects.push(voxel)
        //     }

        //     render()
        //     }
        // }

        // function onDocumentKeyDown(event) {
        //     switch (event.keyCode) {
        //     case 16:
        //         isShiftDown = true
        //         break
        //     }
        // }

        // function onDocumentKeyUp(event) {
        //     switch (event.keyCode) {
        //     case 16:
        //         isShiftDown = false
        //         break
        //     }
        // }

        // function render() {
        //     renderer.render(scene, camera)
        // }
    } else {
        var warning = WEBGL.getWebGLErrorMessage()
        document.body.appendChild(warning)
    }
}

// // // import * as d3 from 'd3';
// // import * as THREE from 'three';

// // export default () => {
// //     // console.log(d3.select('#still-life-svg'))
// //     // const scene = new THREE.Scene();
// //     // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// //     // const renderer = new THREE.WebGLRenderer();
// //     // renderer.setSize( window.innerWidth, window.innerHeight );
// //     // document.body.appendChild( renderer.domElement );

// //     // const light = new THREE.DirectionalLight();
// //     // light.position.set( 0.5, 0.5, 1 );
// //     // light.castShadow = true;
// //     // light.shadow.camera.zoom = 4; // tighter shadow map
// //     // scene.add( light );

// //     // const geometry = new THREE.BoxGeometry();
// //     // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// //     // const cube = new THREE.Mesh( geometry, material );
// //     // scene.add( cube );

// //     // camera.position.z = 5;

// //     // const animate = function () {
// //     //     requestAnimationFrame( animate );

// //     //     cube.rotation.x += 0.01;
// //     //     cube.rotation.y += 0.01;

// //     //     renderer.render( scene, camera );
// //     // };

// //     // animate();

// //     init();
// //     animate();
// // }

// // let camera, scene, renderer;
// // let mesh;
// // const AMOUNT = 1;

// // function init() {

// //     const ASPECT_RATIO = window.innerWidth / window.innerHeight;

// //     const WIDTH = ( window.innerWidth / AMOUNT ) * window.devicePixelRatio;
// //     const HEIGHT = ( window.innerHeight / AMOUNT ) * window.devicePixelRatio;

// //     const cameras = [];

// //     for ( let y = 0; y < AMOUNT; y ++ ) {

// //         for ( let x = 0; x < AMOUNT; x ++ ) {

// //             const subcamera = new THREE.PerspectiveCamera( 40, ASPECT_RATIO, 0.1, 10 );
// //             subcamera.viewport = new THREE.Vector4( Math.floor( x * WIDTH ), Math.floor( y * HEIGHT ), Math.ceil( WIDTH ), Math.ceil( HEIGHT ) );
// //             subcamera.position.x = ( x / AMOUNT ) - 0.5;
// //             subcamera.position.y = 0.5 - ( y / AMOUNT );
// //             subcamera.position.z = 1.5;
// //             subcamera.position.multiplyScalar( 2 );
// //             subcamera.lookAt( 0, 0, 0 );
// //             subcamera.updateMatrixWorld();
// //             cameras.push( subcamera );

// //         }

// //     }

// //     camera = new THREE.ArrayCamera( cameras );
// //     camera.position.z = 3;

// //     scene = new THREE.Scene();

// //     scene.add( new THREE.AmbientLight( 0x222244 ) );

// //     const light = new THREE.DirectionalLight();
// //     light.position.set( 0.5, 0.5, 1 );
// //     light.castShadow = true;
// //     light.shadow.camera.zoom = 4; // tighter shadow map
// //     scene.add( light );

// //     const geometryBackground = new THREE.PlaneBufferGeometry( 100, 100 );
// //     const materialBackground = new THREE.MeshPhongMaterial( { color: 0x000066 } );

// //     const background = new THREE.Mesh( geometryBackground, materialBackground );
// //     background.receiveShadow = true;
// //     background.position.set( 0, 0, - 1 );
// //     scene.add( background );

// //     const geometryCylinder = new THREE.CylinderBufferGeometry( 0.5, 0.5, 1, 32 );
// //     const materialCylinder = new THREE.MeshPhongMaterial( { color: 0xff0000 } );

// //     mesh = new THREE.Mesh( geometryCylinder, materialCylinder );
// //     mesh.castShadow = true;
// //     mesh.receiveShadow = true;
// //     scene.add( mesh );

// //     renderer = new THREE.WebGLRenderer();
// //     renderer.setPixelRatio( window.devicePixelRatio );
// //     renderer.setSize( window.innerWidth, window.innerHeight );
// //     renderer.shadowMap.enabled = true;
// //     document.body.appendChild( renderer.domElement );

// //     //

// //     window.addEventListener( 'resize', onWindowResize, false );

// // }

// // function onWindowResize() {

// //     const ASPECT_RATIO = window.innerWidth / window.innerHeight;
// //     const WIDTH = ( window.innerWidth / AMOUNT ) * window.devicePixelRatio;
// //     const HEIGHT = ( window.innerHeight / AMOUNT ) * window.devicePixelRatio;

// //     camera.aspect = ASPECT_RATIO;
// //     camera.updateProjectionMatrix();

// //     for ( let y = 0; y < AMOUNT; y ++ ) {

// //         for ( let x = 0; x < AMOUNT; x ++ ) {

// //             const subcamera = camera.cameras[ AMOUNT * y + x ];

// //             subcamera.viewport.set(
// //                 Math.floor( x * WIDTH ),
// //                 Math.floor( y * HEIGHT ),
// //                 Math.ceil( WIDTH ),
// //                 Math.ceil( HEIGHT ) );

// //             subcamera.aspect = ASPECT_RATIO;
// //             subcamera.updateProjectionMatrix();

// //         }

// //     }

// //     renderer.setSize( window.innerWidth, window.innerHeight );

// // }

// // function animate() {

// //     mesh.rotation.x += 0.005;
// //     mesh.rotation.z += 0.01;

// //     renderer.render( scene, camera );

// //     requestAnimationFrame( animate );

// // }