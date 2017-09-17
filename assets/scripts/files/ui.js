'use strict'
// OJO Verify that the relative path are ok.
const app = require('../app.js')
const logic = require('./logic')

// Sign Up
const signUpSuccess = (data) => {
  app.user = data.user // OJO Verify if we need this line.
  // console.log(data)
  // console.log('Sign up successful')
  $('#sign-up').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-up-error').addClass('hidden')
  $('#myFile-data').addClass('hidden')
  $('#theirFile-data').addClass('hidden')
  $('#sign-up input').not('.submit-btn').val('')
  $('#already-user').addClass('hidden')
  const signUpFail = $('#signUpFail')
  signUpFail.html('').css('color', 'red')
}
const signUpFailure = (error) => {
  // console.log(error)
  $('#sign-up-error').removeClass('hidden')
  const signUpFail = $('#signUpFail')
  signUpFail.html('Sign Up failed. Verify your email or password!').css('color', 'red')
}
// Sign In
const signInSuccess = (data) => {
  app.user = data.user // OJO Verify if we need this line.
  // console.log(data)
  // console.log('Sign in successful')
  $('#sign-in').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in-error').addClass('hidden')
  $('#upload-form').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#get-files').removeClass('hidden')
  $('#my-file-heading').removeClass('hidden')
  $('#their-file-heading').removeClass('hidden')
  $('#sign-in input').not('.submit-btn').val('')
  $('#not-user').addClass('hidden')
  const signInFail = $('#signInFail')
  signInFail.html('').css('color', 'red')
}
const signInFailure = (error) => {
  console.log(error)
  $('#sign-in-error').removeClass('hidden')
  const signInFail = $('#signInFail')
  signInFail.html('Sign In failed. Verify your email or password!').css('color', 'red')
}
// Sign Out
const signOutSuccess = () => {
  app.user = null
  // console.log(app)
  // console.log('Sign out successful')
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#my-file-heading').addClass('hidden')
  $('#their-file-heading').addClass('hidden')
  $('#get-files').addClass('hidden')
  $('#upload-form').addClass('hidden')
}

const signOutFailure = (error) => {
  console.log(error)
}
// Change password
const changePasswordSuccess = () => {
  // console.log('Password Successfully Changed.')
  $('#change-password').addClass('hidden')
  $('#change-password-error').addClass('hidden')
  $('#change-password input').not('.submit-btn').val('')
  const changePasswordFail = $('#changePasswordFail')
  changePasswordFail.html('').css('color', 'red')
}
const changePasswordFailure = (error) => {
  console.log(error)
  $('#change-password-error').removeClass('hidden')
  const changePasswordFail = $('#changePasswordFail')
  changePasswordFail.html('Change password failed. Verify your passwords!').css('color', 'red')
}
// Upload a file
const uploadSuccess = () => {
  console.log('Uploaded Sucessfully')
  $('#upload-form input').not('.submit-btn').val('')
}
const uploadFailure = (error) => {
  console.error(error)
}
// get files

const getFilesSuccess = function (data) {
  console.table(data)
  logic.loopFiles(data)
  $('#myFile-data').removeClass('hidden')
  $('#theirFile-data').removeClass('hidden')
}
const getFilesFailure = (error) => {
  console.error(error)
}

const oldUser = function () {
  $('#sign-up').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#already-user').addClass('hidden')
  $('#not-user').removeClass('hidden')
}

const newUser = function () {
  $('#sign-up').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#already-user').removeClass('hidden')
  $('#not-user').addClass('hidden')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  getFilesSuccess,
  uploadSuccess,
  uploadFailure,
  getFilesFailure,
  oldUser,
  newUser
}
