const cells = document.querySelectorAll('[data-cell]');
const endGameStatus = document.getElementById('endGameStatus');
const playerOne = 'X';
const playerTwo = 'O';
let playerTurn = playerOne;

cells.forEach((cell) => {
  cell.addEventListener('click', playGame, { once: true });
});

function playGame(e) {
  e.target.innerHTML = playerTurn;
  updateStatus();
}

function updateStatus() {
  playerTurn === playerOne ? (playerTurn = playerTwo) : (playerTurn = playerOne);
  gameUpdateStatus(playerTurn);
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
}
