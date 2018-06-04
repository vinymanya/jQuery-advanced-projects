
$(document).ready(function(){
	// Make an AJAX request with jQuery to the pokeAPI
	$.get("https://pokeapi.co/api/v2/pokemon/1/", function(data){
		
		// //ONE WAY: loop through the data that we want

		// for(let i=0; i < data.types.length; i++){
		// 	// console.log(data.types[i].type.name);
		// 	$("div").append(`<h4>Types</h4><ul><li>${data.types[i].type.name}</li></ul>`);
		// }


		// ANOTHER WAY
		let html_str = "";
		html_str += "<h4>Types</h4>";
		html_str += "<ul>";

		for(let i=0; i < data.types.length; i++){
			html_str += "<li>" + data.types[i].type.name + "</li>";
		}

		html_str += "</ul>";
		$("div").html(html_str);
	}, "json");
})