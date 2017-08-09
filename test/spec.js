var joke = require("../models/joke");
var listJoke = require("../models/joke");
var expect = require("chai").expect;

describe('Testing joke', function () {
    it('should exist', function () {
        expect(joke).to.be.a('function');
    });
    it("should exist", function() {
      expect(listJoke).to.be.a('function');
    });
});