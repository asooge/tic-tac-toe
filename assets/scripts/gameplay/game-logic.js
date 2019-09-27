const store = require('../store')
const api = require('./game-api')
const ui = require('./game-ui')

const checkWinner = function () {
  const board = store.game.cells
  console.log('check winner')
  console.log(board)
  if (board[0] && board[0] === board[1] && board[1] === board[2]) {
    winnerIs(0)
  } else if (board[0] && board[0] === board[4] && board[4] === board[8]) {
    winnerIs(0)
  } else if (board[0] && board[0] === board[3] && board[3] === board[6]) {
    winnerIs(0)
  } else if (board[3] && board[3] === board[4] && board[4] === board[5]) {
    winnerIs(3)
  } else if (board[6] && board[6] === board[7] && board[7] === board[8]) {
    winnerIs(6)
  } else if (board[1] && board[1] === board[4] && board[4] === board[7]) {
    winnerIs(1)
  } else if (board[2] && board[2] === board[5] && board[5] === board[8]) {
    winnerIs(2)
  } else if (board[2] && board[2] === board[4] && board[4] === board[6]) {
    winnerIs(2)
  } else if (board.every(x => x === 'x' || x === 'o')) {
    winnerIs('tie')
  }
}

const gameOver = function (winner) {
  store.winPlayer = store.game.cells[winner]
  api.endGame()
    .then(console.log)
    .then(ui.showWinner(winner))
    .catch(ui.endGameFail)
}

const winnerIs = function (winner) {
  console.log('winner is ' + winner)
  if (winner === 'tie') {
    console.log('tie')
  }
  store.over = true
  gameOver(winner)
}

module.exports = {
  checkWinner
}
