(function(){
    'use strict';

    var
      server = require('../../../app/server'),
      assert = require('assert'),
      http = require('http'),
      config = require('../../config.json'),
      address = new (require('../../../app/models/address'))(config.DATABASE_URL);

    describe('functional/controllers/main', function () {
      before(function () {
        server.listen(8000, config.DATABASE_URL);
      });

      after(function () {
        server.close();
      });

      it('should redirect to domain, default port', function (done) {
        var ip = '192.168.0.' + Math.round(Math.random() * 100);

        address.set(ip, function () {
          http.get('http://localhost:8000', function (res) {
            assert.deepEqual(res.headers.location, 'http://' + ip + ':8000');
            done();
          });
        });
      });

      it('should redirect to domain, custom port', function (done) {
        var ip = '192.168.0.' + Math.round(Math.random() * 100);

        address.set(ip, function () {
          http.get('http://localhost:8000/8001', function (res) {
            assert.deepEqual(res.headers.location, 'http://' + ip + ':8001');
            done();
          });
        });
      });
    });
}());