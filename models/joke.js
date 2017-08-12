function joke() {
	console.log('created joke function');
}

function moreJokes(req, res, next) {
	console.log('list joke function');
	// request 3rd party url
	var url = "&query=" + req.body.text;
	request(url, function(err, response, body)	{
		// get data back from body
		if (typeof(body) === 'string'){body = JSON.parse(body)}
		res.json(body);
	});
}

module.exports = {
	moreJokes : moreJokes
};

module.exports = joke;