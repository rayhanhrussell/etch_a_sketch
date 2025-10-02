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
let isDrawing = false;
let isEraseing = false;
let crrentSize = 16;
let currentColor = DEFAULTCOLOR;
let colorDrawing = false;

//Event handlers
sizeButton.addEventListener("click",()=> {dialog.showModal()});
closs.addEventListener("click", ()=> dialog.close());


//Reset Feature added
resetButton.addEventListener("click", ()=>{
    //removeGrid();
    //createGrid(currentSize)
    document.querySelectorAll("div.cell").forEach((item)=> {
        item.style.backgroundColor = "white";
    });

    });

eraseButton.addEventListener("click", (e)=> eraseDrawing(e));
eraseButton.addEventListener("dblclick", (e)=>eraseDrawing(e));
colorSwitch.addEventListener("change", changeColor);

//Grid drawing function
function createGrid(gSize){
    for (let i=0; i<(gSize*gSize); i++)
    {
        let gridCell = document.createElement("div");
        gridCell.style.height = `${(600/gSize)-0.25}px`;
        gridCell.style.width = `${(600/gSize)-0.25}px`;
        gridCell.classList.add("cell");
        gridCell.addEventListener("mousedown",(e)=> draw(e));
        gridCell.addEventListener("mouseover", (e)=> draw(e));
        gridCell.addEventListener("mouseup",(e)=> draw(e));
        gridCell.addEventListener("drag", (e)=> draw(e));
        gridCell.addEventListener("mouseover", (e)=> erase(e));
        myGrid.appendChild(gridCell);
    }
}