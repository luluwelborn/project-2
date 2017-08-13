// ------ Front end js ------
$(document).ready(function() {
    console.log( "ready!" );
    // ------ get data types on page from server ------ //
    $.ajax({
        method: 'GET',
        url: '/moreJokes',
        success: function(result) {
            console.log("get jokes function running");
        }
    })
});

$('#moreJokes').append(jokesHtml);