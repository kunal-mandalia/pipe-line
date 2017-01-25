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

	describe('addTwoNumbers', function() {
		var n1 = Math.random();
		var n2 = Math.random();

		var sum = appFunctions.addTwoNumbers(n1, n2);
    it('should return a number', function() {
			assert.equal(typeof(sum), 'number');
    });

		it('should return the sum', function() {
			assert.equal(sum, n1+n2);
    });
  });

});
