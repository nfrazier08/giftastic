$(document).ready(function() {
//STEP 1: Set up an array of animals in a variable
	//for the API to grab initially
	var animals = [	"polar bear", "chinchilla", "penguin", "whale",
 				"frog", "elephant", "lion", "baboon", "bat", 
 				"fish", "eagle", "honey bee", "walrus"];

//STEP 2: Set up ajax function to request information Giphy
//Register click handler
	$("button").on("click", function() {

	function displayAnimalGifs () {

	var animal = $(this).attr("data-animal");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + 
				animal + "&api_key=e22a26b4f57540b8af89c62d87bb33a6&limit=10";

	//THIS IS NOT WORKING
	$.ajax({
		url:queryURL,
		method:"GET"
	}).done(function(response) {
		var results = response.data;
		console.log(this);
		$("#gifDump").html('<img scr"' + results[0].images.original.url + '">');

		});

	}
displayAnimalGifs();

})

//STEP 3: Create buttons out of the original array of animals 
	//to display in the class addedAnimalButtons
	function renderButtons(){
		//Delete content inside the addedAnimalsButtons div
			//So not to have repeat buttons
		$(".addedAnimalButtons").empty();

		//Loop through the array of animals, then generate buttons for each
			//animal in the array
		for (var i = 0; i < animals.length; i++) {
			var newAnimalButton = $("<button type='button' class='btn btn-success'>");
			newAnimalButton.attr("data-animal", animals[i]);
			newAnimalButton.text(animals[i]);
			$(".addedAnimalButtons").append(newAnimalButton);
		} //End of the for loop
	}//End of the renderButtons function

	renderButtons();
	
//STEP 4: The user can add an animal button to the addedAnimalButton div
 	//using the animalForm
	$("#add-animal").on("click", function(event){
		var addedAnimal = $("#animalInput").val();
	//prevent submit button from trying to submit form
		event.preventDefault();
		animals.push(addedAnimal);

	renderButtons();
	console.log(animals);

	}) //End of the click function

	renderButtons();


//STEP 5: Create a function where the player can:
	//"pause" and "play" the gifs
	//Apply this function to the animals in the array



}) 
		

	



