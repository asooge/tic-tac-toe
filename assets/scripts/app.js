'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./auth/events')
const display = require('./auth/display')

$(() => {
  display.loadDisplay ()
  $('#sign-up').on('click', events.clickSignUp)
  $('#sign-in').on('click', events.clickSignIn)
  $('#sign-out').on('click', events.clickSignOut)
  $('#change-pass').on('click', events.clickChangePass)
  $('#user-auth').on('submit', events.onSubmit)
})
