import './index.css';

import * as THREE from 'three';
import { audioListener } from './sound';
import { rectLight } from './light';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { resizeRendererToDisplaySize } from './utils';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setPixelRatio(window.devicePixelRatio);

// 创建场景
const scene = new THREE.Scene();

// 创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  1000,
);

// 增加控制相机
const controls = new OrbitControls(camera, canvas);
controls.enableZoom = false;
controls.enablePan = false;
controls.enableDamping = true; // 启用阻尼效果
controls.dampingFactor = 0.05; // 设置阻尼系数
controls.rotateSpeed = 0.5; // 调整旋转速度
controls.minPolarAngle = Math.PI / 3;
controls.maxPolarAngle = Math.PI / 2 - Math.PI / 24;
controls.update();

camera.add(audioListener);
scene.add(rectLight);

// 创建一个平面来展示光照效果
const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshStandardMaterial({
  color: 0xcccccc,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// 添加一个立方体以更好地展示光照效果
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.set(0, 1, 0);
scene.add(cube);

// 设置相机位置
camera.position.z = 15;
camera.position.y = 8;
camera.lookAt(0, 0, 0);

function animate() {
  if (resizeRendererToDisplaySize(renderer)) {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera);
  controls.update();
  requestAnimationFrame(animate);
}

animate();
