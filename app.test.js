var assert = require('assert');
var appFunctions = require('./app.js');

describe('App functions', function() {
  describe('sayHello', function() {
		var name = 'Kunal';
		var sayHello = appFunctions.sayHello('Kunal');
    it('should return a string', function() {
			assert.equal(typeof(sayHello), 'string');
    });

		it('should contain my name', function() {
			assert.equal(sayHello.indexOf(name) !== -1, true);
    });

  });
});
