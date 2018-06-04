// Get all pokemon images from pokeAPI URL
function pokemon(){
	// Loop through all resources
	for(let i=1; i <= 151; i++){
		$("div").append(`<img src="http://pokeapi.co/media/img/${i}.png">`)
	}
}


$(document).ready(function(){
	pokemon();
})