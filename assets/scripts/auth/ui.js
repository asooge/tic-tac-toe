const store = require('../store')

const onSignUpSuccess = function (formData) {
  console.log(formData)
  $('#message-display').text(`sign up success: ${formData.user.email}`)
}

const onSignUpFailure = function () {
  $('#message-display').text(`sign up failed`)
}

const onSignInSuccess = function (formData) {
  console.log("sign in successful")
  store.user = formData.user
  console.log(store)
  $('#change-pass, #sign-out').show()
  $('#sign-up, #sign-in, #enter-email, #enter-password, #submit').hide()
  $('#user-info').text('')
  $('#message-display').text(`signed in as: ${store.user.email}`)
}

const onSignInFailure = function () {
  console.log("sign in failed")
  $('#message-display').text(`unable to sign in`)
}

const onSignOutSuccess = function () {
  $('#user-info').text(`${store.user.email} - signed out`)
  $('#message-display').text(`sign in or sign up to play`)
}

const onSignOutFailure = function () {
  $('#message-display').text(`unable to sign out`)
}

const onChangePasswordSuccess = function () {
  $('#user-info').text('change password successful')
}

const onChangePasswordFailure = function () {
  $('#user-info').text('unable to change password')
}


module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
