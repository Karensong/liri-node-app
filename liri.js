var userlengthArray = process.argv;
var userlength = userlengthArray.length;
var usercommand = process.argv[2];
var userinput = process.argv[3];
var keys = require('./key.js');
var Twitter = require('twitter');
var client = new Twitter(keys.twitterKeys);// console.log(keys.twitterKeys);
// var client = new Twitter({
//   consumer_key: 'hKuYHJ8ecAi632CGukt5QSakv',
//   consumer_secret: 'MNULHD1TnFgtQjWT995TGFYz9d5yqcCIfij9PucHDbNZRq5xb0',
//   access_token_key: '956075485666136064-COCIExraeI8ebSbH8IWEoPV91WIf7WL',
//   access_token_secret: 'FgFdTT92GyJjUep2CuSvy6OYf4FlBs0tErZAQcvqWyWbe'
// });

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotifyKeys); 
// var spotify = new Spotify({
//   id: '992160f67a50477b87e1a4dd0f86fbaf',
//   secret: '05e5384e1bcb45b680990bf189953ae2',
// });
var request = require("request");


// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {
// 	if (!error && response.statusCode === 200) {
// 		console.log("The movie's rating is " + JSON.parse(body).imdbRating);
// 	}
// });
var fs = require("fs");


var runUsercommand = function() {
	if (usercommand === "do-what-it-says") {
fs.readFile('liri-node-app/random.txt', 'utf8', function(err, data) {
	if (err) throw err;
	var string = data;
	var songString = data.split(",");
	var command = songString[0];
	var sLength = songString.length;
	var whateverInput  = songString[1];
	if (command === "do-what-it-says") {
		console.log("Sorry, this is too meta. I'm not doing anything with this!");
	} else if (command === "my-tweets") {
		var params = {screen_name: 'developerksong'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    var tweetPosts = tweets.slice(0,21);
tweetPosts.forEach(function(element){
	console.log(element.created_at); 
	console.log("Tweet: " + element.text);
});
  }
});
} else if (command === "spotify-this-song") {
	if (sLength ===1) { spotify.search({ type: 'track', query: 'The Sign Ace of Base'}, function(err,data) {
		if(err) {
			return console.log('Error occurred: ' + err);
		}
		var artists = data.tracks.items[0].artists;
artists.forEach(function(element){
	console.log("The artist:" + element.name);
});
console.log("The song name:" + data.tracks.items[0].name);
console.log("The preview link:" + data.tracks.items[0].preview_url);
console.log("The album name:" + data.tracks.items[0].album.name); 
}); 
	} else {
	
	spotify.search({ type: 'track', query: whateverInput}, function(err,data) {
		if(err) {
			return console.log('Error occurred: ' + err);
		}
		var artists = data.tracks.items[0].artists;
artists.forEach(function(element){
	console.log("The artist:" + element.name);
});
console.log("The song name:" + data.tracks.items[0].name);
console.log("The preview link:" + data.tracks.items[0].preview_url);
console.log("The album name:" + data.tracks.items[0].album.name); 

})
}	
} else if (command ==="movie-this") {
		if (sLength === 1) {
		request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=" + keys.omdbKeys.api, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log("The title of the movie is " + JSON.parse(body).Title);
			console.log("The year the movie came out was " + JSON.parse(body).Year);
			console.log("The movie's IMDB rating is " + JSON.parse(body).imdbRating);
			console.log("The movie's Rotten Tomatoes rating is " + JSON.parse(body).Ratings[1].Value);
			console.log("The country where the movie was produced: " + JSON.parse(body).Country);
			console.log("Languages: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
		};
	});
 } else { request("http://www.omdbapi.com/?t=" + whateverInput + "&y=&plot=short&apikey=" + keys.omdbKeys.api, function(error, response, body) {
	if (!error && response.statusCode === 200) {
		console.log("The title of the movie is " + JSON.parse(body).Title);
		console.log("The year the movie came out was " + JSON.parse(body).Year);
		console.log("The movie's IMDB rating is " + JSON.parse(body).imdbRating);
		console.log("The movie's Rotten Tomatoes rating is " + JSON.parse(body).Ratings[1].Value);
		console.log("The country where the movie was produced: " + JSON.parse(body).Country);
		console.log("Languages: " + JSON.parse(body).Language);
		console.log("Plot: " + JSON.parse(body).Plot);
		console.log("Actors: " + JSON.parse(body).Actors);
		};
	});
}

}
})
} else if (usercommand === "my-tweets") {
	
var params = {screen_name: 'developerksong'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    var tweetPosts = tweets.slice(0,21);
tweetPosts.forEach(function(element){
	console.log(element.created_at); 
	console.log("Tweet: " + element.text);
});
  }
});
} else if (usercommand === "spotify-this-song" ) {
	if (userlength === 3) {
	spotify.search({ type: 'track', query: 'The Sign Ace of Base'}, function(err,data) {
		if(err) {
			return console.log('Error occurred: ' + err);
		}
		var artists = data.tracks.items[0].artists;
artists.forEach(function(element){
	console.log("The artist:" + element.name);
});
console.log("The song name:" + data.tracks.items[0].name);
console.log("The preview link:" + data.tracks.items[0].preview_url);
console.log("The album name:" + data.tracks.items[0].album.name); 
});

	} else { 
	 spotify.search({ type: 'track', query: userinput }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
var artists = data.tracks.items[0].artists;
artists.forEach(function(element){
	console.log("The artist:" + element.name);
});
console.log("The song name:" + data.tracks.items[0].name);
console.log("The preview link:" + data.tracks.items[0].preview_url);
console.log("The album name:" + data.tracks.items[0].album.name); 
});
}
} else if (usercommand === "movie-this") {
	if (userlength === 3) {
		request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=" + keys.omdbKeys.api, function(error, response, body) {
		if (!error && response.statusCode === 200) {
			console.log("The title of the movie is " + JSON.parse(body).Title);
			console.log("The year the movie came out was " + JSON.parse(body).Year);
			console.log("The movie's IMDB rating is " + JSON.parse(body).imdbRating);
			console.log("The movie's Rotten Tomatoes rating is " + JSON.parse(body).Ratings[1].Value);
			console.log("The country where the movie was produced: " + JSON.parse(body).Country);
			console.log("Languages: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
		};
	});
 } else { request("http://www.omdbapi.com/?t=" + userinput + "&y=&plot=short&apikey=" + keys.omdbKeys.api, function(error, response, body) {
	if (!error && response.statusCode === 200) {
		console.log("The title of the movie is " + JSON.parse(body).Title);
		console.log("The year the movie came out was " + JSON.parse(body).Year);
		console.log("The movie's IMDB rating is " + JSON.parse(body).imdbRating);
		console.log("The movie's Rotten Tomatoes rating is " + JSON.parse(body).Ratings[1].Value);
		console.log("The country where the movie was produced: " + JSON.parse(body).Country);
		console.log("Languages: " + JSON.parse(body).Language);
		console.log("Plot: " + JSON.parse(body).Plot);
		console.log("Actors: " + JSON.parse(body).Actors);
		};
	});
};
};
};
runUsercommand();
