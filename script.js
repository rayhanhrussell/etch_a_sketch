let GRIDSIZE = 16;

//getting access to the elements declared in html
const gridContainer = document.getElementById("gridContainer");
const grid = document.getElementById("grid");
const sizeButton = document.getElementById("chooseSize");
const dialog = document.querySelector("dialog");
const close = document.getElementById("close");
const sizeValue = document.getElementById("sizeSelect");
const resetButton = document.getElementById("restState");
const eraseButton = document.getElementById("eraseState");
const rangeDiv = document.getElementById("rangeDiv");
const rangeInfo = document.createElement("label");
const eraseInfo = document.getElementById("eraseState");
rangeInfo.classList.add("info");
rangeInfo.innerHTML = "The current size of the grid is" + `${sizeValue.value}`;
rangeDiv.appendChild(rangeInfo);
const colorPicker = document.getElementById("colorPicker");
const colorSwitch = document.getElementById("colorSwitch");


const DEFAULTCOLOR = "#000000"
