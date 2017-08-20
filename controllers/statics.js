// GET /
function home(req, res) {  
  res.render('index');
}

function moreJokes(req, res) {
	res.render('moreJokes');
}

module.exports = {
  home: home,
}



