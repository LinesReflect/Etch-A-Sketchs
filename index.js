const gridContainer = document.querySelector(".grid-container");
const squares = document.querySelector(".squares");
const startButton = document.querySelector(".start-button");
const cells = document.querySelector("div");
const ERASEBTN = document.querySelector(".erase-button")
let pixels = [];



let activated = false;


startButton.addEventListener("click", startDrawing);
ERASEBTN.addEventListener("click", eraseCanvas);


function startDrawing() {
  let gridSize = parseInt(prompt("Choose a grid size between 16x16 and 64x64."));
  if (gridSize > 64 || gridSize < 16) {
    startDrawing()
  }else {
  return createGrid(gridSize);
  };
};

function createGrid(size) {
  for (let i = 1; i <= size * size; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("cell");
    pixel.style.width = `calc(100% / ${size})`;
    pixel.style.height = `calc(100% / ${size})`;
    pixels.push(pixel)
    pixel.value = i;
    gridContainer.appendChild(pixel);
    };

  pixels.forEach(px => px.addEventListener("dragenter", function() {changeToColor(px)}))
};


function changeToColor(square) {
    square.style.backgroundColor = "orange";
  return;
};


function eraseCanvas() {
  pixels.forEach(px => px.style.backgroundColor = "#a59c90")
};