'use strict'

const app = require('../app')

const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  })
}

const upload = function (data) {
  console.log(app.user.id)
  data.append('user', app.user.id)
  return $.ajax({
    method: 'POST',
    url: app.host + '/files',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data,
    contentType: false,
    processData: false
  })
}

const getFiles = function () {
  console.log(app.user.id)
  return $.ajax({
    method: 'GET',
    url: app.host + '/files',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
const edit = function (id, data) {
  console.log(data)
  console.log(id)
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/files/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const deleteFile = function (id) {
  return $.ajax({
    url: app.host + '/files/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  upload,
  getFiles,
  edit,
  deleteFile
}
