'use strict'
// OJO Verify that the relative path are ok.
const app = require('../app.js')
const logic = require('./logic')

// Sign Up
const signUpSuccess = (data) => {
  app.user = data.user // OJO Verify if we need this line.
  console.log(data)
  console.log('Sign up successful')
}
const signUpFailure = (error) => {
  console.log(error)
}

// Sign In
const signInSuccess = (data) => {
  app.user = data.user // OJO Verify if we need this line.
  console.log(data)
  console.log('Sign in successful')
}
const signInFailure = (error) => {
  console.log(error)
}

// Sign Out
const signOutSuccess = () => {
  app.user = null
  console.log(app)
  console.log('Sign out successful')
}

const signOutFailure = (error) => {
  console.log(error)
}

// Change password
const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
}
const changePasswordFailure = (error) => {
  console.log(error)
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

const editSuccess = function (data) {
  console.table(data)
}

const editFailure = (error) => {
  console.error(error)
}

const deleteSuccess = function (data) {
  console.table(data)
}

const deleteFailure = (error) => {
  console.error(error)
}

const downloadSuccess = function () {
  console.log('downloading!')
}

const downloadFailure = (error) => {
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
  uploadSuccess,
  uploadFailure,
  getFilesSuccess,
  getFilesFailure,
  editSuccess,
  editFailure,
  deleteSuccess,
  deleteFailure,
  downloadSuccess,
  downloadFailure
}
