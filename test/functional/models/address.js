describe('functional/models/address', function () {
  var
    config = require('../../config.json'),
    address = new (require('../../../app/models/address'))(config.DATABASE_URL),
    assert = require('chai').assert;

  it('should save ip', function (done) {
    var ip = Math.random();

    address.set(ip, function () {
        address.get(function (element) {
          assert.deepEqual(element.type, 'ip');
          assert.deepEqual(element.value, ip);
          done();
        });
    });
  });
});