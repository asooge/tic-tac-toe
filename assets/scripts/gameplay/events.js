const store = require('../store')
const api = require('./game-api')
const ui = require('./game-ui')
const game = require('./game-logic')

const playGame = function () {
  console.log('game is playing')
  store.currentMove = 'x'
  store.over = false
  console.log(store)
  ui.displayPlayer()
  $('#play-game').hide()
  $('.game-board').children().text('square').css('color', 'transparent')
  $('.game-board').off('click', turnX)
  $('#player-display').fadeIn(800)
  api.createGame()
    .then(gameEvents)
}

const switchPlayer = function (gameBoard) {
  if (store.currentMove === 'x') {
    store.currentMove = 'o'
  } else if (store.currentMove === 'o') {
    store.currentMove = 'x'
  }
  console.log(store.currentMove)
  store.game = gameBoard.game
}

const turnX = function (event) {
  console.log(event)
  store.event = event
  store.currentClick = parseInt(event.target.dataset.sq)
  if (!store.game.cells[store.currentClick]) {
    ui.changeBoard(event)
    console.log('store over is')
    console.log(store)
    api.updateGame()
      .then(switchPlayer)
      .then(ui.displayPlayer)
      .then(game.checkWinner)
      .catch(ui.turnFail)
  } else {
    console.log('already clicked. need function to animate already clicked')
  }
}

const gameEvents = function(gameData) {
  store.game = gameData.game
  $('.game-board').on('click', turnX)
  // $('#square-0').on('click', turnX)
  // $('#square-1').on('click', turnX)
  // $('#square-2').on('click', turnX)
  // $('#square-3').on('click', turnX)
  // $('#square-4').on('click', turnX)
  // $('#square-5').on('click', turnX)
  // $('#square-6').on('click', turnX)
  // $('#square-7').on('click', turnX)
  // $('#square-8').on('click', turnX)
}

module.exports = {
  playGame
}
