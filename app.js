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

mongoose.connect( process.env.MONGODB_URI ||
                  process.env.MONGOLAB_URI || 
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/" );

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

require('./config/passport')(passport);
	app.use(function (req, res, next) {
	res.locals.currentUser = req.user;
	next();
});

var routes = require('./config/routes');
app.use(routes);


// --- MY JOKES ARRAY ---
var jokes = [
    {
    	_id: 1,
   		joke: 'What did the english book say to the math book? You got a lot of problems.',
    },
    {
    	_id: 2,
    	joke: 'Doctor youve got you help me, Im addicted to twitter. Doctor: I dont follow you.',
    },
    {
    	_id: 3,
    	joke: 'I tried taking some high resolution photos of local farmland, but they all turned out a bit grainy.',
    },
    {
    	_id: 4,
    	joke: 'Two satellites decided to get married. The wedding wasnt much, but the reception was incredible.',
    },
    {
    	_id: 5,
    	joke: 'If two vegans are having an argument, is it still considered beef?',
    },
    {
    	_id: 6,
    	joke: 'Is the pool safe for diving? It deep ends.',
    },
    {
    	_id: 7,
    	joke: 'Why do mathematicians hate the U.S.? Because its indivisible.',
    },
    {
    	_id: 8,
    	joke: 'Shout out to my grandma, thats the only way she can hear.',
    },
    {
    	_id: 9,
    	joke: 'Whats the difference between a guitar and a fish? You can tune a guitar but you cant "tuna" fish!',
    },
    {
    	_id: 10,
    	joke: 'My wife told me to rub the herbs on the meat for better flavor. Thats sage advice.',
    },
    
]


// --- ROUTES ---

    // HOMEPAGE ROUTES

// app.get('/', function homePage(req, res) {
//     console.log('get jokes');
//   res.json(jokes);
// });


    // MORE JOKES - REDDIT API PAGE
// app.get('/', function moreJokesPage(req, res) {
//   res.sendFile('/views/more-jokes.ejs');
// });

// GET
// app.get('/moreJokes', function(req,res) {
//     console.log('get joke route');
//     res.render("moreJokes");
// });

// POST - add joke to page
// app.post('', function(req, res){
//     console.log('post joke route');
//      jokes.push(req.body);
//      res.json(jokes);
// });

// DELETE
// app.delete('', function(req,res) {
//     console.log('delete joke from list route');
//     jokes.splice(req.params.id-1,1);
//     res.json(jokes);
// });



// --- SERVER ---
app.listen(process.env.PORT || 3000, function () {
  console.log('Server is Running!');
});










