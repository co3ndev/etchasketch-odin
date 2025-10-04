// game container. we need this to know where to add our div
let gameWrapper = document.querySelector(".game-wrapper");
// Div to be created
let gridNumValue = 256;

 document.addEventListener('DOMContentLoaded', function() {
    createGrid(256);
    console.log('DOM is ready!');
 });

function cellSize(){
    cellWHID = document.getElementById("grid-size");
    cellWH = cellWHID.value;
    cellSizeWH = 432 / cellWHID.value; 
}

function clearGrid(){
    gameWrapper.innerHTML = "";
}

function resetGrid(){
    createGrid(gridNum);
}

function createGrid(gridNum){
    clearGrid();
    gridNumElement = document.getElementById("grid-size");
    if (gridNum != 256)
        gridNumValue = gridNumElement.value;
    // create 16x16 grid
    for (i =0; i <= gridNum -1; i++){
        // cell size
        cellSize();


        let newDiv = document.createElement("div");
        // assign id
        newDiv.id = "gridBox";
        newDiv.addEventListener("mouseover", function(){
            this.style.backgroundColor = "#222";
        });
        // add childs
        gameWrapper.appendChild(newDiv);
    }
 }