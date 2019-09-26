const api = require('./game-api')
const ui = require('./game-ui')

const playGame = function() {
  console.log("game is playing")
  $('#play-game').hide()
  $('#player-display').fadeIn(800)
  api.createGame()
    .then(ui.onCreateGame)
}

module.exports = {
  playGame
}
