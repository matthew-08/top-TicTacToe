
const boardDivs = document.querySelectorAll(".board-div");

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
                        return displayController.win("X");
                    }
                } else if (gameboard[index] === "O") {
                    counterO++
                    if (counterO === 3) {
                        return displayController.win("O");
                    }
                }
        }
    }
}

    const gameboard = [
        " ", " ", " ",
        " ", " ", " ",
        " ", " ", " ",
    ]

return {gameboard, checkWin};
})();


const player = (name, symbol, status) => {
    let wins = 0
    let updateWins = () => wins += 1
    let getWins = () => {return wins}
    let playerSymbol = symbol
    let playing = status
    return {name, playing, playerSymbol, updateWins, getWins}
}

const playerOne = player("PlayerOne", "X", true);
const playerTwo = player("PlayerTwo", "O", false)

const displayController = ((choice, player) => {
  

    const change = (choice,player) => {
    playerSymbol = player.playerSymbol
    chosenDiv = choice;
    if (chosenDiv.innerHTML != " "){
        return
    }
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

    function win(symbol) {
        if (symbol == "X") {
            playerOne.updateWins();
            document.querySelector(".score-p1").textContent++
            reset();
            
        } else if (symbol == "O") {
            playerTwo.updateWins()
            document.querySelector(".score-p2").textContent++
            reset();
        }
    }

    function reset() {
        for (let i = 0; i < gameboard.gameboard.length; i++) {
            gameboard.gameboard[i] = " "
        }
        boardDivs.forEach(e => e.classList.toggle("transitionDivs"))
        setTimeout(() => {
            updateDisplay();
            boardDivs.forEach(div => div.classList.remove("transitionDivs"))
        }, 1000);


    }
    return {change, win};
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


