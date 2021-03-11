// https://docs.cycling74.com/max8/refpages/node.script
// https://github.com/Cycling74/n4m-examples

"use strict";

const maxApi = require("max-api");

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

let nowTime = 0;
let lastTime = 0;
let deltaTime = 0;
let timeCounter = 0;
let timeMax = 100;

maxApi.addHandlers({
    start: () => {
        init();
    },

    // this runs each time the object receives a bang
    bang: () => {
        update();
    },

    reset: () => {
        init();
    },

    maxTime: (input) => {
        timeMax = input;
        init();
    }
});




// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

function init() {
    nowTime = new Date().getTime();
    lastTime = 0;
    deltaTime = 0;
    timeCounter = 0;
    maxApi.outlet("timeCounter", timeCounter);
    maxApi.outlet("timeMax", timeMax);
    maxApi.outlet("reset", "bang");
}

function update() {
    lastTime = nowTime;
    nowTime = new Date().getTime();
    deltaTime = (nowTime - lastTime) / 1000.0;
    timeCounter += deltaTime;
    if (timeCounter < timeMax) {
        maxApi.outlet("timeCounter", timeCounter);
    } else {
        init();
    }
}
