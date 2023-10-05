

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
            document.getElementById("focal-image").src = "Assests/Icons/landuse.svg";
            document.getElementById("focal-heading").innerHTML = "Strategic Land Use";
            console.log("landuse");
            break;
        case "urban":
            document.getElementById("focal-image").src = "Assests/Icons/urban.svg";
            document.getElementById("focal-heading").innerHTML = "Urban Blue-Green Infrastructure";
            console.log("urban");
            break;
        case  "agricultural":
            document.getElementById("focal-image").src = "Assests/Icons/agricultural.svg";
            document.getElementById("focal-heading").innerHTML = "Agricultrual Practice Change";
            break;
        case "stream":
          document.getElementById("focal-image").src = "Assests/Icons/stream.svg";
          document.getElementById("focal-heading").innerHTML = "Stream Restoration";
          break;
        case "ecosystem":
          document.getElementById("focal-image").src = "Assests/Icons/ecosystem.svg";
          document.getElementById("focal-heading").innerHTML = "Ecosystem / Watershed Restoration";
          break;
        case "wetlands":
          document.getElementById("focal-image").src = "Assests/Icons/wetlands.svg";
          document.getElementById("focal-heading").innerHTML = "Wetlands";
          break;
        case "reforestation":
          document.getElementById("focal-image").src = "Assests/Icons/reforestation.svg";
          document.getElementById("focal-heading").innerHTML = "Reforestation";
          break;
        case "paleochannel":
          document.getElementById("focal-image").src = "Assests/Icons/paleochannel.svg";
          document.getElementById("focal-heading").innerHTML = "Paleochannel";
          break;
    }
};

document.querySelector('#landuse').addEventListener('click', clickFunction());
// document.getElementById("urban").addEventListener("click", clickFunction("urban"));


