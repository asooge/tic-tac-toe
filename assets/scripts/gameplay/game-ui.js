const store = require('../store')
const game = require('./game-logic')

const displayPlayer = function () {
  if (store.currentMove === "x") {
    $('#player-display').text('Player 1').css('color', 'black')
  } else if (store.currentMove === "o") {
    $('#player-display').text('Player 2').css('color', 'blue')
  }
}

const changeBoard = function(event) {
  console.log('changeBoard function')
  console.log(event.target.id)
  $(event.target).text(store.currentMove).css('color', 'black')
}

const updateBoard = function (gameBoard) {
  console.log('update board working')
  game.switchPlayer()
  displayPlayer()
  store.game = gameBoard.game
  console.log(store)
}

const turnFail = function () {
  console.log('turn update failed')
}

module.exports = {
  updateBoard,
  turnFail,
  displayPlayer,
  changeBoard
}
