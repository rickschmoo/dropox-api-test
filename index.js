var Dropbox = require('dropbox').Dropbox;
global.fetch = require('isomorphic-fetch');
var keys = require('./config/keys');
var dbx = new Dropbox({ accessToken: keys.dbxAccessToken });


dbx.usersGetCurrentAccount()
  .then(function(response) {
  	console.log('USER ID');
    console.log(response);
  })
  .catch(function(error) {
    console.error(error);
  });


dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log('TEST DIR LISTING');
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

