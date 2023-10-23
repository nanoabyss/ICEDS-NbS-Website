

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

// TODO: Add a file that has all the descriptions for each of the types.
let p5Anim;

function clickFunction(i){
    switch (i){
        case "landuse":
            document.getElementById("focal-image").src = "Assests/Icons/2x/landuse.png";
            document.getElementById("focal-heading").innerHTML = "Strategic Land Use";
            console.log("landuse");
            break;
        case "urban":
            document.getElementById("focal-image").src = "Assests/Icons/2x/urban.png";
            document.getElementById("focal-heading").innerHTML = "Urban Blue-Green Infrastructure";
            console.log("urban");
            break;
        case  "agricultural":
            document.getElementById("focal-image").src = "Assests/Icons/2x/agricultural.png";
            document.getElementById("focal-heading").innerHTML = "Agricultrual Practice Change";
            break;
        case "stream":
          document.getElementById("focal-image").src = "Assests/Icons/2x/stream.png";
          document.getElementById("focal-heading").innerHTML = "Stream Restoration";
          break;
        case "ecosystem":
          console.log("Poggers")
          p5Anim.remove();
            p5Anim = new p5(ecoAnim, 'nbs-animation');
          break;
        case "wetlands":
          document.getElementById("focal-image").src = "Assests/Icons/2x/wetlands.png";
          document.getElementById("focal-heading").innerHTML = "Wetlands";
          break;
        case "reforestation":
            p5Anim.remove();
            p5Anim = new p5(logoAnim, 'nbs-animation')
          break;
        case "paleochannel":
          // document.getElementById("focal-image").src = "Assests/Icons/2x/paleochannel.png";
          // document.getElementById("focal-heading").innerHTML = "Paleochannel";
          p5Anim.remove();
          p5Anim = new p5(paleo, 'nbs-animation')
          
          break;
    }
};

document.querySelector('#landuse').addEventListener('click', clickFunction());


function myFunction(){
  var x = document.getElementById("mylinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let mybutton = document.getElementById("return-top-button");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




// Scrollama


var scrolly = document.querySelector(".overall-container");
var div = document.querySelector(".animation-div")
var step = div.querySelector(".step");

var scroller = scrollama();

function handleStepEnter(response){
  console.log(response.element);
  if(response.element.classList.contains("left")){
    response.element.classList.add("enter-left");

  } else if (response.element.classList.contains("right")) {
    response.element.classList.add("enter-right");

  }
  if(response.element.classList.contains("report")){
    // response.element.classList.add("enter-main");
    console.log(response.element.children[1].children);
    response.element.children[1].children[0].classList.add("big-circle");
    response.element.children[1].children[1].classList.add("dark-green");
    response.element.children[1].children[2].classList.add("light-green");

    document.querySelector("#report-img-link").classList.add("enter-main")
  }
  response.element.classList.remove("will-animate");
  // response.element.classList.add("red");
}

function handleStepExit(response){
  console.log ("Leaving " + response.element);
  // response.element.classList.remove("red");
}


function init(){
  scroller
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
// ----------------------------------------------------------------------------------------------------------------------

// Logo Animation
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

// Paleochannel Animation
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
  
  // var myp5_1 = new p5(paleo);
  p5Anim = new p5(paleo, 'nbs-animation');


  // EcoSystem Animation

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
    //image(animation[11], 0, 0, 400, 400);
    
    
  }
  }
  
  // var myp5_2 = new p5(ecoAnim);


  