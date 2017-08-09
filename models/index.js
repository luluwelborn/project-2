mongoose.connect( process.env.MONGODB_URI ||
				  process.env.MONGOLAB_URI || 
				  process.env.MONGOHQ_URL ||
				  "mongodb://localhost/" );

var mongoose = require("mongoose");

module.exports.jokes = require('user.js');