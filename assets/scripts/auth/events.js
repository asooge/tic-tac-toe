const display = require('./display')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const uiGame = require('../gameplay/game-ui')
const store = require('../store')

const clickSignUp = function () {
  display.status.reset()
  display.status.signUp = true
  display.updateDisplay()
}
const clickSignIn = function () {
  display.status.reset()
  display.status.signIn = true
  display.updateDisplay()
}
const clickSignOut = function () {
  display.status.reset()
  display.status.signOut = true
  display.updateDisplay()
  uiGame.resetBoard()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
const clickChangePass = function () {
  if (!display.status.changePass) {
    display.status.reset()
    display.status.changePass = true
    display.updateDisplay()
    $('#player-display, #game-data').show()
  } else {
    $('#change-pass, #sign-out, #play-game').show()
    $('#sign-up, #sign-in, #enter-email, #enter-password, #submit, #enter-old, #enter-new').hide()
    // $('#user-info').text('')
    $('#message-display').text(`signed in as: ${store.user.email}`)
    display.status.changePass = false
  }
}

const onSubmit = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  if (display.status.signUp && $('#email').val() && $('#password').val() && $('#password-confirm').val()) {
    delete formData.passwords
    api.signUp(formData)
      .then(ui.onSignUpSuccess)
      .catch(ui.onSignUpFailure)
  } else if (display.status.signIn && $('#email').val() && $('#password').val()) {
    delete formData.credentials.password_confirmation
    api.signIn(formData)
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFailure)
  } else if (display.status.changePass && $('#old-pass').val() && $('#new-pass').val()) {
    delete formData.credentials
    api.changePassword(formData)
      .then(ui.onChangePasswordSuccess)
      .catch(ui.onChangePasswordFailure)
  }
}

module.exports = {
  clickSignUp,
  clickSignIn,
  clickSignOut,
  clickChangePass,
  status,
  onSubmit
}
