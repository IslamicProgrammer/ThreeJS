import './style.css';
import * as THREE from 'three';

// Scane
const scene = new THREE.Scene();

// Object
const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'yellowgreen' })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'coral' })
);
cube2.position.x = 2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 'lightblue' })
);
cube3.position.x = -2;
group.add(cube3);

group.position.y = -1;
group.rotation.y = -2;
group.scale.y = 4;

// Position
// mesh.position.x = 1;
// mesh.position.y = -1;
// mesh.position.z = -0.5;
// mesh.position.set(1, -1, -0.5);

// Scale
// mesh.scale.x = 2;
// mesh.scale.y = 1.5;
// mesh.scale.z = 1.3;
// mesh.scale.set(3, 1.5, 1.4);

// Rotation
// mesh.rotation.reorder('XYZ');
// mesh.rotation.y = Math.PI / 4;
// mesh.rotation.x = Math.PI / 4;

// Axes helper
const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

// Sizes
const sizes = {
  width: 1000,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 2;
// camera.position.x = -2;
scene.add(camera);

// Methods
// console.log(mesh.position.distanceTo(camera.position));

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('.webgl'),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
