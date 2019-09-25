const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  console.log("api sign up")
  console.log(formData)
  return $.ajax ({
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

module.exports = {
  signUp,
  signIn
}
