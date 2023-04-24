let turn = 0;

const gameBoard =  (() => {
    const gameTurn = () => {
        if (turn == 0) {
            turn++;
            return human.token;
        }
        else if (turn == 1) {
            turn--;
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
        console.log("A");
        div.innerHTML = gameBoard.gameTurn();
    });
});
