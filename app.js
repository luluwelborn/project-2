// --- MY MONSTEROUS SERVER ---

var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var db = require("./models");

mongoose.connect( process.env.MONGODB_URI ||
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/punny-app" );

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser()); 

app.set('views', './views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./config/passport')(passport);
	app.use(function (req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

var routes = require('./config/routes');
app.use(routes);



// --- ROUTES ---

    // HOMEPAGE ROUTES

app.get('/jokes', function homePage(req, res) {
    db.Joke.find({}, function(err, jokes){
        res.json(jokes);
    });
});

// add user favorite joke to back
app.put('/favorites', function(req, res){
    console.log(req.body.item);
    db.User.findOne({_id: req.body.user}, function(err, user) {
      console.log(user);
      user.favorites.push(req.body.item);
      user.save();
      res.json(user);
    });
});

// add favJoke to front
app.get('/favorites', function favJokeList(req, res){
  console.log("hello backend to front!");
  db.Joke.findOne({_id: req.params.joke_id}, function(err, favJoke) {
    console.log();
  res.json(favJoke);
  });
});

// DELETE - delete user joke
// app.delete('', function(req,res) {
//     console.log('delete joke from list route');
//     jokes.splice(req.params.id-1,1);
//     res.json(jokes);
// });

    // MORE JOKES - REDDIT API PAGE
// app.get('/', function moreJokesPage(req, res) {
//   res.sendFile('/views/moreJokes.ejs');
// });



// --- SERVER ---
app.listen(process.env.PORT || 3000, function () {
  console.log('Server is Running!');
});










