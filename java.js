const gameboard = (() =>
{   winningPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                       [0, 3 ,6], [1, 4, 7], [2, 5, 8],
                       [0, 4, 8], [2, 4, 6]];

    function checkWin() {
        let counterX = 0
        let counterO = 0
        for (let i = 0; i < winningPatterns.length; i++) {
            counterX = 0
            counterO = 0
            for(let j = 0; j < winningPatterns[i].length; j++){
                let index = winningPatterns[i][j]
                if (gameboard[index] === "X") {
                    counterX++
                    if (counterX === 3) {
                        return console.log("X win");
                    }
                } else if (gameboard[index] === "O") {
                    counterO++
                    if (counterO === 3) {
                        return console.log("O win")
                    }
                }
        }
    }
}

    let choice = 0
    const gameboard = [
        " ", " ", " ",
        " ", " ", " ",
        " ", " ", " ",
    ]

    // test code


return {gameboard, checkWin};
})();

const boardDivs = document.querySelectorAll(".board-div");

const player = (name, symbol, status) => {
    const wins = 0
    let playerSymbol = symbol
    let playing = status
    return {name, playing, playerSymbol}
}
const playerOne = player("PlayerOne", "X", true);
const playerTwo = player("PlayerTwo", "O", false)

const displayController = ((choice, player) => {

    let playerSymbol = ""
    let chosenDiv = ""

    const change = (choice,player) => {
    playerSymbol = player.playerSymbol
    chosenDiv = choice;
    if (playerOne.playing == true) {
        playerOne.playing = false
        playerTwo.playing = true
    } else {
        playerTwo.playing = false
        playerOne.playing = true
    }
    updateboard();
    }

    function updateDisplay() {
        for (let i = 0; i < boardDivs.length; i++) {
        boardDivs[i].innerHTML = gameboard.gameboard[i]
    }}

    function updateboard() {
        let arrayFrom = Array.from(boardDivs)
        let boardSpot = arrayFrom.findIndex((element) => element == chosenDiv)
        gameboard.gameboard.splice(boardSpot, 1, playerSymbol)
        updateDisplay()
        gameboard.checkWin();

    }
    return {change};
})();

const game = (() => {
    let player = ""
    function getplayer() {
    if (playerOne.playing == true) {
        player = playerOne;
    } else
        player = playerTwo;
}

    boardDivs.forEach
    (div => div.addEventListener("click", getChoice))


    function getChoice() {
       getplayer()
       let divChosen = event.target
       displayController.change(divChosen, player);
    }
    return {getChoice}
})();


