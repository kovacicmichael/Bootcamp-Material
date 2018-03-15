// Add code to userModel.js to complete the model

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var PORT = 3000;

// Requiring the `User` model for accessing the `users` collection
var User = require("./userModel.js");

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: false }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/custommethoddb", {
  useMongoClient: true
});

// Routes

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {
  // Create a new user using req.body
  var user = new User(req.body);

  user.setFullName();
  user.lastUpdatedDate();

  // Update this route to run the `setFullName` and `lastUpdatedDate` methods before creating a new User
  // You must create these methods in the model.
  //had to change the req.body inside of user.creare to user.....
  User.create(user)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
