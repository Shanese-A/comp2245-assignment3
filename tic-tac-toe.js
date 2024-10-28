document.addEventListener("DOMContentLoaded", function() {
    let squares = document.querySelectorAll("#board div");
    squares.forEach(square=> square.classList.add("square"));
});

let turn = "X";

document.querySelectorAll("#board .square").forEach(square => {
    square.addEventListener("click", function() {
        if (!square.textContent) {
            square.textContent = turn;
            square.classList.add(turn);
            turn = (turn === "X") ? "O" : "X";
        }
    });
});

document.querySelectorAll("#board .square").forEach(square => {
    square.addEventListener("mouseover", function() {
        square.classList.add("hover");
    });
    square.addEventListener("mouseout", function() {
        square.classList.remove("hover");
    });
});
function checkWinner() {
    const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    let squares = document.querySelectorAll("#board .square");
    let winner = null;
    winCombos.forEach(combo => {
        const [a, b, c] = combo;
        if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
            winner = squares[a].textContent;
        }
    });
    if (winner) {
        const status = document.getElementById("status");
        status.textContent = `Congratulations! ${winner} is the Winner!`;
        status.classList.add("you-won");
    }
}