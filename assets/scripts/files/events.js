'use strict'
// OJO Verify that the relative path are ok.
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

// Sign Up
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.signUpFailure)
}

// Sign In
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.signInFailure)
}

// Sign Out
const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // event.target
  api.signOut(data)
    .done(ui.signOutSuccess)
    .fail(ui.signOutFailure)
}

// Change password
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // event.target
  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.changePasswordFailure)
}

const onUpload = function (event) {
  event.preventDefault()
  const data = new FormData(event.target)
  api.upload(data)
    .done(ui.uploadSuccess)
    .fail(ui.uploadFailure)
}

const onGetFiles = function (event) {
  event.preventDefault()

  api.getFiles()
    .done(ui.getFilesSuccess)
    .fail(ui.getFilesFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onUpload,
  onGetFiles
}
