(function(){
  'use strict';

  var
    server = require('../../../app/server'),
    assert = require('chai').assert,
    http = require('http'),
    config = require('../../config.json'),
    address = new (require('../../../app/models/address'))(config.DATABASE_URL);

  describe('functional/controllers/register', function () {
    before(function () {
      server.listen(8000, config.DATABASE_URL);
      process.env.AUTH_CODE = Math.round(Math.random() * 100);
    });

    it('should return 200', function (done) {
      var
        ip = Math.random();

      http.get('http://localhost:8000/register/' + process.env.AUTH_CODE + '/' + ip, function (res) {
        var data = '';

        res.on('data', function (chunk) {
          data += chunk;
        });

        res.on('end', function () {
          var json = JSON.parse(data);

          assert.deepEqual(json.status, 'ok');
          address.get(function (element) {
            assert.deepEqual(element.type, 'ip');
            assert.deepEqual(element.value, ip.toString());
            done();
          });
        });
      });
    });

    it('should return 401 if wrong auth', function (done) {
      var
        auth = Math.random(),
        ip = Math.random();

      http.get('http://localhost:8000/register/' + auth + '/' + ip, function (res) {
        assert.equal(401, res.statusCode);
        done();
      });
    });

    after(function () {
      server.close();
    });
  });
}());