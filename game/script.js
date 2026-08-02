let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const status = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

function playMove(index) {

    if (board[index] !== "" || gameOver) {
        return;
    }

    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    // Color X and O
    if (currentPlayer === "X") {
        cells[index].style.color = "#2563eb";
    } else {
        cells[index].style.color = "#dc2626";
    }

    if (checkWinner()) {
        status.textContent = "🎉 Player " + currentPlayer + " Wins!";
        gameOver = true;
        return;
    }

    if (board.every(cell => cell !== "")) {
        status.textContent = "🤝 It's a Draw!";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = "Player " + currentPlayer + "'s Turn";
}

function checkWinner() {

    const winningCombinations = [

        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]

    ];

    for (let combination of winningCombinations) {

        const [a, b, c] = combination;

        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            return true;
        }
    }

    return false;
}

function restartGame() {

    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;

    status.textContent = "Player X's Turn";

    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.color = "#000";
    });

}
