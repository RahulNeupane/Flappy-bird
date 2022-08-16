import Phaser from "phaser";
const config = {
  //WebGL (webgraphics library) Js API  for rendering 2D and 3D graphics
  type: Phaser.AUTO,
  width:800,
  height:600,
  physics: {
    //Arcade physics plugin manages physics simulation
    default: 'arcade'
  },
  scene:{
    preload,
    create,
    update,
  }
}


//loading assets, such as image, music, animations ...
function preload(){
  //this context - scene
  //contains funcions and properties we can use
  this.load.image('sky','assets/sky.png');
  this.load.image('bird', 'assets/bird.png');
}

let bird = null ;
function create(){
  // x - 400
  // y - 300
  // key of the image
  this.add.image(0, 0, 'sky').setOrigin(0);
  //middle of the height
  bird = this.physics.add.sprite(config.width * 0.1, config.height/2 , 'bird').setOrigin(0)
  bird.body.gravity.y = 200;
}

// 60fps
// 60 times per second 
// 60 * 8ms  = 480ms 
function update(time,delta){
  console.log(bird.body.velocity.y)
}
new Phaser.Game(config)