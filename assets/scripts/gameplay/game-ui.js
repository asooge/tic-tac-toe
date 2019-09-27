const store = require('../store')
const game = require('./game-logic')

const displayPlayer = function (gameBoard) {
  if (store.currentMove === "x") {
    $('#player-display').text('Player X').css('color', 'black')
  } else if (store.currentMove === "o") {
    $('#player-display').text('Player O').css('color', 'blue')
  }

}

const resetBoard = function () {
  $('.game-board').children().text('square').css('color', 'transparent')
}

const changeBoard = function(event) {
  console.log('changeBoard function')
  console.log(event.target.id)
  $(event.target).text(store.currentMove).css('color', 'black')
}


const turnFail = function () {
  console.log('turn update failed')
}

module.exports = {
  turnFail,
  displayPlayer,
  changeBoard,
  resetBoard
}
