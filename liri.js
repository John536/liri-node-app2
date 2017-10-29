var operator = process.argv[2];
var name = process.argv[3];  //problem here with more than one word

/*
//this code is not working for some reason
var name = process.argv.splice(2);
var entry = "";
for (var i = 0; i < name.length; i++) {
       entry = entry + "+" + name[i];
    }
*/

if (operator == "my-tweets") {

    var Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: 'Phs6uwcMAPHr2vABe34NPc01f',
        consumer_secret: '2tpZwMu4Z3BkYirDldZ8HhBzxN31dfI5INl3xiilSUMaKsxhO8',
        access_token_key: '915357927736832001-ceJ812gUHr6ZeSlXwWSNsaF3fbxZpNf',
        access_token_secret: 'Vb0TwtNVjuG5nha58BXbuZPbi2IHlbQpbGtA32yZ0kLfI',
    });

    var params = { screen_name: '@jshari536' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {  
        if (!error) {
            for (i = 0; i < 20; i++) { 
                console.log(tweets[i].text);
                console.log(tweets[i].created_at);
            }  
        }
    });


} else if (operator == "movie-this") {
    var request = require("request");
    /*
        if (name == undefined) {
            name = "MrNobody" //this is not working correctly... tried undefined, null, ""
        }
    */
    request("http://www.omdbapi.com/?t=" + name + "&y=&plot=short&apikey=40e9cece", function (error, response, body) {

        if (!error && response.statusCode === 200) {

            //There is a better way to do this with a for loop
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("imdbrating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomato: " + JSON.parse(body).Ratings);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);


        }
    });
}

/*
else if (operator == "spotify-this-song") {

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
 id: 39dae0095314455e90e70b226b72d82b,
 secret: b61e220e09f34d76ad9d37da87769127
});

spotify
 .search({ type: 'track', query: 'All the Small Things' })
 .then(function(response) {
   console.log(response);
 })
 .catch(function(err) {
   console.log(err);
 });


}
*/


// Spotify -- Client ID f7ee542a35eb43aa9e0d35de4a53bf3c
// Client Secret 4d153c1085804af593ebffba1c5254fa

