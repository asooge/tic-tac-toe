const store = require('../store')
const game = require('../gameplay/events')
const display = require('./display')

const onSignUpSuccess = function (formData) {
  $('#user-auth')[0].reset()
  $('#enter-email, #enter-password, #submit, #enter-confirm-pass').hide()
  $('#message-display').text(`sign up success: ${formData.user.email}`).css('font-weight', 'bold')
}

const onSignUpFailure = function () {
  $('#message-display').text(`sign up failed`)
  $('#user-auth')[0].reset()
}

const onSignInSuccess = function (formData) {
  store.user = formData.user
  $('#user-auth')[0].reset()
  $('#change-pass, #sign-out, #game-data').show()
  $('#sign-up, #sign-in, #enter-email, #enter-password, #submit').hide()
  $('#user-info').text('')
  $('#message-display').text(`signed in as: ${store.user.email}`)
  $('#play-game').fadeIn(600)
}

const onSignInFailure = function () {
  $('#message-display').text(`sign in failed`)
  $('#user-auth')[0].reset()
}

const onSignOutSuccess = function () {
  $('#user-info').text(`${store.user.email} - signed out`)
  $('#message-display').text(`sign in or sign up to play`)
  $('.game-board').off('click', game.turnX)
}

const onSignOutFailure = function () {
  $('#message-display').text(`unable to sign out`)
}

const onChangePasswordSuccess = function () {
  display.status.changePass = !display.status.changePass
  $('#user-auth')[0].reset()
  $('#user-info').text('change password successful')
  $('#enter-old, #enter-new, #submit').hide()
  $('#game-data').show()
  $('#play-game').fadeIn(600)
}

const onChangePasswordFailure = function () {
  $('#user-info').text('change password failed')
  $('#user-auth')[0].reset()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
