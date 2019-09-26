const store = require('../store')

const updateBoard = function (gameBoard) {
  console.log('update board working')
  store.game = gameBoard.game
  console.log(store)
}

const turnFail = function () {
  console.log('turn update failed')
}

module.exports = {
  updateBoard
}
