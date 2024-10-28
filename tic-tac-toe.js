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