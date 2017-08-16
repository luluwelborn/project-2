var db = require('./models');

// --- MY JOKES ARRAY ---
var jokes = [
    {
   		sentence: 'What did the english book say to the math book? You got a lot of problems.',
    },
    {
    	sentence: 'Doctor youve got you help me, Im addicted to twitter. Doctor: I dont follow you.',
    },
    {
    	sentence: 'I tried taking some high resolution photos of local farmland, but they all turned out a bit grainy.',
    },
    {
    	sentence: 'Two satellites decided to get married. The wedding wasnt much, but the reception was incredible.',
    },
    {
    	sentence: 'If two vegans are having an argument, is it still considered beef?',
    },
    {
    	sentence: 'Is the pool safe for diving? It deep ends.',
    },
    {
    	sentence: 'Why do mathematicians hate the U.S.? Because its indivisible.',
    },
    {
    	sentence: 'Shout out to my grandma, thats the only way she can hear.',
    },
    {
    	sentence: 'Whats the difference between a guitar and a fish? You can tune a guitar but you cant "tuna" fish!',
    },
    {
    	sentence: 'My wife told me to rub the herbs on the meat for better flavor. Thats sage advice.',
    },
]

db.Joke.create(jokes, function(err, jokes)  {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("you have data!");
    }
})