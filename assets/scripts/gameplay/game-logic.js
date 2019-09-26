const store = require('../store')

const currentGame = ""
store.currentMove = "x"
const currentClick = ""

const switchPlayer = function () {
  if (store.currentMove === "x") {
    store.currentMove = "o"
  } else {
    store.currentMove = "x"
  }
  console.log(store.currentMove)
}

module.exports = {
  currentGame,
  switchPlayer,
  currentClick
}
