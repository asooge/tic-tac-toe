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
  store.currentMove = 'x'
  store.over = false
  ui.displayPlayer()
  $('#play-game').hide()
  $('.game-board').children().text('s').css('color', 'transparent')
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
}

const storeData = function (gameBoard) {
  store.game = gameBoard.game
}

const turnX = function (event) {
  $('.game-board').off('mousedown', turnX)
  setTimeout(() => { $('.game-board').on('mousedown', turnX) }, 500)
  store.event = event
  store.currentClick = parseInt(event.target.dataset.sq)
  if (!store.game.cells[store.currentClick]) {
    ui.changeBoard(event)
    api.updateGame()
      .then(storeData)
      .then(ui.displayPlayer)
      .then(game.checkWinner)
      .catch(ui.turnFail)
    switchPlayer()
  } else {
    $(event.target).addClass('animated shake').css('background-color', '#fc5603')
    setTimeout(() => { $(event.target).removeClass('animated shake').css('background-color', '#edece8') }, 750)
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
