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

		sentenceHTML = '<p>' + jokesPassedIn[rando].sentence + '</p>';
		console.log(sentenceHTML);
		$('#sentence').append(sentenceHTML);
		// console.log(jokesPassedIn[rando.sentence]);
	};


	$('#saveJoke').on('click', function(event) {

		var favJoke = $('#sentence p').text();
		console.log("you clicked");
		console.log("fav joke:", favJoke);

		var userId = document.getElementById("userId").getAttribute("data-id");
		console.log(userId);

		$.ajax({
			method: 'PUT',
			url: '/favorites',
			data: {
				item: favJoke,
				user: userId
			},
			success: function(joke) {
	        	console.log(joke);
	        	// displayJokes(joke);
	        },
	        error: function(error) {
	        	console.log(error);
	        }
		})

		// res.send(favJoke);
		// console.log("need backend response");
	});


	// display all jokes on page
	function displayMyJokes() {
		var userId = document.getElementById("userId").getAttribute("data-id");
		console.log(userId);

		$.ajax({
	        method: 'GET',
	        url: '/favorites',
	        data: {
				item: favJoke,
			},
	        success: function(data) {
	
	        	let favJoke = "";
	        	console.log("favJoke is : ", favJoke);
				// favJoke.forEach(function(data) {
					favJoke = '<li id="favJoke">' + favJoke + '</li>';
				// });

				$('#myJokes').append(favJoke);
	        },
	        error: function(error) {
	        	console.log(error);
	        }
	    })

		
	}

	successNewJoke();
	displayMyJokes();

});





