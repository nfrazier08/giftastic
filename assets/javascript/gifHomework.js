$(document).ready(function() {
//STEP 1: Set up an array of animals in a variable
	//for the API to grab initially
	var animals = [	"polar bear", "chinchilla", "penguin", "whale",
 				"frog", "elephant", "lion", "baboon", "bat", 
 				"fish", "eagle", "honey bee", "walrus"];

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
			newAnimalButton.attr("data-state", "data-name", "button", animals[i]);
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

	renderButtons();

//STEP 4: Set up ajax function to request information Giphy
//Register click handler
	$("button").on("click", function() {

	var animal = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + 
				animal + "&api_key=dc6zaTOxFJmzC&limit=10";

	//THIS IS NOT WORKING
	$.ajax({
		url:queryURL,
		method:"GET"
	}).done(function(response) {
		var results = response.data;
		console.log(this);
		$("#gifDump").html('<img scr"' + results[0].images.original.url + '">');

		});
	})

//STEP 5: Create a function where the player can:
	//"pause" and "play" the gifs
	//Apply this function to the animals in the array
	$(".addedAnimalButtons").on("click", function() {
		if("data-state" === "still") {
            $(this).attr('data-state', 'animate');
            $(this).attr('src', $(this).attr('data-animate'));
          } else{
            $(this).attr('data-state', 'still');
            $(this).attr('src', $(this).attr('data-still'));
          }
    })



})//End of my assignment



		

	



