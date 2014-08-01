(function () {
	var assert = require('chai').assert;

	describe('unit/server', function () {
		it('should implement server functionality', function () {
			var server = require('../../app/server');

			assert.isFunction(server.listen, 'exports `listen` function');
			assert.isFunction(server.close, 'exports `close` function');
		});
	});
}());