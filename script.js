// game container. we need this to know where to add our div
let gameWrapper = document.querySelector(".game-wrapper");
 // Div to be created

 document.addEventListener('DOMContentLoaded', function() {
    // create 16x16 grid
    for (i =0; i <= 256-1; i++){
        let newDiv = document.createElement("div");
        // add classes
        newDiv.id = "gridBox";

        newDiv.addEventListener("mouseover", function(){
            this.style.backgroundColor = "#222";
        });
        // add childs
        gameWrapper.appendChild(newDiv);
    }
    console.log('DOM is ready!');
 });
