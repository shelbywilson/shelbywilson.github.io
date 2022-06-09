function mapRange(value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}

const shuffle = (arr) => {
    let x;
    let y;
    let temp;
    
    for(x = arr.length - 1; x > 0; x -= 1) {
        y = Math.floor(Math.random() * x);
        temp = arr[x]
        arr[x] = arr[y]
        arr[y] = temp
    }

    return arr;
}

const settings = {
    rows: 3,
    perRow: 8,
}
let offset = [];
let delay = [];
let flowers = [];
let focusPoints = [];
// let petals = [];
let stats;
let shuffledI = [];
let scene;
let camera;
let light;
let renderer;
let t = 1000;
let autoPilot = true;
let autoPilotTimeout;

let mesh;

const getIndex = (i) => shuffledI[i]

function onmousemove(event) {
    autoPilot = false;
    document.querySelector('canvas').style.cursor = 'pointer'

    handleLightAnimation(event)

    if (autoPilotTimeout) {
        clearTimeout(autoPilotTimeout)
    }

    autoPilotTimeout = setTimeout(() => {
        autoPilot = true;
        document.querySelector('canvas').style.cursor = 'none'
    }, 7000)
}

function handleLightAnimation(event) {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    focusPoints[0].set(mouse.x, mouse.y);

    marker.style.left = `${event.clientX}px`;
    marker.style.top = `${event.clientY}px`;

    light.position.set(mouse.x, mouse.y)
}

function init() {
    while (offset.length < settings.rows * settings.perRow) {
        offset.push(mapRange(Math.random(), 0, 1, -1.2, 1.2))
        delay.push(mapRange(Math.random(), 0, 1, 0.2, 0.8))
    }
    while (shuffledI.length < settings.rows * settings.perRow) {
        shuffledI.push(shuffledI.length)
    }

    shuffle(shuffledI)

    if (WEBGL.isWebGLAvailable()) {
        scene = new THREE.Scene();
        // scene.background = new THREE.Color( `hsl(240, 87%, 91%)`);
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 20);

        light = new THREE.PointLight(0xf0ffff, 0.6);
        light.position.set(-10, 15, 0);
        scene.add(light);

        const hemiLight = new THREE.HemisphereLight( 0xffffeb, 0x001d81, 0.4 );
        scene.add(hemiLight);

        // const ambientLight = new THREE.AmbientLight(0x001d81);
        // ambientLight.intensity = 0.5;
        // scene.add(ambientLight);

        camera.position.set(0, 0, 5);
        renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // createStats()
        // const gui = new GUI();
        // gui.add( light, 'position', 1, 10, 1 );

        let petalMesh = petal();

        for(let i = 0; i < settings.rows * settings.perRow; i += 1) {
            let x = getIndex(i);
            let daisy = new THREE.Group();
            let daisyFlower = new THREE.Group();

            // daisy.add(stem())

            let centerGeom = new THREE.SphereBufferGeometry(0.37, 64, 32, 0, 2*Math.PI, 0, Math.PI * 0.45)//THREE.CylinderGeometry(0.33, 0.33, 0.2, 20);
            centerGeom.translate(0, -0.1, 0);
            centerGeom.rotateX(Math.PI * 1/2);
            let centerMat = new THREE.MeshLambertMaterial({color: 0xfec101});
            let center = new THREE.Mesh(centerGeom, centerMat);

            let flowerPetals = new THREE.Group();

            const numPetals = 15;
            for (let j = 0; j < numPetals; j += 1) {
                let p = petalMesh.clone()

                // p.geometry.rotateX(Math.PI / 30 * (j%3))
                // p.geometry.rotateZ(Math.PI/numPetals + Math.PI/(numPetals/2) * j) 
                p.rotation.set(Math.PI / 30 * (j%3) + Math.PI/2, 0, Math.PI/numPetals + Math.PI/(numPetals/2) * j)
                // p.lookAt(new THREE.Vector3(0, 1, 0));
                flowerPetals.add(p);
            }
            flowerPetals.rotateX(Math.PI/2)

            daisyFlower.add(flowerPetals)
            // petals.push(flowerPetals)

            daisyFlower.add(center);
            daisyFlower.position.set(0.16, 0.09, 0)
            daisy.add(daisyFlower);

            flowers.push(daisyFlower);
            focusPoints.push(new THREE.Vector2());

            daisy.position.set(
                mapRange(x % settings.perRow, 0, settings.perRow - 1, -settings.perRow * 1.2, settings.perRow * 1.2) + offset[x]/3, // + (x%2) * 1.75 + ((x%rows)%2 * -1),
                mapRange(x % settings.rows, 0, settings.rows - 1, settings.rows + 1.15, -settings.rows - 1.15) + offset[x],
                -8 // mapRange(x % rows, 0, rows - 1, -7, -4),
            )

            scene.add(daisy);
        }

        const marker = document.body.appendChild(document.createElement("div"));
        marker.id = "marker";

        window.addEventListener("mousemove", onmousemove, false);
        window.addEventListener( "resize", onWindowResize, false );

        document.querySelector('canvas').style.cursor = 'none'

        animate();
    } else {
        var warning = WEBGL.getWebGLErrorMessage()
        document.body.appendChild(warning)
    }
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    render();
}

// FPS counter
function createStats() {
    stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);
}

function render() {
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 2), 0);
    const raycaster = new THREE.Raycaster();
    const intersectPoint = new THREE.Vector3(0,0,-20);

    // stats.begin()
    requestAnimationFrame(render);

    t += 1;
    t %= Number.MAX_SAFE_INTEGER
    const scaledT = t/280;
    if (autoPilot) {
        handleLightAnimation({
            clientX: mapRange(Math.cos(scaledT/5) * Math.sin(scaledT * 2) * Math.atan(scaledT / 10), 1 + Math.PI/2, -1 - Math.PI/2, -50, window.innerWidth - 50), 
            clientY: mapRange(Math.cos(scaledT) * Math.atan(scaledT), -1, 1, window.innerHeight/3, window.innerHeight * 2/3)
        })
    }
        
    for (var i = 1; i < focusPoints.length; i++) {
        focusPoints[i].lerp(focusPoints[i-1], delay[i]);
    }
    
    flowers.forEach((flower, index) => {
        raycaster.setFromCamera(focusPoints[index], camera);
        raycaster.ray.intersectPlane(plane, intersectPoint);
        flower.lookAt(intersectPoint)
        flower.rotateZ((focusPoints[index].y + focusPoints[index].x)/4)
        flower.rotateY(focusPoints[index].x/2)
        // flower.children.forEach(child => {
        //     child.lookAt(intersectPoint)
        // })
        // // console.log(intersectPoint)
        // petals[index].forEach((petal, i) => {
        //     // if ((i === 0 || i === 9) && intersectPoint.y < 0) {
        //     //     petal.lookAt(new THREE.Vector3(intersectPoint.x, 0, 0))
            // } else {
        //         // petal.rotateX(intersectPoint.y * ((i%3)+1) * delay[index] * 0.01)
        //         petal.rotateX(Math.sin(i) * 0.01)
        //         petal.lookAt(intersectPoint)
        //     // }
            // petal.translate(0, 0, intersectPoint.x)
        // })
    })

    renderer.render(scene, camera);
    // stats.end()
}

window.onload = init;