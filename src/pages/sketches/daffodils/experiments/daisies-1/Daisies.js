import * as THREE from 'three';
import { WEBGL } from '../../../../common/webgl';
import { petal } from './components/petal';
import Stats from 'three/examples/jsm/libs/stats.module'
// import { stem } from './components/stem';
import { shuffle } from '../../../../common/util';

function mapRange(value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}

const rows = 4;
const perRow = 9;
let offset = [];
while (offset.length < rows * perRow) {
    offset.push(mapRange(Math.random(), 0, 1, 0.2, 0.8))
}
let shuffledI = [];
while (shuffledI.length < rows * perRow) {
    shuffledI.push(shuffledI.length)
}
shuffle(shuffledI)

const getIndex = (i) => shuffledI[i]

export const Daffodils = () => {
    if (WEBGL.isWebGLAvailable()) {
        const scene = new THREE.Scene();
        // scene.background = new THREE.Color( `hsl(240, 87%, 91%)`);
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.5, 10);
        let flowers = [];
        let focusPoints = [];
        let petals = [];
        let stats;

        const light = new THREE.PointLight(0xffffff, 0.5);
        light.position.set(-10, 15, 10);
        scene.add(light);

        const hemiLight = new THREE.HemisphereLight( 0xffffeb, 0x001d81, 0.6 );
        scene.add(hemiLight);

        // const ambientLight = new THREE.AmbientLight(0xf7bf16);
        // ambientLight.intensity = 0.3;
        // scene.add(ambientLight);

        camera.position.set(0, 0, 5);
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        
        // FPS counter
        function createStats() {
            stats = new Stats();
            stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
            document.body.appendChild(stats.dom);
        }
        createStats()

        for (let i = 0; i < (rows * perRow); i += 1) {
            let x = getIndex(i) 
            let daffodil = new THREE.Group();
            let daffodilFlower = new THREE.Group();
            let daffodilFlowerCenter = new THREE.Group();

            let trumpetGeom = new THREE.SphereBufferGeometry(0.2, 64, 32, 0, 2*Math.PI, 0, Math.PI/3)//THREE.CylinderGeometry(0.33, 0.33, 0.2, 20);
            trumpetGeom.translate(0, -0.05, 0);
            trumpetGeom.rotateX(Math.PI * 1/2);
            let trumpetMat = new THREE.MeshLambertMaterial({color: 0xfec101});
            let trumpet = new THREE.Mesh(trumpetGeom, trumpetMat);

            let flowerPetals = [];

            const numPetals = 17;
            for (let j = 0; j < numPetals; j += 1) {
                let p = petal(j%3);

                p.geometry.rotateZ(Math.PI/numPetals + Math.PI/(numPetals/2) * j) 
                p.lookAt(new THREE.Vector3(0, 1, 0));
                flowerPetals.push(p);

                daffodilFlower.add(p)
            }
            petals.push(flowerPetals)
            daffodilFlowerCenter.add(trumpet);

            daffodilFlower.add(daffodilFlowerCenter);
            daffodilFlower.position.set(0.16, 0.09, 0)
            // daffodil.add(stem())
            daffodil.add(daffodilFlower);

            flowers.push(daffodilFlowerCenter);
            focusPoints.push(new THREE.Vector2());

            daffodil.position.set(
                mapRange(x % perRow, 0, perRow - 1, -perRow + (x % 2) * -0.75, perRow) + (x%2) * 0.75 + ((x%rows)%2 * -1),
                mapRange(x % rows, 0, rows - 1, rows + 1.15, -rows - 1.15) + ((offset[x] - 0.5) * 3),
                -4// mapRange(x % rows, 0, rows - 1, -7, -4),
            )

            scene.add(daffodil);
        }

        const marker = document.body.appendChild(document.createElement("div"));
        marker.id = "marker";

        window.addEventListener("mousemove", onmousemove, false);
        window.addEventListener( "resize", onWindowResize, false );

        function onWindowResize(){
        
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        
            renderer.setSize( window.innerWidth, window.innerHeight );
        
        }

        const plane = new THREE.Plane(new THREE.Vector3(0, 0, 2), 0);
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const intersectPoint = new THREE.Vector3(0,0,-20);

        onmousemove({clientX: window.innerWidth/2, clientY: 0})

        function onmousemove(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            
            focusPoints[0].set(mouse.x, mouse.y);

            marker.style.left = `${event.clientX}px`;
            marker.style.top = `${event.clientY}px`;

            light.position.set(mouse.x, mouse.y)
        }

        render();

        function render() {
            stats.begin()
            requestAnimationFrame(render);

            for (var i = 1; i < focusPoints.length; i++) {
                focusPoints[i].lerp(focusPoints[i-1], Math.min(1, offset[i] * 1.4));
            }
            
            flowers.forEach((flower, index) => {
                raycaster.setFromCamera(focusPoints[index], camera);
                raycaster.ray.intersectPlane(plane, intersectPoint);
                flower.children.forEach(child => {
                    child.lookAt(intersectPoint)
                })
                // console.log(intersectPoint)
                petals[index].forEach((petal) => {
                    // if ((i === 0 || i === 9) && intersectPoint.y < 0) {
                    //     petal.lookAt(new THREE.Vector3(intersectPoint.x, 0, 0))
                    // } else {
                        petal.lookAt(intersectPoint)
                    // }
                })
            })

            renderer.render(scene, camera);
            stats.end()
        }
    } else {
        var warning = WEBGL.getWebGLErrorMessage()
        document.body.appendChild(warning)
    }
}

export default Daffodils;