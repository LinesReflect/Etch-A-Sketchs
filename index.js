const gridContainer = document.querySelector(".grid-container");
const squares = document.querySelector(".squares");
const starButton = document.querySelector(".start-button");


starButton.addEventListener("click", startDrawing);


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
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `calc(100% / ${size})`;
    cell.style.height = `calc(100% / ${size})`;
    gridContainer.appendChild(cell);
    };
  };