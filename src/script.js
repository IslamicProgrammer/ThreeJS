import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
// const mesh = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1, 10, 10, 10),
//   new THREE.MeshBasicMaterial({ color: 'coral', wireframe: true })
// );

const geometry1 = new THREE.Geometry();
const vertex1 = new THREE.Vector3(0, 0, 0);
geometry1.vertices.push(vertex1);
const vertex2 = new THREE.Vector3(0, 1, 0);
geometry1.vertices.push(vertex2);
const vertex3 = new THREE.Vector3(1, 0, 0);
geometry1.vertices.push(vertex3);
const face1 = new THREE.Face3(0, 1, 2);
geometry1.faces.push(face1);

const geometry2 = new THREE.Geometry();
const vertex4 = new THREE.Vector3(0, 0, 1);
geometry2.vertices.push(vertex4);
const vertex5 = new THREE.Vector3(0, 1, 1);
geometry2.vertices.push(vertex5);
const vertex6 = new THREE.Vector3(1, 0, 1);
geometry2.vertices.push(vertex6);
const face2 = new THREE.Face3(0, 1, 2);
geometry2.faces.push(face2);

const material1 = new THREE.MeshBasicMaterial({
  color: 'coral',
  wireframe: true,
});

const material2 = new THREE.MeshBasicMaterial({
  color: 'yellow',
  wireframe: true,
});

const mesh1 = new THREE.Mesh(geometry1, material1);
const mesh2 = new THREE.Mesh(geometry2, material2);
scene.add(mesh1);
scene.add(mesh2);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  //   camera.lookAt(mesh.position);

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
