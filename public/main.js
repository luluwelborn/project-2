// ------ FRONT END JS ------

$(document).ready(function() {
    // console.log( "ready!" );
    // ------ get data types on page from server ------ //
    function successNewJoke() {
    	// console.log("is this running?");
	    $.ajax({
	        method: 'GET',
	        url: '/jokes',
	        success: function(jokes) {
	        	// console.log(jokes);
	        	displayJokes(jokes);
	        },
	        error: function(error) {
	        	console.log(error);
	        }
	    })
	}
	successNewJoke();
});

// display one random joke
// look into js random # random # between 0 and last item
// put random number into[]
// PUTS ONE RANDOM LETTER ON MULTIPLE LINES
function displayJokes(jokesPassedIn) {
	var sentenceHTML = "";
	// jokesPassedIn.forEach(function(joke) {
		let rando = Math.floor(Math.random()*jokesPassedIn.length);
	sentenceHTML = '<p>' + jokesPassedIn[rando].sentence + '</p>';
	// });
	// we want 1 joke out of array 

	$('#sentence').append(sentenceHTML);
	console.log(jokesPassedIn[Math.floor(Math.random()*jokesPassedIn.length)]);
};

// TRY 2
// function displayJokes(jokes) {
// 	var jokes = Math.floor(Math.random()*jokes.length);
// 	for(var i = 0; i <= jokes.length; i++) {
// 		if(jokes[i] === number) {
// 		console.log(jokes, jokes[i]);
// 		};
// 	};
// };


// display all jokes on page
// function displayJokes(jokesPassedIn) {
// 	var sentenceHTML = "";

// 	jokesPassedIn.forEach(function(joke) {
// 		// take array and return string
// 		sentenceHTML = sentenceHTML + '<p>' + joke.sentence + '</p>';
// 	});

// 	$('#sentence').append(sentenceHTML);
// 	//append somehow onto the dom
// }


