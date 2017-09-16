'use strict'
// Verify that the relative path are ok.
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./files/events')

$(() => {
  setAPIOrigin(location, config)
})

// On document ready
$(() => {
  addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const addHandlers = () => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#sign-out').on('submit', events.onSignOut)
  $('#change-password').on('submit', events.onChangePassword)
  $('#upload-form').on('submit', events.onUpload)
  $('#get-files').on('click', events.onGetFiles)
}

module.exports = {
  addHandlers
}
