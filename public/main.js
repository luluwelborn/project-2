// ------ FRONT END JS ------
// --- Homepage ---
$(document).ready(function() {
    // console.log( "ready!" );
    // ------ get data types on user page from server ------ //
    // console.log(document.getElementById("userId").dataset.id);
    // function successUserJoke() {
    // 	document.getElementById('userId').dataset.id;
    // 	console.log(successUserJoke);
    // };
    // successUserJoke();

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
	// we want 1 joke out of array 

	$('#sentence').append(sentenceHTML);
	// console.log(jokesPassedIn[Math.floor(Math.random()*jokesPassedIn.length)]);

};

function saveJoke() {

};





// --- My Jokes ---
// $(document).ready(function() {
//     // console.log( "ready!" );
//     // ------ get data types on page from server ------ //
//     function successList() {
//     	// console.log("is this running?");
// 	    $.ajax({
// 	        method: 'GET',
// 	        url: '/moreJokes',
// 	        success: function(list) {
// 	        	// console.log(list);
// 	        	displayJokes(list);
// 	        },
// 	        error: function(error) {
// 	        	console.log(error);
// 	        }
// 	    })
// 	}
// 	successList();
// });

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


