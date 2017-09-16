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

// Upload and create
const onUpload = function (event) {
  event.preventDefault()
  const data = new FormData(event.target)
  api.upload(data)
    .done(ui.uploadSuccess)
    .fail(ui.uploadFailure)
}

// Read
const onGetFiles = function (event) {
  event.preventDefault()

  api.getFiles()
    .done(ui.getFilesSuccess)
    .fail(ui.getFilesFailure)
}

// Edit (Update)
const onEdit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.edit(data)
    .done(ui.editSuccess)
    .fail(ui.editFailure)
}

// Delete
const onDelete = function (event) {
  event.preventDefault()
  api.deleteFile(event.target.dataset.id)
    .done(ui.deleteSuccess)
    .fail(ui.deleteFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onUpload,
  onGetFiles,
  onEdit,
  onDelete
}
