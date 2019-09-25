'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')

$(() => {
  $('#sign-up').on('click', events.signUp)
  $('#sign-in').on('click', events.signIn)
  $('#sign-out').on('click', events.signOut)
  $('#change-pass').on('click', events.changePass)
})
