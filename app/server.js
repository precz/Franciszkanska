(function(){
  'use strict';

  var 
    app = require('express')(),
    router = require('./router'),
    server;

  exports.listen = function (serverPort, databaseUri, mainPath) {
    router.register(app, databaseUri, mainPath);
    server = app.listen(serverPort);
  };

  exports.close = function (callback) {
    server.close(callback);
  };
}());
