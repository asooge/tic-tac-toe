const store = require('../store')
const event = require('./events')

const displayPlayer = function (gameBoard) {
  if (store.currentMove === 'x') {
    $('#player-display').text('Player X').css('color', 'black')
  } else if (store.currentMove === 'o') {
    $('#player-display').text('Player O').css('color', 'blue')
  }
}

const resetBoard = function () {
  $('.game-board').children().text('s').css('color', 'transparent')
}

const changeBoard = function (event) {
  $(event.target).text(store.currentMove).css('color', 'black')
}

const turnFail = function () {

}

const showWinner = function (winner) {
  if (winner === 'tie') {
    $('#player-display').text('Tie Game')
  } else {
    $('#player-display').text(`Player ${store.winPlayer.toUpperCase()} Wins!`)
  }
  $('#play-game').show()
  $('.game-board').off('mousedown', event.turnX)
}

const endGameFail = function () {

}

const displayData = function () {
  $('#games-played').text('Games Played: ' + store.gameData.games.length.toString())
  $('#win-ratio').text(`Win-Loss-Tie Ratio: ${store.gameData.wins}:${store.gameData.loss}:${store.gameData.ties}`)
  $('#win-percentage').text(`Win Percentage: ${Math.floor(store.gameData.wins / store.gameData.games.length * 100)}%`)
  $('.game-data').show()
}

module.exports = {
  turnFail,
  displayPlayer,
  changeBoard,
  resetBoard,
  showWinner,
  endGameFail,
  displayData
}
