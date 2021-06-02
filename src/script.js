import './style.css';
import * as THREE from 'three';

// Scane
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'lightgreen' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('.webgl'),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
