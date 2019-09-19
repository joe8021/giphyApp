var topicArr = ["Green Bay Packers","Chicago Bears","Detroit Lions","Minnesota Vikings"];


//var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9";

for(i=0;i<topicArr.length;i++){
    //$("#buttons").append($("<button>" + topicArr[i]+ "</button>"));
    var a = $("<button>");
    a.attr("data-sport",topicArr[i]);
    a.text(topicArr[i]);
    $("#buttons").append(a);
    console.log(a.attr("data-sport"));
    
}

$("button").on("click", function(){
    var sport = $(this).attr("data-sport");
    console.log($(this));
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        sport + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
        console.log(queryURL);

        $.ajax({
            url:queryURL,
            method: "GET",
        })
        .then(function(response){
            var results = response.data;
            console.log(response);

        //display images
        for(var j=0;j<results.length;j++){
            var gifDiv = $("<div>");
            var rating = results[j].rating;

            var p = $("<p>").text("Rating: " + rating);

            var sportImage = $("<img>");
            console.log(sportImage);
            sportImage.attr("src",results[j].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(sportImage);

            $("#gifHolder").prepend(gifDiv);
        }
    });
});

$("#add-gif").on("click", function(event){
    event.preventDefault();

    var gif = $("#gif-input").val().trim();

    topicArr.push(gif);
})



