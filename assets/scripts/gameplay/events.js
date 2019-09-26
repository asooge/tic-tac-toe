const store = require('../store')

const api = require('./game-api')
const ui = require('./game-ui')
const game = require('./game-logic')

const playGame = function() {
  console.log("game is playing")
  $('#play-game').hide()
  $('#player-display').fadeIn(800)
  api.createGame()
    .then(gameEvents)
}

const turnX = function (event) {
  console.log('data number is')
  console.log(event.target.dataset.sq)
  game.currentClick = parseInt(event.target.dataset.sq)
  console.log('data as a number is')
  console.log(game.currentClick)
  console.log('game data is:')
  console.log(game.currentGame)
  game.switchPlayer()
  api.updateGame()
    .then(ui.updateBoard)
    .catch(ui.turnFail)
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
