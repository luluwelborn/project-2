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

	// display one random joke
	function displayJokes(jokesPassedIn) {
		var sentenceHTML = "";
			let rando = Math.floor(Math.random()*jokesPassedIn.length);
		sentenceHTML = '<p id="favJoke">' + jokesPassedIn[rando].sentence + '</p>';

		$('#sentence').append(sentenceHTML);
		// console.log(jokesPassedIn[rando.sentence]);
	};


	$('#saveJoke').on('click', function(event) {
		var favJoke = $('#favJoke').text();
		console.log("you clicked");
		console.log("fav joke:", favJoke);

		$.ajax({
			method: 'PUT',
			url: '/favorites',
			data: favJoke,
			success: function(joke) {
	        	console.log(joke);
	        	// displayJokes(joke);
	        },
	        error: function(error) {
	        	console.log(error);
	        }
		})

		// res.send("joke saved to database");
		// console.log("need backend response");
	});


	// display all jokes on page
	function displayMyJokes() {
		$.ajax({
	        method: 'GET',
	        url: '/favorites',
	        success: function(favJoke) {
	        	console.log("favJoke is : ", favJoke);
	        	var favJoke = "";
				favJoke.forEach(function(favJoke) {
				favJoke = favJoke + '<li>' + joke.myJoke + '</li>';
				});

				$('#myJokes').append(favJoke);
	        	// displayJokes(favJoke);
	        },
	        error: function(error) {
	        	console.log(error);
	        }
	    })

		
	}

	successNewJoke();
	displayMyJokes();

});





