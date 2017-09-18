'use strict'

const app = require('../app.js')

const loopFiles = function (data) {
  $('#myFile-data').empty()
  $('#theirFile-data').empty()
  $('#myFile-data').removeClass('hidden')
  $('#theirFile-data').removeClass('hidden')
  const files = data.files
  for (let i = 0; i < files.length; i++) {
    if (files[i]._user === app.user.id) {
      $('#myFile-data').append(
        '<div> ' +
        '<img src="https://i.imgur.com/mlIU8Y7.png">' +
        '<h2>' + files[i].title + '</h2>' +
        '<p>' + files[i].tags + '</p>' +
        '<button class="delete-file btn btn-default" data-id="' + files[i].id + '" id="' + files[i].id + '" type="button" class="btn">Delete</button>' +
        '<form class="edit" data-id="' + files[i].id + '">' +
        '<legend>Edit Tags</legend>' +
        '<input type="text" name="files[tags]" placeholder="New Tags">' +
        '<input type="submit" class="edit-file btn btn-default" data-id="' + files[i].id + '" type="button" class="btn"></button>' +
        '</form>' +
        '<a class="download-file btn btn-default" href="' + files[i].url + '">Download</a>' +
        '</div>'
      )
    } else {
      $('#theirFile-data').append(
        '<div> ' +
        '<img src="../../../images/logo.png">' +
        '<h2>' + files[i].title + '</h2>' +
        '<p>' + files[i].tags + '</p>' +
        '<a class="download-file btn btn-default" href="' + files[i].url + '">Download</a>' +
        '</div>'
      )
    }
  }
}

module.exports = {
  loopFiles
}
