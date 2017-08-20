var mongoose = require('mongoose');

// My jokes array schema
var JokeSchema = new mongoose.Schema({
    sentence: String,
});

var Joke = mongoose.model('Joke', JokeSchema);


module.exports = Joke;