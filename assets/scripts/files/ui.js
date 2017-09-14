'use strict'
// OJO Verify that the relative path are ok.
const app = require('../app.js')

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

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
