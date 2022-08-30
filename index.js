const gridContainer = document.querySelector(".grid-container");
const squares = document.querySelector(".squares");
const startButton = document.querySelector(".start-button");
const cells = document.querySelector("div");
const ERASEBTN = document.querySelector(".erase-button");
const COLORSLIDER = document.querySelector("#my-color")
const COLORNAME = document.querySelector(".color-name")
let pixels = [];
let emptyCanvas = true



let activated = false;


startButton.addEventListener("click", startDrawing);
ERASEBTN.addEventListener("click", eraseCanvas);


function startDrawing() {
  let gridSize = parseInt(prompt("Choose a grid size between 16x16 and 64x64."));
  if (gridSize > 64 || gridSize < 16) {
    startDrawing();
  }else {
  return createGrid(gridSize);
  };
};

function createGrid(size) {
  if (emptyCanvas === false) {
    for (i = pixels.length; i > 0; i--) {
      gridContainer.removeChild(gridContainer.children[0]);
      pixels.pop()
    }
  }

  for (let i = 1; i <= size * size; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("cell");
    pixel.style.width = `calc(100% / ${size})`;
    pixel.style.height = `calc(100% / ${size})`;
    pixels.push(pixel);
    pixel.value = i;
    gridContainer.appendChild(pixel);
    };


  emptyCanvas = false

    
  getColor()
  COLORSLIDER.addEventListener("mousemove", getColor)
  pixels.forEach(px => px.addEventListener("dragenter", function() {changeToColor(px)}));
};


function changeToColor(square) {
  let color = getColor()
  let red = "#ff0000"
  square.style.backgroundColor = color;
  return;
};


function eraseCanvas() {
  pixels.forEach(px => px.style.backgroundColor = "#a59c90");
};



function getColor() {
  let sliderValue = parseInt(COLORSLIDER.value)

  let colorValue = "";
  if (sliderValue === 0) {
    COLORNAME.textContent = "Black"
    colorValue = "#000000"
  }else if (sliderValue === 1) {
    COLORNAME.textContent = "White"
    colorValue = "#ffffff"
  }else if (sliderValue === 2) {
    COLORNAME.textContent = "Red"
    colorValue = "#ff0000"
  }else if (sliderValue === 3) {
    COLORNAME.textContent = "Orange"
    colorValue = "#ffa500"
  }else if (sliderValue === 4) {
    COLORNAME.textContent = "Yellow"
    colorValue = "#ffff00"
  }else if (sliderValue === 5) {
    COLORNAME.textContent = "Blue"
    colorValue = "#0000ff"
  }else if (sliderValue === 6) {
    COLORNAME.textContent = "Green"
    colorValue = "#008000"
  }else if (sliderValue === 7) {
    COLORNAME.textContent = "Indigo"
    colorValue = "#4b0082"
  }else if (sliderValue === 8) {
    COLORNAME.textContent = "Violet"
    colorValue = "#9B26B6"
  }else if (sliderValue === 9) {
    COLORNAME.textContent = "Random"
    colorValue = createRandomColor()
  }else if (sliderValue === 10) {
    COLORNAME.textContent = "Eraser"
    colorValue = "#a59c90"
  }

  return colorValue;
};


function createRandomColor() {
  let randomNumber = Math.floor(Math.random() * 9)
  let randomColor;
  if (randomNumber === 0) {
    randomColor = "#000000"
  }else if (randomNumber === 1) {
    randomColor = "#ffffff"
  }else if (randomNumber === 2) {
    randomColor = "#ff0000"
  }else if (randomNumber === 3) {
    randomColor = "#ffa500"
  }else if (randomNumber === 4) {
    randomColor = "#ffff00"
  }else if (randomNumber === 5) {
    randomColor = "#0000ff"
  }else if (randomNumber === 6) {
    randomColor = "#008000"
  }else if (randomNumber === 7) {
    randomColor = "#4b0082"
  }else if (randomNumber === 8) {
    randomColor = "#9B26B6"
  }
  
  return randomColor;
};