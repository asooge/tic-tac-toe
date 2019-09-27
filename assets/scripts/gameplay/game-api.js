const config = require('../config')
const store = require('./../store')

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
          "index": store.currentClick,
          "value": store.currentMove
        },
        "over": store.over
      }
    }
  })
}

const endGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' +store.game.id,
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    method: "PATCH",
    data: {
      "game": {
        "over": store.over
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  endGame
}
