// Using the tools and techniques you learned so far,
// you will scrape a website of your choice, then place the data
// in a MongoDB database. Be sure to make the database and collection
// before running this exercise.

// Consult the assignment files from earlier in class
// if you need a refresher on Cheerio.

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();



// Database configuration
var databaseUrl = "scraperdb";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("Hello world");
});

// TODO: make two more routes

// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)
app.get("/all", function(req, res){

	db.scrapedData.find({}, function(error, found){

		if(error){
			console.log(error);
		}else{
			res.send(found)
		}
	})

});

// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?

app.get("/scrape", function(req, res){
	request("https://www.nytimes.com/", function(error, response, html) {

	  // Load the HTML into cheerio and save it to a variable
	  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
	  var $ = cheerio.load(html);

	  var results =[];


			$("h2.story-heading").each(function(i, element) {

			    //i think this is not working because the nfl is grabing their news articles dynamically, they will not load with js turned off
			    var link = $(element).children().attr("href");
			    var title = $(element).children().text().split("\n            ");
			    
			    //var title = $(element).children().attr("data-metrics-link-name");
			    

			    // Save these results in an object that we'll push into the results array we defined earlier
			    if(title != null && title != "" && link){
			    // results.push({
			    //   title: title,
			    //   link: link
			    // })
			    db.scrapedData.insert({
			      title: title,
			      link: link
			    }),
			    function(err, inserted){
			    	if(err){
			    		console.log(err)
			    	}else{
			    		console.log(inserted);
			    	}
				}
			  }
			// console.log(results);
			})
			res.send("scrape complete")
	});
});



/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
