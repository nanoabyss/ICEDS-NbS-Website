


// Just adding eventlisteners to each of the icon images inside section 10 to see if they are clicked or not.
// Then if they are clcicked run the function clickFunction and hand it the string landuse.
// console log the icon clicked just for debugging purposes.
// All the eventListeners function the same, they just hand different strings to the function.
document.querySelector('#landuse').addEventListener('click', function() {
  // specify the action to take when the div is clicked
  console.log('landuse');
  clickFunction('landuse');
});


document.querySelector('#urban').addEventListener('click', function() {
    // specify the action to take when the div is clicked
    console.log('urban');
    clickFunction('urban');
  });

  document.querySelector('#agricultural').addEventListener('click', function() {
    // specify the action to take when the div is clicked
    console.log('agricultural');
    clickFunction('agricultural');
  });

  document.querySelector('#stream').addEventListener('click', function() {
    // specify the action to take when the div is clicked
    console.log('stream');
    clickFunction('stream');
  });

  document.querySelector('#ecosystem').addEventListener('click', function() {
    // specify the action to take when the div is clicked
    console.log('ecosystem');
    clickFunction('ecosystem');
  });

  document.querySelector('#wetlands').addEventListener('click', function() {
    // specify the action to take when the div is clicked
    console.log('wetlands');
    clickFunction('wetlands');
  });

  document.querySelector('#reforestation').addEventListener('click', function() {
    // specify the action to take when the div is clicked
    console.log('reforestation');
    clickFunction('reforestation');
  });

  document.querySelector('#paleochannel').addEventListener('click', function() {
    // specify the action to take when the div is clicked
    console.log('paleochannel');
    clickFunction('paleochannel');
  });

// Declaring global variable for the animations that will play later
let p5Anim;


// clickFunction, changes the active animation in section 10 focal icon.
// i = string
// Animation is removed each time due to the animations occupying the same space and otherwise it breaks
// Animations run inside p5.js, but are embedded in instance mode


function clickFunction(i){
    switch (i){
        case "landuse":
          p5Anim.remove();
          p5Anim = new p5(landuse, 'nbs-animation');
          // Changing the title, need to add changing text below the title.
          document.getElementById("focal-heading").innerHTML = "Strategic Land Use";
            break;
        case "urban":
          p5Anim.remove();
          p5Anim = new p5(blueGreen, 'nbs-animation');
          document.getElementById("focal-heading").innerHTML = "Urban Blue-Green Infrastructure";

            break;
        case  "agricultural":
          p5Anim.remove();
          p5Anim = new p5(APCAnim, 'nbs-animation');
          document.getElementById("focal-heading").innerHTML = "Agricultural Practice Change";

            break;
        case "stream":
          p5Anim.remove();
          p5Anim = new p5(stream, 'nbs-animation');
          document.getElementById("focal-heading").innerHTML = "Stream Restoration";
          break;
        case "ecosystem":
          p5Anim.remove();
          p5Anim = new p5(ecoAnim, 'nbs-animation');
          document.getElementById("focal-heading").innerHTML = "Ecosystem/Watershed Restoration";

          break;
        case "wetlands":
          p5Anim.remove();
          p5Anim = new p5(wetlands, 'nbs-animation');
          document.getElementById("focal-heading").innerHTML = "Wetlands";
          break;
        case "reforestation":
            p5Anim.remove();
            p5Anim = new p5(reforest, 'nbs-animation');
            document.getElementById("focal-heading").innerHTML = "Reforestation";

          break;
        case "paleochannel":
          p5Anim.remove();
          p5Anim = new p5(paleo, 'nbs-animation');
          document.getElementById("focal-heading").innerHTML = "Paleochannel";
          break;
    }
};

document.querySelector('#landuse').addEventListener('click', clickFunction());

// Return to top button
let mybutton = document.getElementById("return-top-button");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// Make the button appear and disappear when the user scrolls past 300.
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Returns to the stop of the page.
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// Scrollama

// Setting up variables to be used in the html file.
var scrolly = document.querySelector(".overall-container");
var div = document.querySelector(".animation-div")
var step = div.querySelector(".step");

var scroller = scrollama();

// built in function of scrollama, this function is actived everytime the user scrolls into a step.
// 
function handleStepEnter(response){
  console.log(response.element);
  // Checking which element is entered via the classList tag, then adds the animations class to the element to start the
  // animation.
  if(response.element.classList.contains("left")){
    response.element.classList.add("enter-left");

  } else if (response.element.classList.contains("right")) {
    response.element.classList.add("enter-right");

  }
  if(response.element.classList.contains("report")){

    console.log(response.element.children[1].children);
    response.element.children[1].children[0].classList.add("big-circle");
    response.element.children[1].children[1].classList.add("dark-green");
    response.element.children[1].children[2].classList.add("light-green");

    document.querySelector("#report-img-link").classList.add("enter-main")
  }
  if(response.element.classList.contains("DataVisAnim1")){
    var myp5 = new p5(dataVis1,'animation1');
    response.element.classList.remove("DataVisAnim1");
  }
  response.element.classList.remove("will-animate");
  // response.element.classList.add("red");
}

function handleStepExit(response){
  // Just debugging code
  console.log ("Leaving " + response.element);
  // response.element.classList.remove("red");
}


function init(){
  scroller
  // step initiates which class is seen as a step in the html so events can work.
      .setup({
        step: ".step",
        offset: 0.9
      })
      .onStepEnter(handleStepEnter)
      .onStepExit(handleStepExit);
}

init();

// ----------------------------------------------------------------------------------------------------------------------
// P5.js Section
// Unsure about how this code functions as it was coded by another member of the group.
// ----------------------------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------------------
// Logo Animation
// ----------------------------------------------------------------------------------------------------------------------

var logoAnim = function(p){
  let spritesheet; //image variable
let spritedata; //data variable

let animation = []; //array for each frame

let logo = [];

p.preload = function() {
  spritedata = p.loadJSON("Assests/Animation-assets/logo.json");
  spritesheet = p.loadImage("Assests/Animation-assets/logo stills 2.png");
  //logo = loadImage("Final logo still.png");
}

p.setup = function() {
  p.createCanvas(400, 400);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++){
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
  
  logo = new Sprite(animation, 0, 0, 0.08);
  
}
 
  
    class Sprite {
    constructor(animation, x, y, speed){
      this.x = x;
      this.y = y;
      this.animation = animation;
      this.w = this.animation[0].width;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;
    }
  
    show() {
      let index = p.floor(this.index) % this.len;
      p.image(this.animation[index], this.x, this.y, 400,400)
      
    }
    animate() {
      this.index += this.speed;
  
    }
  }
p.draw = function() {
  //background(237,247,248);
  
  logo.show();
  logo.animate();
  //image(animation[21], 0, 0, 400, 400);
  
  
}
}
var myp5 = new p5(logoAnim, 'logo-animation');

// ----------------------------------------------------------------------------------------------------------------------
// Strategic Land Use
// ----------------------------------------------------------------------------------------------------------------------
var landuse = function(p){
  let spritesheet; //image variable
  let spritedata; //data variable
  let animation = []; //array for each frame
  let SLM = [];
  
  p.preload = function() {
    spritedata = p.loadJSON("Assests/Animation-assets/SLM.json");
    spritesheet = p.loadImage("Assests/Animation-assets/SLM Sprite Sheet.png");
  }
  
  p.setup = function() {
    p.createCanvas(400, 400);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++){
      let pos = frames[i].position;
      let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
      animation.push(img);
    }
    SLM = new Sprite(animation, 0, 0, 0.02);
  }
   class Sprite {
    constructor(animation, x, y, speed){
      this.x = x;
      this.y = y;
      this.animation = animation;
      this.w = this.animation[0].width;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;
    }
  
    show() {
      let index = p.floor(this.index) % this.len;
      p.image(this.animation[index], this.x, this.y, 400,400)
    }
    animate() {
      this.index += this.speed;
    }
  }   
  p.draw = function() {
    SLM.show();
    SLM.animate();
  }
  }

// ----------------------------------------------------------------------------------------------------------------------
// Blue Green Infrastructure Animation
// ----------------------------------------------------------------------------------------------------------------------

var blueGreen = function(p){
  let spritesheet; //image variable
  let spritedata; //data variable
  let animation = []; //array for each frame
  let bluegreen = [];
  
  p.preload = function() {
    spritedata = p.loadJSON("Assests/Animation-assets/bluegreen.json");
    spritesheet = p.loadImage("Assests/Animation-assets/Blue Green Infra Sprite Sheet.png");
  }
  
  p.setup = function(){
    p.createCanvas(400, 400);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++){
      let pos = frames[i].position;
      let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
      animation.push(img);
    }
    bluegreen = new Sprite(animation, 0, 0, 0.03);
  }

  class Sprite {
    constructor(animation, x, y, speed){
      this.x = x;
      this.y = y;
      this.animation = animation;
      this.w = this.animation[0].width;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;
    }
  
    show() {
      let index = p.floor(this.index) % this.len;
      p.image(this.animation[index], this.x, this.y, 400,400)
    }
  
    animate() {
      this.index += this.speed;
    }
  }    
  p.draw = function() {
    bluegreen.show();
    bluegreen.animate();
  }
  }

// ----------------------------------------------------------------------------------------------------------------------
// Agricultural Practice Change
// ----------------------------------------------------------------------------------------------------------------------
var APCAnim = function(p){
  let spritesheet; //image variable
  let spritedata; //data variable
  let animation = []; //array for each frame
  let APC = [];
  
  p.preload = function() {
    spritedata = p.loadJSON("Assests/Animation-assets/APC.json");
    spritesheet = p.loadImage("Assests/Animation-assets/APC Sprite Sheet.png");
  }
  
  p.setup = function() {
    p.createCanvas(400, 400);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++){
      let pos = frames[i].position;
      let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
      animation.push(img);
    }
    APC = new Sprite(animation, 0, 0, 0.03);
  }
    
  class Sprite {
    constructor(animation, x, y, speed){
      this.x = x;
      this.y = y;
      this.animation = animation;
      this.w = this.animation[0].width;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;
    }
  
    show() {
      let index = p.floor(this.index) % this.len;
      p.image(this.animation[index], this.x, this.y, 400,400)
    }
  
    animate() {
      this.index += this.speed
    }
  }    
  p.draw = function() {
    APC.show();
    APC.animate();
    //image(animation[10], 0, 0, 400, 400);
  }}

// ----------------------------------------------------------------------------------------------------------------------
// Stream Restoration
// ----------------------------------------------------------------------------------------------------------------------
var stream = function(p){
  let spritesheet; //image variable
  let spritedata; //data variable
  let animation = []; //array for each frame
  let SR = [];
  
  p.preload = function(){
    spritedata = p.loadJSON("Assests/Animation-assets/SR.json");
    spritesheet = p.loadImage("Assests/Animation-assets/SR Sprite Sheet.png");
  }
  
  p.setup = function() {
    p.createCanvas(400, 400);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++){
      let pos = frames[i].position;
      let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
      animation.push(img);
    }
    SR = new Sprite(animation, 0, 0, 0.02);
  }
  class Sprite {
    constructor(animation, x, y, speed){
      this.x = x;
      this.y = y;
      this.animation = animation;
      this.w = this.animation[0].width;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;
    }
  
    show() {
      let index = p.floor(this.index) % this.len;
      p.image(this.animation[index], this.x, this.y, 400,400)
    }
    animate() {
      this.index += this.speed;
    }
  }    
  p.draw = function() {
    SR.show();
    SR.animate();
  }
  }

// ----------------------------------------------------------------------------------------------------------------------
// EcoSystem Animation
// ----------------------------------------------------------------------------------------------------------------------

var ecoAnim = function(p){
let spritesheet; //image variable
let spritedata; //data variable
let animation = []; //array for each frame
let ER = [];

 p.preload = function() {
  spritedata = p.loadJSON("Assests/Animation-assets/ER.json");
  spritesheet = p.loadImage("Assests/Animation-assets/Ecosystem Restoration Sprite Sheet.png");
}

 p.setup = function() {
  p.createCanvas(400, 400);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++){
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
  ER = new Sprite(animation, 0, 0, 0.03);
}
class Sprite {
  constructor(animation, x, y, speed){
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
  }

  show() {
    let index = p.floor(this.index) % this.len;
    p.image(this.animation[index], this.x, this.y, 400,400) 
  }

  animate() {
    this.index += this.speed;

  }
}    
 p.draw = function() {
  ER.show();
  ER.animate();
}
}

// ----------------------------------------------------------------------------------------------------------------------
// Wetlands
// ----------------------------------------------------------------------------------------------------------------------
var wetlands = function(p){
  let spritesheet; //image variable
  let spritedata; //data variable
  let animation = []; //array for each frame
  let Wetlands = [];
  
  p.preload = function() {
    spritedata = p.loadJSON("Assests/Animation-assets/Wetlands.json");
    spritesheet = p.loadImage("Assests/Animation-assets/Wetlands Sprite Sheet.png");
  }
  
  p.setup = function() {
    p.createCanvas(400, 400);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++){
      let pos = frames[i].position;
      let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
      animation.push(img);
    } 
    Wetlands = new Sprite(animation, 0, 0, 0.02);
  }
    
  class Sprite {
    constructor(animation, x, y, speed){
      this.x = x;
      this.y = y;
      this.animation = animation;
      this.w = this.animation[0].width;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;
    }
    show() {
      let index = p.floor(this.index) % this.len;
      p.image(this.animation[index], this.x, this.y, 400,400)
    }
    animate() {
      this.index += this.speed;
    }
  }    
    
  p.draw = function() {
    Wetlands.show();
    Wetlands.animate();
  }
  }

// ----------------------------------------------------------------------------------------------------------------------
// Reforestation Animation
// ----------------------------------------------------------------------------------------------------------------------

var reforest = function(p){
  let spritesheet; //image variable
  let spritedata; //data variable
  let animation = []; //array for each frame
  let Reforestation = [];
  p.preload =function() {
    spritedata = p.loadJSON("Assests/Animation-assets/Reforestation.json");
    spritesheet = p.loadImage("Assests/Animation-assets/Reforestation Sprite Sheet.png");
  }
  
  p.setup = function() {
    p.createCanvas(400, 400);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++){
      let pos = frames[i].position;
      let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
      animation.push(img);
    }
    Reforestation = new Sprite(animation, 0, 0, 0.03);
  }
  class Sprite {
    constructor(animation, x, y, speed){
      this.x = x;
      this.y = y;
      this.animation = animation;
      this.w = this.animation[0].width;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;
    }
  
    show() {
      let index = p.floor(this.index) % this.len;
      p.image(this.animation[index], this.x, this.y, 400,400)
    }
  
    animate() {
      this.index += this.speed;
    }
  }    
  p.draw = function() {
    Reforestation.show();
    Reforestation.animate();
    //image(animation[11], 0, 0, 400, 400);
  }  
  }


// ----------------------------------------------------------------------------------------------------------------------
// Paleochannel Animation
// ----------------------------------------------------------------------------------------------------------------------

var paleo = function (p){
  
  let spritesheet; //image variable
  let spritedata; //data variable
  let animation = []; //array for each frame
  let Paleochannel = [];
  
  p.preload = function() {
    spritedata = p.loadJSON("Assests/Animation-assets/Paleochannel.json");
    spritesheet = p.loadImage("Assests/Animation-assets/paleochannel sprite sheet.png");
  }
  
  p.setup = function() {
    p.createCanvas(400, 400);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++){
      let pos = frames[i].position;
      let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
      animation.push(img);
    }
    Paleochannel = new Sprite(animation, 0, 0, 0.03);
  }
    
  class Sprite {
    constructor(animation, x, y, speed){
      this.x = x;
      this.y = y;
      this.animation = animation;
      this.w = this.animation[0].width;
      this.len = this.animation.length;
      this.speed = speed;
      this.index = 0;
    }
  
    show() {
      let index = p.floor(this.index) % this.len;
      p.image(this.animation[index], this.x, this.y, 400,400)
      
    }
    animate() {
      this.index += this.speed;
  
    }
  }
    
  p.draw = function() {   
    Paleochannel.show();
    Paleochannel.animate();
    //image(animation[11], 0, 0, 400, 400); 
  }
  }
  p5Anim = new p5(landuse, 'nbs-animation');


  
  // var myp5_2 = new p5(ecoAnim);












  // ----------------------------------------------------------------------------------------------------------------------
  // Data Visulation Animation 1:
  // ---------------------------------------------------------------------------------
  var dataVis1 = function(p){
    let rectHeight = 10; // Initial height of the rectangle
    let rectWidth = 100; // Width of the rectangle
    let targetHeight = 350; // Target height of the rectangle
    let animationDuration = 1.5; // Duration in seconds
    let startTime;
    p.setup = function() {
      p.createCanvas(400, 400);
      startTime = p.millis(); // Get the current time in milliseconds
      p.noStroke(); // Remove the border
    }
    
    p.draw = function() {
      p.background(0, 0, 0, 0); // Set background to transparent
    
      let currentTime = p.millis(); // Get the current time
    
      // Calculate the progress (0 to 1) of the animation
      let progress = (currentTime - startTime) / (animationDuration * 1000);
    
      // Ensure progress doesn't exceed 1
      progress = p.min(progress, 1);
    
      // Interpolate the current height based on the progress
      rectHeight = p.lerp(10, targetHeight, progress); // Increase from the bottom
    
      // Draw the rectangle
      p.fill(59, 142, 165);
      p.rect(50, 400 - rectHeight, rectWidth, rectHeight); // Adjust the y-coordinate
    }}

  // ----------------------------------------------------------------------------------------------------------------------
  // Data Visulation Animation 2:
  // ---------------------------------------------------------------------------------
    var dataVis2 = function(p){
      let spritesheet; //image variable
      let spritedata; //data variable
      let animation = []; //array for each frame
      let hes = [];
      p.preload = function() {
        spritedata = p.loadJSON("Assests/Animation-assets/HES.json");
        spritesheet = p.loadImage("Assests/Animation-assets/hes Sprite Sheet.png");
      }
      
      p.setup = function() {
        p.createCanvas(400, 200);
        let frames = spritedata.frames;
        for (let i = 0; i < frames.length; i++){
          let pos = frames[i].position;
          let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
          animation.push(img);
        }
        hes = new Sprite(animation, 0, 0, 0.02); 
      }
        class Sprite {
        constructor(animation, x, y, speed){
          this.x = x;
          this.y = y;
          this.animation = animation;
          this.w = this.animation[0].width;
          this.len = this.animation.length;
          this.speed = speed;
          this.index = 0;
        }
        show() {
          let index = p.floor(this.index) % this.len;
          p.image(this.animation[index], this.x, this.y, 400,400)   
        }
        animate() {
          this.index += this.speed;
        }
      } 
        
      p.draw = function() { 
        hes.show();
        hes.animate();
      }
      }
      var dataVisAnim2 = new p5(dataVis2, 'graphic-dataVis-container');
    