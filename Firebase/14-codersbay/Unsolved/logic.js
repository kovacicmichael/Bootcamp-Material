// Initialize Firebase
var config = {
    apiKey: "AIzaSyBOpuWO9QLqa0WDd4our2ogpb8h-I6G6rs",
    authDomain: "codersbay-55158.firebaseapp.com",
    databaseURL: "https://codersbay-55158.firebaseio.com",
    projectId: "codersbay-55158",
    storageBucket: "codersbay-55158.appspot.com",
    messagingSenderId: "621420606542"
  };
  firebase.initializeApp(config);
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


// Assign the reference to the database to a variable named 'database'
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the variables for highBidder/highPrice equal to the stored values in firebase.
    highPrice = parseInt(snapshot.val().highPrice);
    highBidder = snapshot.val().highBidder;


    // Change the HTML to reflect the stored values
    $("#highest-bidder").text(snapshot.val().highBidder);
    $("#highest-price").text("$" + snapshot.val().highPrice);

    // Print the data to the console.
    console.log(highBidder);
    console.log(highPrice);

  }

  // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
  else {

    // Change the HTML to reflect the initial values
    $("#highest-bidder").text(highBidder);
    $("#highest-price").text("$" + highPrice);

    // Print the data to the console.
    console.log(highBidder);
    console.log(highPrice);

  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Get the input values
  var bidderName = $("#bidder-name").val().trim();
  var bidderPrice = parseInt($("#bidder-price").val().trim());

  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase
    database.ref().set({
      highBidder: bidderName,
      highPrice: bidderPrice
    });


    // Log the new High Price
    console.log(bidderPrice)

    // Store the new high price and bidder name as a local variable
    newHighPrice = parseInt(bidderPrice);
    newHighBidder = bidderName;

    // Change the HTML to reflect the new high price and bidder

    $("#highest-bidder").text(newHighBidder);
    $("#highest-price").text(newHighPrice);


  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

});
