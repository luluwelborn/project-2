// ------ FRONT END JS ------

$(document).ready(function() {
    // console.log( "ready!" );
    // ------ get data types on page from server ------ //
    function successNewJoke() {
    	console.log("is this running?");
	    $.ajax({
	        method: 'GET',
	        url: '/jokes',
	        success: function(jokes) {
	        	console.log(jokes);
	        	displayJokes(jokes);
	        },
	        error: function(error) {
	        	console.log(error);
	        }
	    })
	}
	successNewJoke();
});

// display one random joke - 
// look into js random # random # between 0 and last item
// put random number into[]

// display jokes on page
function displayJokes(jokesPassedIn) {
	var sentenceHTML = "";

	jokesPassedIn.forEach(function(joke) {
		// take array and return string
		sentenceHTML = sentenceHTML + '<p>' + joke.sentence + '</p>';
	});

	$('#sentence').append(sentenceHTML);
	//append somehow onto the dom
}


