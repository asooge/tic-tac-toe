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

// const updateGame = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games/
//   })
// }

module.exports = {
  createGame
}
