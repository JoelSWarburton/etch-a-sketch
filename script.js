let gridSize = 16;
const container = document.querySelector("#canvas");
let colorModes = document.getElementsByName("mode");
let hasBorder = document.querySelector("#toggle-border").checked;
let mode = "black";
colorModes.forEach((elem) => {
  elem.addEventListener("change", (event) => {
    mode = event.target.value;
  });
});

const initGrid = function () {
  container.textContent = "";
  for (let i = 0; i < gridSize; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      rowDiv.appendChild(cell);

      cell.addEventListener("mouseover", (e) => {
        colorCell(cell);
        //cell.classList.add("colored");
      });
    }
    container.appendChild(rowDiv);
    renderBorder();
  }
};

function colorCell(cell) {
  console.log(mode);
  if (mode == "black") {
    cell.style.backgroundColor = "rgb(0,0,0)";
  } else if (mode == "rainbow") {
    cell.style.backgroundColor =
      "rgb(" +
      Math.random() * 255 +
      "," +
      Math.random() * 255 +
      "," +
      Math.random() * 255 +
      ")";
  } else {
    let color = cell.style.backgroundColor;

    if (color == "") {
      cell.style.backgroundColor = "rgb(225, 225, 225)";
    }

    color = color.substring(4, color.length - 1);
    let colors = color.split(",");
    console.log(colors);
    for (let i = 0; i < 3; i++) {
      colors[i] = parseInt(colors[i]) - 25;
    }

    cell.style.backgroundColor =
      "rgb( " + colors[0] + "," + colors[1] + "," + colors[2] + ")";
  }
}

const updateGridSize = function (e) {
  gridSize = e.target.value;

  initGrid();
};

document
  .querySelector("#grid-size-slider")
  .addEventListener("mousemove", (e) => {
    console.log("mouse event fired");
    document.querySelector("#grid-label").textContent =
      e.target.value + " x " + e.target.value;
  });

document.querySelector("#grid-size-slider").addEventListener("change", (e) => {
  updateGridSize(e);
  document.querySelector("#grid-label").textContent =
    e.target.value + " x " + e.target.value;
});

document
  .querySelector("#clear-btn")
  .addEventListener("click", () => initGrid());

document.querySelector("#toggle-border").addEventListener("change", () => {
  toggleBorder();
});

const renderBorder = function () {
  if (!hasBorder) {
    container.classList.remove("border");
    document
      .querySelectorAll(".cell")
      .forEach((cell) => cell.classList.remove("border"));
    document
      .querySelectorAll(".row")
      .forEach((row) => row.classList.remove("border"));
  } else {
    container.classList.add("border");
    document
      .querySelectorAll(".cell")
      .forEach((cell) => cell.classList.add("border"));
    document
      .querySelectorAll(".row")
      .forEach((row) => row.classList.add("border"));
  }
};

function toggleBorder() {
  hasBorder = document.querySelector("#toggle-border").checked;

  renderBorder();
}
initGrid();
