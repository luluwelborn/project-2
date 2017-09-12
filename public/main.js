// ------ FRONT END JS ------
// --- Homepage ---
$(document).ready(function() {
    // console.log( "ready!" );
    // ------ get data types on page from server ------ //
    function successNewJoke() {
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
function displayJokes(jokesPassedIn) {
	var sentenceHTML = "";
		let rando = Math.floor(Math.random()*jokesPassedIn.length);
	sentenceHTML = '<p id="favJoke">' + jokesPassedIn[rando].sentence + '</p>';

	$('#sentence').append(sentenceHTML);
	// console.log(jokesPassedIn[rando.sentence]);

};

$('#saveJoke').on('click', saveJoke());

function saveJoke() {
	var favJoke = document.getElementById("favJoke");
	console.log("hello favJoke");

	$.ajax({
		favorite: 'UPDATE',
		url: '/jokes',
	})

	// res.send("joke saved to database");
	console.log("need backend response");
};




// // display all jokes on page
// function displayMoreJokes(listPassedIn) {
// 	var moreJokesHTML = "";

// 	jokesPassedIn.forEach(function(joke) {
// 		// take array and return string
// 		moreJokesHTML = moreJokesHTML + '<p>' + joke.moreJokes + '</p>';
// 	});

// 	$('#moreJokes').append(sentenceHTML);
// 	//append somehow onto the dom
// }


