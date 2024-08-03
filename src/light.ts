import * as THREE from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

// 初始化RectAreaLightUniformsLib
RectAreaLightUniformsLib.init();

// 创建矩形区域光
const width = 20; // 增加宽度以覆盖更大的区域
const height = 10;
const intensity = 5;
export const rectLight = new THREE.RectAreaLight(
  0xffffff,
  intensity,
  width,
  height,
);
rectLight.position.set(0, 10, 0); // 将光源置于场景上方
rectLight.rotation.x = -Math.PI / 2; // 旋转光源使其朝下

// 添加RectAreaLightHelper以便在场景中可视化光源
const rectLightHelper = new RectAreaLightHelper(rectLight);
rectLight.add(rectLightHelper);
