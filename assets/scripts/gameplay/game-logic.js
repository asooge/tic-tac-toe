const store = require('../store')

const switchPlayer = function () {
  if (store.currentMove === "x") {
    store.currentMove = "o"
  } else if (store.currentMove === "o") {
    store.currentMove = "x"
  }
  console.log(store.currentMove)
}

module.exports = {
  switchPlayer
}
