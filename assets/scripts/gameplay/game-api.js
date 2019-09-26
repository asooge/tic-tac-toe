const config = require('../config')
const store = require('./../store')
const game = require('./game-logic')

const createGame = function () {
  console.log("url is" + config.apiUrl)
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: "POST",
    data: '{}'
  })
}

const updateGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' +store.game.id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: "PATCH",
    data: {
      "game": {
        "cell": {
          "index": game.currentClick,
          "value": store.currentMove
        },
        "over": false
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
