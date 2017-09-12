// GET /
function home(req, res) {  
  res.render('index');
}

function myJokes(req, res) {
	res.render('myJokes');
}

module.exports = {
  home: home,
  myJokes: myJokes
}



