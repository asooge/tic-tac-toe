const display = require('./display')

const signUp = function () {
  console.log("sign-up success")
  display.status.reset()
  display.status.signUp = true
  console.log(display.status)
  display.updateDisplay()
}
const signIn = function () {
  console.log("sign-in success")
  display.status.reset()
  display.status.signIn = true
  console.log(display.status)
  display.updateDisplay()
}
const signOut = function () {
  console.log("sign-out success")
  display.status.reset()
  display.status.signOut = true
  console.log(display.status)
  display.updateDisplay()
}
const changePass = function () {
  console.log("change password success")
  display.status.reset()
  display.status.changePass = true
  console.log(display.status)
  display.updateDisplay()
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
  status
}
