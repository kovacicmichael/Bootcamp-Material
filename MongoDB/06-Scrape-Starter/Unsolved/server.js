// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var request = require("request");

// Make a request call to grab the HTML body from the site of your choice
request("https://www.nfl.com/", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
  var results = [];

  // Select each element in the HTML body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
  $("div.text.col.caption").each(function(i, element) {


    //i think this is not working because the nfl is grabing their news articles dynamically, they will not load with js turned off
    var link = $(element).children().find("p").find("a").attr("href");
    var title = $(element).children().find("h3").find("a").attr("heading").text();
    var description = $(element).children.find("p").text();
    //var title = $(element).children().attr("data-metrics-link-name");

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
      link: link,
      description: description
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log(results);
});
