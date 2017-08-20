var mongoose = require("mongoose");

mongoose.connect( process.env.MONGODB_URI ||
				  process.env.MONGOLAB_URI || 
				  process.env.MONGOHQ_URL ||
				  "mongodb://localhost/" );


//--->
module.exports.User = require('./user.js');

module.exports.Joke = require('./joke.js');

// module.exports.moreJokes = require('./moreJokes.js');