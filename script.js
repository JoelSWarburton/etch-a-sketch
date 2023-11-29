
let gridSize = 16;
const container = document.querySelector("#canvas");
let colorModes = document.getElementsByName("mode");
let mode = "black";
colorModes.forEach((elem) => {
    elem.addEventListener("change", (event) => {
        mode = event.target.value;
    })
});


for(let i = 0; i < gridSize; i++) {

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement("div"); 
        cell.classList.add("cell")
        rowDiv.appendChild(cell);
        
        cell.addEventListener("mouseover", (e) => {
            
            colorCell(cell);
            //cell.classList.add("colored");
        });

    }
    container.appendChild(rowDiv);


}


function updateMode() {
    console.log("updating")

    colorModes = document.getElementsByName("mode");
    colorModes.forEach((mode) => {
        if(mode.hasAttribute("checked")) {
            console.log(mode);
        }
    })
}

function colorCell(cell) {
    console.log(mode)
    if(mode == "black") {
        cell.style.backgroundColor = "rgb(0,0,0)";
    } else if(mode == "rainbow") {
        cell.style.backgroundColor = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
    } else {
        let color = cell.style.backgroundColor;
        
        if(color == "") {
            cell.style.backgroundColor = "rgb(225, 225, 225)"
        }

        color = color.substring(4, color.length - 1)
        let colors = color.split(",");
        console.log(colors)
        for(let i = 0; i < 3; i++ ) {
            colors[i] = parseInt(colors[i]) - 25;
        }
        
        cell.style.backgroundColor = "rgb( " +colors[0] + "," + colors[1] + "," + colors[2] + ")";
    }
}