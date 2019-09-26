const store = require('../store')

store.currentMove = "x"

const switchPlayer = function () {
  if (store.currentMove === "x") {
    store.currentMove = "o"
  } else {
    store.currentMove = "x"
  }
  console.log(store.currentMove)
}

module.exports = {
  switchPlayer
}
