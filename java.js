const gameboard = (() =>
{   let choice = 0
    const gameboard = [
        " ", " ", " ",
        " ", " ", " ",
        " ", " ", " ",
    ]

return {gameboard};
})();

const player = (name, symbol) => {
    const wins = 0
    let playerSymbol = symbol
    
    return {name}
}
const playerOne = player("PlayerOne", "X");
const playerTwo = player("PlayerTwo", "O")

const displayController = (() => {
    const boardOnScreen = document.querySelectorAll(".board-div");

    let choice = window.prompt(`${playerOne.name} make your choice`)

    gameboard.gameboard.splice(choice, 0, "X")

    for (let i = 0; i < boardOnScreen.length; i++) {
        boardOnScreen[i].innerHTML = gameboard.gameboard[i]
    }
})()