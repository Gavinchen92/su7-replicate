import { AudioListener, AudioLoader, Audio } from 'three';
import bgm from '../static/bgm2.mp3';

export const audioListener = new AudioListener();

const sound = new Audio(audioListener);

const loader = new AudioLoader();

loader.load(bgm, (buffer) => {
  sound.setBuffer(buffer);
  sound.setLoop(true);
  sound.setLoopStart(0);
  sound.setLoopEnd(14);
  sound.setVolume(0.2);
  sound.play();
});
