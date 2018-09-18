var Dropbox = require('dropbox').Dropbox;
global.fetch = require('isomorphic-fetch');
var keys = require('./config/keys');
var dbx = new Dropbox({ accessToken: keys.dbxAccessToken });

console.log('Started');
dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

