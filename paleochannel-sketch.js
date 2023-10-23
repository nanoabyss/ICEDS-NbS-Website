
// // Logo Animation
// var logoAnim = function(p){
//   let spritesheet; //image variable
// let spritedata; //data variable

// let animation = []; //array for each frame

// let logo = [];

// p.preload = function() {
//   spritedata = p.loadJSON("Assests/Animation-assets/logo.json");
//   spritesheet = p.loadImage("Assests/Animation-assets/logo stills 2.png");
//   //logo = loadImage("Final logo still.png");
// }

// p.setup = function() {
//   p.createCanvas(400, 400);
//   let frames = spritedata.frames;
//   for (let i = 0; i < frames.length; i++){
//     let pos = frames[i].position;
//     let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
//     animation.push(img);
//   }
  
//   logo = new Sprite(animation, 0, 0, 0.08);
  
// }
 
  
//     class Sprite {
//     constructor(animation, x, y, speed){
//       this.x = x;
//       this.y = y;
//       this.animation = animation;
//       this.w = this.animation[0].width;
//       this.len = this.animation.length;
//       this.speed = speed;
//       this.index = 0;
//     }
  
//     show() {
//       let index = p.floor(this.index) % this.len;
//       p.image(this.animation[index], this.x, this.y, 400,400)
      
//     }
//     animate() {
//       this.index += this.speed;
  
//     }
//   }
// p.draw = function() {
//   //background(237,247,248);
  
//   logo.show();
//   logo.animate();
//   //image(animation[21], 0, 0, 400, 400);
  
  
// }
// }
// var myp5 = new p5(logoAnim, 'logo-animation');

// // Paleochannel Animation
// var paleo = function (p){
  
//   let spritesheet; //image variable
//   let spritedata; //data variable
//   let animation = []; //array for each frame
//   let Paleochannel = [];
  
//   p.preload = function() {
//     spritedata = p.loadJSON("Assests/Animation-assets/Paleochannel.json");
//     spritesheet = p.loadImage("Assests/Animation-assets/paleochannel sprite sheet.png");
//   }
  
//   p.setup = function() {
//     p.createCanvas(400, 400);
//     let frames = spritedata.frames;
//     for (let i = 0; i < frames.length; i++){
//       let pos = frames[i].position;
//       let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
//       animation.push(img);
//     }
//     Paleochannel = new Sprite(animation, 0, 0, 0.03);
//   }
    
//   class Sprite {
//     constructor(animation, x, y, speed){
//       this.x = x;
//       this.y = y;
//       this.animation = animation;
//       this.w = this.animation[0].width;
//       this.len = this.animation.length;
//       this.speed = speed;
//       this.index = 0;
//     }
  
//     show() {
//       let index = p.floor(this.index) % this.len;
//       p.image(this.animation[index], this.x, this.y, 400,400)
      
//     }
//     animate() {
//       this.index += this.speed;
  
//     }
//   }
    
//   p.draw = function() {   
//     Paleochannel.show();
//     Paleochannel.animate();
//     //image(animation[11], 0, 0, 400, 400); 
//   }
//   }
  
//   var myp5_1 = new p5(paleo);
  


//   // EcoSystem Animation

//   var ecoAnim = function(p){
//     let spritesheet; //image variable
//   let spritedata; //data variable
  
//   let animation = []; //array for each frame
  
//   let ER = [];
  
//    p.preload = function() {
//     spritedata = p.loadJSON("Assests/Animation-assets/ER.json");
//     spritesheet = p.loadImage("Assests/Animation-assets/Ecosystem Restoration Sprite Sheet.png");
//   }
  
//    p.setup = function() {
//     p.createCanvas(400, 400);
//     let frames = spritedata.frames;
//     for (let i = 0; i < frames.length; i++){
//       let pos = frames[i].position;
//       let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
//       animation.push(img);
//     }
    
//     ER = new Sprite(animation, 0, 0, 0.03);
    
//   }
//   class Sprite {
//     constructor(animation, x, y, speed){
//       this.x = x;
//       this.y = y;
//       this.animation = animation;
//       this.w = this.animation[0].width;
//       this.len = this.animation.length;
//       this.speed = speed;
//       this.index = 0;
//     }
  
//     show() {
//       let index = p.floor(this.index) % this.len;
//       p.image(this.animation[index], this.x, this.y, 400,400)
      
//     }
  
//     animate() {
//       this.index += this.speed;
  
//     }
//   }    
//    p.draw = function() {
    
    
//     ER.show();
//     ER.animate();
//     //image(animation[11], 0, 0, 400, 400);
    
    
//   }
//   }
  
//   var myp5_2 = new p5(ecoAnim, 'nbs-animation');


  