var joke = require("../models/joke");
var listJoke = require("../models/joke");
var expect = require("chai").expect;
const request = require("request");

var URL = 'https://www.reddit.com/r/Punny.json';

describe('Testing joke', function () {
    it('should exist', function () {
        expect(joke).to.be.a('function');
    });
    it("should exist", function() {
      expect(listJoke).to.be.a('function');
    });
});

describe("Punny", function() {
	var apiError,apiResponse,apiBody;
	before(function(done) {
		request(URL, function(error, response, body) {
			apiError = error;
			apiResponse = response;
			apiBody = body;
			done();
		});
	});
	it('should exist', function () {
        expect(request).to.be.a('function');
    });
	it("should return 200 - OK", function() {
		expect(apiResponse.statusCode).to.eq(200);
	});

	it("should have a title in the body", function() {
	  if (typeof(apiBody) == "string") {
	  	apiBody = JSON.parse(apiBody);
	  }
	  //apiBody.data.children[0].data.title
	  console.log(apiBody.data.children[0].data.title);
		expect(apiBody.data.children[0].data.title).to.not.be.empty;
	});
});