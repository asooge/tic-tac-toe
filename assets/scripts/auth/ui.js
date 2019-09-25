const store = require('../store')

const onSignUpSuccess = function (formData) {
  console.log("sign up successful")
}

const onSignUpFailure = function () {
  console.log("sign up failed")
}

const onSignInSuccess = function (formData) {
  console.log("sign in successful")
  store.user = formData.user
  console.log(store)
  $('#change-pass, #sign-out').show()
  $('#sign-up, #sign-in, #enter-email, #enter-password, #submit').hide()
  $('#message-display').text(`signed in as: ${store.user.email}`)
}

const onSignInFailure = function () {
  console.log("sign in failed")
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
