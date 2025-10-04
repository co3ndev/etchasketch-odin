// game container. we need this to know where to add our div
let gameWrapper = document.querySelector(".game-wrapper");
// # of rows/columns element id

 document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is ready!');
    createGrid();

 });
function clearGrid(){
    gameWrapper.innerHTML = "";
}

function resetGrid(){
    createGrid();
}



function createGrid(){
    clearGrid();
    let gridSizeElem = document.getElementById("grid-size");
    let gridNum = 16; // default value
    if (gridSizeElem && gridSizeElem.firstElementChild && !isNaN(gridSizeElem.firstElementChild.value)) {
        gridNum = parseInt(gridSizeElem.firstElementChild.value, 10);
    }

    let gridSz = parseInt(gridSizeElem.firstElementChild.value, 10);

    gridNum = gridNum * gridNum;

    for (let i =0; i <= gridNum -1; i++){
        let newDiv = document.createElement("div");
        // assign id
        newDiv.classList.add("boxsizing");
        newDiv.addEventListener("mouseover", function(){
            this.style.backgroundColor = "#222";
        });
        // add childs
        gameWrapper.appendChild(newDiv);

        
    }
    let boxSize = document.getElementsByClassName(".boxsizing");
    let boxW = boxSize.style.width;
    let boxH = boxSize.style.height;
    boxW = 432 / gridSz + "px";
    boxH = 432 / gridSz + "px";
    console.log("Bippity")
    console.log("Bippity")
 }
