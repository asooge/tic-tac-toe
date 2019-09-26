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
  console.log(event)
  console.log('game data is:')

  // api.updateGame
  //   .then(ui.updateBoard)
}

const gameEvents = function(gameData) {
  game.currentGame = gameData


  $('#square-0').on('click', turnX)
  $('#square-1').on('click', turnX)
  $('#square-2').on('click', turnX)
  $('#square-3').on('click', turnX)
  $('#square-4').on('click', turnX)
  $('#square-5').on('click', turnX)
  $('#square-6').on('click', turnX)
  $('#square-7').on('click', turnX)
  $('#square-8').on('click', turnX)
}

module.exports = {
  playGame
}
