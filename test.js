// Note that this example is for the original Max js object, which only supports ES5.
// For ES6, use the newer node.script object.
// https://cycling74.com/forums/any-plans-to-update-support-for-recent-versions-of-js

"use strict";

// ~ ~ ~ these variables are built-in ~ ~ ~
inlets = 3;
outlets = 3;
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

var nowTime = 0;
var lastTime = 0;
var deltaTime = 0;
var timeCounter = 0;
var timeMax = 10;
var firstRun = true;

// ~ ~ ~ these functions are built-in ~ ~ ~

// this runs when the object is first loaded
function loadbang() {
    init();
}

// this runs each time the object receives a bang
function bang() {
    if (inlet === 0) {
        update();
    } else if (inlet === 2) {
        init();
    }
}

// this runs when the object receives a float message
function msg_float(data) {
    if (inlet === 1) {
        timeMax = data;
        outlet(1, timeMax);
        post("new max: " + timeMax.toFixed(2));
    }
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

function init() {
    if (firstRun && typeof jsarguments[1] === "number") {
        timeMax = jsarguments[1];
        firstRun = false;
    }
    nowTime = new Date().getTime();
    timeCounter = 0;
    outlet(0, timeCounter);
    outlet(1, timeMax);
    outlet(2, bang);
    post("reset");
}

function update() {
    lastTime = nowTime;
    nowTime = new Date().getTime();
    deltaTime = (nowTime - lastTime) / 1000.0;
    timeCounter += deltaTime;
    if (timeCounter < timeMax) {
        outlet(0, timeCounter);
        post(timeCounter);
    } else {
        init();
    }
}
