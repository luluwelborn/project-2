var expect = require('chai').expect;
var request = require('request');
// connect more-jokes.js file
var moreJokes = require('../views/more-jokes');

// var URL = '';


describe('joke', function() {
	it('it is a function', function () {
        expect(moreJokes).to.be.a('function');
    });
    it("should have a name", function() {
      expect(moreJokes).to.not.be.empty;
    });
});