import * as THREE from 'three';
import { WEBGL } from '../../../util/webgl';
// import Stats from './jsm/libs/stats.module.js';

export default () => {
    if (WEBGL.isWebGLAvailable()) {
        let container;

        let camera, scene, renderer;

        let mouseX = 0, mouseY = 0;

        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;
        let daffodils = [];

        init();
        animate();

        function init() {
            const div = document.createElement('div')
            container = document.body.appendChild(div);

            camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 1, 10000 );
            camera.position.z = 1800;

            scene = new THREE.Scene();
            scene.background = new THREE.Color( 0xffffff );

            const light = new THREE.DirectionalLight( 0xffffff );
            light.position.set( 0, 0, 1 );
            scene.add( light );

            // shadow

            const canvas = document.createElement( 'canvas' );
            canvas.width = 128;
            canvas.height = 128;

            const context = canvas.getContext( '2d' );
            const gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
            gradient.addColorStop( 0.1, 'rgba(210,210,210,1)' );
            gradient.addColorStop( 1, 'rgba(155,255,195,1)' );

            context.fillStyle = gradient;
            context.fillRect( 0, 0, canvas.width, canvas.height );

            const material = new THREE.MeshPhongMaterial( {
                color: 0xffff00,
                // flatShading: true,
                // vertexColors: true,
                // shininess: 0
            } );
            const geometry = new THREE.ConeGeometry( 50, 120, 32, 32, true );
            const cone = new THREE.Mesh( geometry, material );
            // const a = new THREE.Vector3( 0, 0, 1);
            // cone.rotateOnAxis(a, Math.PI)
            // cone.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 120/2, 0 ) );
            scene.add( cone );

            daffodils.push({
                geometry: cone,
                rotation: 0,
            })

            renderer = new THREE.WebGLRenderer( { antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            container.appendChild( renderer.domElement );

            // stats = new Stats();
            // container.appendChild( stats.dom );

            document.addEventListener( 'mousemove', onDocumentMouseMove );

            window.addEventListener( 'resize', onWindowResize );

        }

        function onWindowResize() {

            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );

        }

        function onDocumentMouseMove( event ) {

            mouseX = ( event.clientX - windowHalfX );
            mouseY = ( event.clientY - windowHalfY );
        }

        //

        function animate() {

            requestAnimationFrame( animate );

            render();
            // stats.update();

        }

        function render() {

            // camera.position.x += ( mouseX - camera.position.x ) * 0.05;
            // camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

            // camera.lookAt( scene.position );
            const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
            vector.unproject( camera );
            var dir = vector.sub( camera.position ).normalize();
            var distance = - camera.position.z / dir.z;
            var pos = camera.position.clone().add( dir.multiplyScalar( distance ) );

            daffodils.forEach(el => {
                const z = new THREE.Vector3( 0, 0, 1);
                // const a = new THREE.Vector3( 0, 0, mouseX);
                // el.rotation = z.angleTo(a) - el.rotation;

                // console.log(el.rotation)
                // el.geometry.rotateOnAxis(z, mouseX)
                // el.geometry.position.copy(pos);
            })

            renderer.render( scene, camera );

        }
    } else {
        var warning = WEBGL.getWebGLErrorMessage()
        document.body.appendChild(warning)
    }
}