

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
function clickFunction(i){
    console.log("Wow World");
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
          document.getElementById("focal-image").src = "Assests/Icons/2x/ecosystem.png";
          document.getElementById("focal-heading").innerHTML = "Ecosystem / Watershed Restoration";
          break;
        case "wetlands":
          document.getElementById("focal-image").src = "Assests/Icons/2x/wetlands.png";
          document.getElementById("focal-heading").innerHTML = "Wetlands";
          break;
        case "reforestation":
          document.getElementById("focal-image").src = "Assests/Icons/2x/reforestation.png";
          document.getElementById("focal-heading").innerHTML = "Reforestation";
          break;
        case "paleochannel":
          document.getElementById("focal-image").src = "Assests/Icons/2x/paleochannel.png";
          document.getElementById("focal-heading").innerHTML = "Paleochannel";
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
    response.element.classList.add("enter-main");
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
        offset: 1
        
      })
      .onStepEnter(handleStepEnter)
      .onStepExit(handleStepExit);
}

init();