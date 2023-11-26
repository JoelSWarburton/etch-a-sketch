
let gridSize = 16;
const container = document.querySelector("#canvas");
console.log(container);

for(let i = 0; i < gridSize; i++) {

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement("div"); 
        cell.classList.add("cell")
        rowDiv.appendChild(cell);

    }
    container.appendChild(rowDiv);


}