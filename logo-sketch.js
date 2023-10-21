let spritesheet; //image variable
let spritedata; //data variable

let animation = []; //array for each frame

let logo = [];

function preload() {
  spritedata = loadJSON("Assests/Animation-assets/logo.json");
  spritesheet = loadImage("Assests/Animation-assets/logo stills 2.png");
  //logo = loadImage("Final logo still.png");
}

function setup() {
  createCanvas(400,400);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++){
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
  
  logo = new Sprite(animation, 0, 0, 0.08);
  
}
    
function draw() {
  // background(237,247,248);
  
  logo.show();
  logo.animate();
  //image(animation[frameCount], 0, 0, 400, 400);
  
  
}