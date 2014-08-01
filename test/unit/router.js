(function () {
  var 
    assert = require('chai').assert,
    sinon = require('sinon');
    express = require('express');

  describe('unit/router', function () {
    var
      app,
      router = require('../../app/router');

    beforeEach(function () {
      app = {
        get: sinon.stub(),
        use: sinon.stub()
      };
      sinon.stub(express, 'static');
    });

    afterEach(function () {
      express.static.restore();
    });

    it('should register `public` directory', function () {
      var
        staticResponse = Math.random();

      express.static.returns(staticResponse);
      router.register(app);

      assert.isTrue(
        express.static.calledWith(
          path.join(process.env.PWD, 'public'),
          {
            maxAge: 1000*60*60
          }
        ),
        'calls static'
      );
      assert.isTrue(
        app.use.calledWith(
          '/public',
          staticResponse
        ),
        'register public with proper params'
      );
    });

    it('should register main action with port', function () {
      var
        mainController = require('../../app/controllers/main');

      router.register(app);

      assert.deepEqual(
        app.get.args[0][0],
        '/:port'
      );
    });

    it('should register main action', function () {
      var
        mainController = require('../../app/controllers/main');

      router.register(app);

      assert.deepEqual(
        app.get.args[1][0],
        '/'
      );
    });

    it('should register `register` action', function () {
      var
        mainController = require('../../app/controllers/main');

      router.register(app);

      assert.deepEqual(
        app.get.args[2][0],
        '/register/:auth/:ip'
      );
    });

    it('should initialize controllers with `address` model', function () {
      assert.isTrue(false, 'test missing');
    });

  });
}());