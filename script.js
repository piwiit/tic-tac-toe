const cells = document.querySelectorAll('[data-cell]');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X';
const playerTwo = 'O';
let playerTurn = playerOne;

cells.forEach((cell) => {
  cell.addEventListener('click', playGame, { once: true });
});

let winnPatern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function playGame(e) {
  e.target.innerHTML = playerTurn;

  if (checkwin(playerTurn)) {
    gameUpdateStatus('win' + playerTurn);
    return endGame();
  } else if (checkDraw()) {
    gameUpdateStatus('draw');
    return endGame();
  }
  gameUpdateStatus(playerTurn);
  playerTurn === playerOne ? (playerTurn = playerTwo) : (playerTurn = playerOne);
}

function checkwin(playerTurn) {
  return winnPatern.some((combinaison) => {
    return combinaison.every((index) => {
      return cells[index].innerHTML == playerTurn;
    });
  });
}

function checkDraw() {
  return [...cells].every((cell) => {
    return cell.innerHTML == playerOne || cell.innerHTML == playerTwo;
  });
}

function gameUpdateStatus(status) {
  let statusText;

  switch (status) {
    case 'X':
      statusText = 'Au tour du joueur 2 (O)';
      break;

    case 'O':
      statusText = 'Au tour du joueur 1 (X)';
      break;

    case 'winX':
      statusText = 'Le joueur 1 (X) a gagné';
      break;

    case 'winO':
      statusText = 'le joueur 2 (O) a gagné';
      break;

    case 'draw':
      statusText = 'Egalité personne ne gagne !';
      break;
  }

  gameStatus.innerHTML = statusText;
  endGameStatus.innerHTML = statusText;
}

function endGame() {
  gameEnd.style.display = 'block';
}

function reloadGame() {
  window.location.reload();
}
