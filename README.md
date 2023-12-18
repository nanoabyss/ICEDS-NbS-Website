Hi
This was a project for DESN3011 at ANU.
Libraries used
    Vanilla HTML
    Vanilla CSS
    Vanilla JS
    P5.js libraries for animations
    Mapbox for Interactive Map
    Scrollama for scrollytelling

Overall structure:
The webpage is design around an overall container named ".overall-container" which dictates the overall height of the page, currently it is set at 11880px. But can be changed to a reactive size. Inside the overall container there are sections each section's size is determined by a percentage of the overall container, the current percentage is 9.091% which converts roughly to 1080px. Each section is designed around 1080px height.

P5.js is used for the logo and icon animations, the code can been seen in the script.js file under p5.js animation section.

Mapbox is used for the interactive map - most of the map building is done on the mapbox studio website which you guys have access to. The code that adds the interactivity to the map on the website exists inside map.js

Scrollama is used for scrollytelling events.
The link for scrollama: https://github.com/russellsamora/scrollama
For Scrollama to work you need to step up trigger steps/points.
The three key variables defined in the js file are scrolly, div and step.
        var scrolly = document.querySelector(".overall-container");
        var div = document.querySelector(".animation-div")
        var step = div.querySelector(".step");

Scrolly refers to the graphical container that scrollama exists inside of.
Then div/animation-div just refers to div that an animation will occur just for keeping tracking of which divs will have animations.
Finally step is the most important variable as it indicates what is a trigger and what isn't.
There are two key functions, handleStepEnter and handleStepExit. 
handleStepEnter
    This is the most important function for scrollama in this example when the user enters a step it hands the function a response which contains a lot of information but i'm interested in the element which it interacted with. Then once that has been received I run a bunch of if statements to see which one was interacted with in order to run certain code. The certain code is just adding a certain class which contains the animations to the element so that the animation can play.


handleStepExit
    Is not really used in this example just mainly for debugging purposes