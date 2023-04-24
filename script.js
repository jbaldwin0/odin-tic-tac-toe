const gameBoard =  (() => {
    const choice = () => 1+1; // filler
})();

const player = (input) => {
    let turn = 0;

    /*
    if (turn == 0) {
        // X on square method
        turn++;
    }
    else if (turn == 1) {
        // 0 on square
        turn--;
    }
    */
};

let gameTiles = document.querySelectorAll(".game-tile");
gameTiles.forEach( function(div) {
    div.addEventListener("click", function() {
        console.log("A");
    });
});