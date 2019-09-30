
const status = {
  signUp: false,
  signIn: true,
  signOut: false,
  changePass: false,
  gameData: false,
  reset: function () {
    this.signUp = false
    this.signIn = false
    this.signOut = false
    this.changePass = false
  }
}
const clearDisplay = function () {
  $('.clear-auth').hide()
  $('#player-display, #play-game, .game-data').hide()
}

const loadDisplay = function () {
  clearDisplay()
  $('#sign-up, #sign-in').show()
}

const updateDisplay = function () {
  clearDisplay()
  if (status.signUp) {
    $('#sign-up, #sign-in, #enter-email, #enter-password, #enter-confirm-pass, #submit').show()
  } else if (status.signIn) {
    $('#sign-up, #sign-in, #enter-email, #enter-password, #submit').show()
  } else if (status.changePass) {
    $('#change-pass, #sign-out, #enter-old, #enter-new, #submit').show()
  } else if (status.signOut) {
    $('#sign-up, #sign-in').show()
  }
}

module.exports = {
  status,
  updateDisplay,
  loadDisplay
}
