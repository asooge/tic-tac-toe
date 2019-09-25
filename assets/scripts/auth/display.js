const status = {
  signUp: false,
  signIn: true,
  signOut: false,
  changePass: false,
  reset: function () {
    this.signUp = false
    this.signIn = false
    this.signOut = false
    this.changePass = false
  }
}

const events = require('./events.js')

const updateDisplay = function () {

}

module.exports = {
  status,
  updateDisplay
}
