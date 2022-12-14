import Phaser, { Scene } from "phaser";
import PlayScene from "./scenes/PlayScene";
import menuScene from "./scenes/menuScene";
import PreloadScene from "./scenes/PreloadScene";

const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = {x: WIDTH * 0.1, y: HEIGHT/2};

const SHARED_CONFIG = {
  width : WIDTH,
  height : HEIGHT,
  startPosition : BIRD_POSITION
}

const Scenes = [PreloadScene,menuScene,PlayScene];
const createScene = Scene => new Scene(SHARED_CONFIG)
const initScenes = () => Scenes.map(createScene)

const config = {
 type: Phaser.AUTO,
  ...SHARED_CONFIG,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },
  scene:initScenes()
}

new Phaser.Game(config)