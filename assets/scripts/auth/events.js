const display = require('./display')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const uiGame = require('../gameplay/game-ui')
const store = require('../store')

const clickSignUp = function () {
  console.log("sign-up success")
  display.status.reset()
  display.status.signUp = true
  console.log(display.status)
  display.updateDisplay()
}
const clickSignIn = function () {
  console.log("sign-in success")
  display.status.reset()
  display.status.signIn = true
  console.log(display.status)
  display.updateDisplay()
}
const clickSignOut = function () {
  console.log("sign-out success")
  display.status.reset()
  display.status.signOut = true
  console.log(display.status)
  display.updateDisplay()
  uiGame.resetBoard()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
const clickChangePass = function () {
  console.log("change password success")
  if (!display.status.changePass) {
    display.status.reset()
    display.status.changePass = true
    console.log(display.status)
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
  console.log(formData)
  if (display.status.signUp && $('#email').val() && $('#password').val() && $('#password-confirm').val()) {
    console.log("on submit sign up")
    delete formData.passwords
    api.signUp(formData)
      .then(ui.onSignUpSuccess)
      .catch(ui.onSignUpFailure)
  } else if (display.status.signIn && $('#email').val() && $('#password').val()) {
    console.log("on submit sign in")
    delete formData.credentials.password_confirmation
    console.log(formData)
    api.signIn(formData)
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFailure)
  } else if (display.status.changePass && $('#old-pass').val() && $('#new-pass').val()) {
    console.log("changePass working")
    delete formData.credentials
    console.log(formData)
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
