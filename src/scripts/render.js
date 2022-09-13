import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas'),

});
renderer.setSize(window.innerWidth, window.innerHeight);

const HemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(HemisphereLight);

const AmbientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(AmbientLight);


let cube

{ // add cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({color: 0x00ff00});
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

{
    const geometry = new THREE.SphereGeometry(1);
    const material = new THREE.MeshStandardMaterial({color: 0x4696db})
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
}

{
    const geometry = new THREE.TorusGeometry(1);
    const material = new THREE.MeshStandardMaterial({color: 0xd146db})
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
}

{
    const geometry = new THREE.ConeGeometry(1);
    const material = new THREE.MeshStandardMaterial({color: 0xdb6146})
    const cone = new THREE.Mesh(geometry, material);
    scene.add(cone);
}

{
    const geometry = new THREE.CylinderGeometry(1);
    const material = new THREE.MeshStandardMaterial({color: 0x46dbb6})
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);
}


camera.position.z = 6;


window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

let i = 0;
const clock = new THREE.Clock;

const title = document.querySelector(".title")
const down = document.getElementById("down");

document.body.onscroll = () => {
    i = document.body.getBoundingClientRect().top / 200
    const scale = Math.max(Math.abs(i), 1)
    title.style = `transform: scale(${scale})`
    down.style = `transform: scale(${scale * 1.2})`
    down.style = `transform: scale(${scale})`
}

function animate() {
    requestAnimationFrame(animate);

    i += 0.04 * clock.getDelta();

    const radius = 3;

    let offset = 0;
    scene.children.forEach(object => {
        offset += 360 / 5 * 10;
        object.rotation.x = i;
        object.rotation.y = i;
        object.position.x = Math.cos(i + offset) * radius;
        object.position.z = Math.sin(i + offset) * radius;
        object.position.y = Math.sin(i + offset) * -1.2;
    })

    renderer.render(scene, camera);
};

animate();