// function joke() {
// 	console.log('created joke function');
// }

// // --- links nav to moreJokes.ejs
// function moreJokes(req, res, next) {
// 	console.log('list joke function');
// 	// request 3rd party url
// 	var url = "&query=" + req.body.text;
// 	request(url, function(err, response, body)	{
// 		// get data back from body
// 		if (typeof(body) === 'string'){body = JSON.parse(body)}
// 		res.json(body);
// 	});
// }

var mongoose = require('mongoose');

// My jokes array schema
var JokeSchema = new mongoose.Schema({
    sentence: String,
});

var Joke = mongoose.model('Joke', JokeSchema);

// module.exports = {
// 	moreJokes : moreJokes
// };

module.exports = Joke;