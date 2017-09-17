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
}
const signUpFailure = (error) => {
  // console.log(error)
  $('#sign-up-error').removeClass('hidden')
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
  $('#myFile-data').removeClass('hidden')
  $('#theirFile-data').removeClass('hidden')
  $('#sign-in input').not('.submit-btn').val('')
}
const signInFailure = (error) => {
  // console.log(error)
  $('#sign-in-error').removeClass('hidden')
}
// Sign Out
const signOutSuccess = () => {
  app.user = null
  // console.log(app)
  // console.log('Sign out successful')
  $('#sign-out').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#myFile-data').addClass('hidden')
  $('#theirFile-data').addClass('hidden')
  $('#get-files').addClass('hidden')
  $('#upload-form').addClass('hidden')
}

const signOutFailure = (error) => {
  // console.log(error)
}
// Change password
const changePasswordSuccess = () => {
  // console.log('Password Successfully Changed.')
  $('#change-password').addClass('hidden')
  $('#change-password-error').addClass('hidden')
}
const changePasswordFailure = (error) => {
  // console.log(error)
  $('#change-password-error').removeClass('hidden')
}
// Upload a file
const uploadSuccess = () => {
  console.log('Uploaded Sucessfully')
}
const uploadFailure = (error) => {
  console.error(error)
}
// get files

const getFilesSuccess = function (data) {
  console.table(data)
  logic.loopFiles(data)
}
const getFilesFailure = (error) => {
  console.error(error)
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
  getFilesFailure
}
