let turn = 0;

const gameBoard =  (() => {
    const gameTurn = () => {
        if (turn == 9) {
            console.log("End of game");
        }
        else if (turn % 2 == 0) {
            turn++;
            return human.token;
        }
        else if (turn % 2 == 1) {
            turn++;
            return computer.token;
        }
    };
    return {gameTurn};
})();

const player = (token) => {
    return {token};
};

human = player("X");
computer = player("O");

let gameTiles = document.querySelectorAll(".game-tile");
gameTiles.forEach( function(div) {
    div.addEventListener("click", function() {
        div.innerHTML = gameBoard.gameTurn();
    });
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function() {
    turn = 0;
    gameTiles.forEach( function(div) {
        div.innerHTML = "";
    });
});
