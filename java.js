const gameboard = (() =>
{   let choice = 0
    const gameboard = [
        " ", " ", " ",
        " ", " ", " ",
        " ", " ", " ",
    ]

return {gameboard};
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
        gameboard.gameboard.splice(boardSpot, 0, playerSymbol)
        updateDisplay();
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