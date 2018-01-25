// var keys = require('keys.js')
// keys.twitter

var usercommand = process.argv[2];
var keys = require('./key.js');
var Twitter = require('twitter');
var client = new Twitter(keys.twitterKeys);// console.log(keys.twitterKeys);

// var 

if (usercommand === "my-tweets") {
	
var params = {screen_name: 'developerksong'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
};

// else if (usercommand === "spotify-this-song") {

// }



// var request = require("request");

// request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece", function(error, response, body) {
// 	if (!error && response.statusCode === 200) {
// 		console.log("The movie's rating is " + JSON.parse(body).imdbRating);
// 	}
// });


// function sortNumber() {
// 	var numbersArray = process.argv.splice(2).sort(function(a,b) {
// 		return a - b;
// 	});

// console.log(numbersArray);
// }

// sortNumber();


// var geocoder = require('geocoder');

// var location = process.argv[2];
// // var state = process.argv[3];

// geocoder.geocode(location, function (err, data) {
// 	if(err) throw err;

// console.log(JSON.stringify(data, null, 2));
// });

// var inquirer = require("inquirer");
// var geocoder = require('google-geocoder');
// var geo = geocoder({
//   key: 'AIzaSyDmUN4pmSbY86XFnecBmDrZNUiw0WWE59U'
// });
 
// inquirer
//   .prompt([
//     // Here we create a basic text prompt.
//     {
//       type: "input",
//       message: "What is your city?",
//       name: "city"
//     },
//     {
//       type: "input",
//       message: "What is your state?",
//       name: "state"

//     }
//     ])
//   .then(function(inquirerResponse) {
//     // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
      
// 	var city = inquirerResponse.city;
// 	var state = inquirerResponse.state; 
// 	var address = city + state  

//       // console.log("You said " + inquirerResponse.feeling + " You poor thing!\n");
//     var geo = geocoder({
//   key: 'AIzaSyDmUN4pmSbY86XFnecBmDrZNUiw0WWE59U'
// });

 

// geo.find(address, function(err, res){
//  if(err) throw err;

// console.log(JSON.stringify(res, null, 2));
//   // process response object 
 
// });



//     });