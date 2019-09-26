const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  console.log("api sign up")
  console.log(formData)
  return $.ajax({
    method: "POST",
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  console.log("api sign in working")
  return $.ajax ({
    method: "POST",
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const signOut = function () {
  return $.ajax ({
    method: "DELETE",
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const changePassword = function (formData) {
  return $.ajax ({
    method: "PATCH",
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`},
    data: formData
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
