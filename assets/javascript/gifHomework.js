$(document).ready(function() {
//STEP 1: Set up an array of animals in a variable
	//for the API to grab initially
	var animals = [	"polar bear", "chinchilla", "penguin", "whale",
	"frog", "elephant", "lion", "baboon", "bat", 
	"fish", "eagle", "honey bee", "walrus"];

	var img;
	var state;

//STEP 2: Create buttons out of the original array of animals 
	//to display in the class addedAnimalButtons
	function renderButtons(){
		//Delete content inside the addedAnimalsButtons div
			//So not to have repeat buttons
			$(".addedAnimalButtons").empty();

		//Loop through the array of animals, then generate buttons for each
			//animal in the array
			for (var i = 0; i < animals.length; i++) {
			//This is just a variable
			var newAnimalButton = $("<button type='button' class='btn btn-success' style='margin:10px';>");
			newAnimalButton.attr("data-name", animals[i]);
			newAnimalButton.text(animals[i]);
			$(".addedAnimalButtons").append(newAnimalButton);
		} //End of the for loop
	}//End of the renderButtons function

	renderButtons();
	
//STEP 3: The user can add an animal button to the addedAnimalButton div
 	//using the animalForm
 	$("#add-animal").on("click", function(event){
 		var addedAnimal = $("#animalInput").val();
	//prevent submit button from trying to submit form
	event.preventDefault();
	animals.push(addedAnimal);

	renderButtons();
	console.log(animals);

	}) //End of the click function

//STEP 4: Set up ajax function to request information Giphy
//Register click handler
$(".addedAnimalButtons").on("click", "button", function() {

	var animal = $(this).attr("data-name");
	console.log(animal);
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
	animal + "&api_key=dc6zaTOxFJmzC&limit=15";

		//THIS IS NOT WORKING
		$.ajax({
			url:queryURL,
			method:"GET"
		}).done(function(response) {
			$("#gifDump").empty();
			var results = response.data;

			//Add a loop here
			for (var i = 0; i < results.length; i++) {
				var img = $('<img src="' + results[i].images.original.url + '">');
				
				
					//Define state 
					var state = $(this).attr("data-state");
					//Add Data Attributes
					img.attr("data-state", "animate");
					img.attr("data-state", "still");
					img.attr("animate", '<img src="' + results[i].images.original.url + '">');
					img.attr("still", '<img src="' + results[i].images.original_still.url + '">');
					
					img.attr($("#gifDump").append(img));
			} //End of for loop				
		}); //After done function
	})

//STEP 5: Pause and Play gifs with click function
$("#gifDump").on("click", "img", function() {
	console.log("working");
});




})//End of my assignment








