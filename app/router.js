(function(){
  
  express = require('express');
  path = require('path');

  module.exports.register = function register (app, databaseUri, mainPath) {
    var
      address = new (require('./models/address'))(databaseUri),
      mainController = new (require('./controllers/main'))(address),
      registerController = new (require('./controllers/register'))(address);

    app.use(
      '/public',
      express.static(
        path.join(process.env.PWD, 'public'),
        {maxAge: 1000*60*60}
      )
    );
    
    app.get('/:port', mainController.get.bind(mainController));
    app.get('/', mainController.get.bind(mainController));
    app.get('/register/:auth/:ip', registerController.get.bind(registerController));
    
  };
}());