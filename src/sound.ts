import { AudioListener, AudioLoader, Audio } from 'three';

export const audioListener = new AudioListener();

const sound = new Audio(audioListener);

const loader = new AudioLoader();

loader.load('./assets/bgm2.mp3', (buffer) => {
  sound.setBuffer(buffer);
  sound.setLoop(true);
  sound.setVolume(0.5);
  sound.play();
});
