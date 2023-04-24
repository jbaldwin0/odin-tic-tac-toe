let turn = 0;

const gameBoard =  (() => {
    const choice = (input) => input;
})();

const player = (token) => {
    return {token};
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

human = player("X");
computer = player("O");

function gameTurn () {
    if (turn == 0) {
        turn++;
        return human.token;
    }
    else if (turn == 1) {
        turn--;
        return computer.token;
    }
}

let gameTiles = document.querySelectorAll(".game-tile");
gameTiles.forEach( function(div) {
    div.addEventListener("click", function() {
        console.log("A");
        div.innerHTML = gameTurn();
    });
});
