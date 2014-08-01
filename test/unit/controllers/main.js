(function () {
	var
		sinon = require('sinon'),
		assert = require('chai').assert;

	describe.skip('unit/controllers/main', function () {
		var
			send,
			res,
			main;

		before(function () {
			main = require('../../../app/controllers/main');
			send = sinon.stub();
			res = {
				send: send
			};
		});

		it('should response with proper message', function () {
			main.get(undefined, res);

			assert.isTrue(
				send.calledWith(307),
				'send was called with proper message'
			);
		});
	});
}());