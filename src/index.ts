import './index.css';

import { WebGLRenderer, Scene, PerspectiveCamera } from 'three';
import { audioListener } from './sound';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

const renderer = new WebGLRenderer({
  canvas,
});

// 创建场景
const scene = new Scene();

// 创建相机
const camera = new PerspectiveCamera(
  75,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  1000,
);
camera.position.z = 5;

camera.add(audioListener);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();