
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCznoxkdOZFy0YB9YgJgMHVo1NxZbe8FvU",
    authDomain: "datemanagement.firebaseapp.com",
    databaseURL: "https://datemanagement.firebaseio.com",
    projectId: "datemanagement",
    storageBucket: "datemanagement.appspot.com",
    messagingSenderId: "159952801859"
  };
  firebase.initializeApp(config);



var employeeName = "";
var role = "";
var startDate = "";
var monthlyRate = "";
var monthsWorked = 0;
var totalBill = 0;


var randomDate = "";
var randomFormat = "";
//var convertedDate = moment()


var database = firebase.database();



$("#submit").on("click", function(){

	event.preventDefault();

	employeeName = $("#employee-name").val().trim();
	role = $("#role").val().trim();
	startDate = $("#start-date").val().trim();
	monthlyRate = $("#monthly-rate").val().trim();
	//monthsWorked = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
	totalBill = $("rate-input").val()

		

	database.ref().push({
		employeeName: employeeName,
		role: role, 
		startDate: startDate,
		monthlyRate: monthlyRate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP


	});
	//console.log(startDate);

});


database.ref().on("child_added", function(childSnapshot){


	var startDate = childSnapshot.val().startDate;
	var monthlyRate = childSnapshot.val().monthlyRate;


	var startConverted = moment(startDate).format("X")

	console.log("___________------------------")
	console.log(startConverted);


	var totalBilled;







	var generateRow = $("<tr>");
	generateRow.html("<td>" + childSnapshot.val().employeeName + "</td>"
					+"<td>" + childSnapshot.val().role + "</td>"
					+"<td>" + childSnapshot.val().startDate + "</td>"
					+"<td>" + monthsWorked + "</td>"
					+"<td>" + childSnapshot.val().monthlyRate + "</td>"
					+"<td>" + totalBilled + "</td>");
	

	$("#add-employee").append(generateRow);

		console.log(childSnapshot.val().employeeName)
});


	

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
	var generateRow = $("<tr>");
	generateRow.html("<td>" + snapshot.val().employeeName + "</td>"
		+"<td>" + snapshot.val().role + "</td>"
		+"<td>" + snapshot.val().startDate + "</td>"
		+"<td>" + monthsWorked + "</td>"
		+"<td>" + snapshot.val().monthlyRate + "</td>"
		+"<td>" + totalBill + "</td>");
	

	$("#add-employee").append(generateRow);


});

	//console.log(employeeName)






//console.log(moment().format("DD/MM/YY hh:mm A"));