const store = require('../store')
const api = require('./game-api')
const ui = require('./game-ui')
const game = require('./game-logic')
const uiAuth = require('../auth/display')

const storeGameData = function (data) {
  store.gameData = data
  store.gameData.wins = 0
  store.gameData.ties = 0
  store.gameData.total = store.gameData.games.length
  store.gameData.games.forEach(game.countWins)
  store.gameData.loss = store.gameData.total - store.gameData.wins - store.gameData.ties
  ui.displayData()
}

const showData = function () {
  uiAuth.status.gameData = !uiAuth.status.gameData
  if (uiAuth.status.gameData) {
    api.getData()
      .then(storeGameData)
  } else {
    $('.game-data').hide()
    $('#game-data').show()
  }
}

const playGame = function () {
  console.log('game is playing')
  store.currentMove = 'x'
  store.over = false
  console.log(store)
  ui.displayPlayer()
  $('#play-game').hide()
  $('.game-board').children().text('square').css('color', 'transparent')
  $('.game-board').off('mousedown', turnX)
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
}

const storeData = function (gameBoard) {
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
      .then(storeData)
      .then(ui.displayPlayer)
      .then(game.checkWinner)
      .catch(ui.turnFail)
    switchPlayer()
  } else {
    console.log('already clicked. need function to animate already clicked')
  }
}

const gameEvents = function(gameData) {
  store.game = gameData.game
  $('.game-board').on('mousedown', turnX)
}

module.exports = {
  playGame,
  showData
}
