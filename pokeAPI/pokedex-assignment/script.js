

$(document).ready(function(){
	// Make a AJAX call to retrieve data from the API
	for(let i=1; i <= 151; i++){
		$("div#imageContainer").append(`<img id="${i}" src="http://pokeapi.co/media/img/${i}.png">`);
	}

	// Attach event handler to dynamic content
	$("div#imageContainer").on("click", "img", function(){
		let id = $(this).attr("id");
		// Construct a URL with the id
		let URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

		// Make an AJAX request to the API with the URL above
		// $.ajax() method allows us to avoid CORS( cross origin ressource sharing);
		$.ajax({
		    url: encodeURI(URL),
		    type: "GET",
		    // jQuery does not add the header when its a cross domain request. So add it manually.
		    beforeSend: function (xhr) {
		        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		    },
		    data: {},
		    contentType: 'application/x-www-form-urlencoded',
		    success: function (data) {
		    	// Build html content to display in the pokedex 
		    	let html_str = "";
		    	html_str += "<h2>"+ data.name +"</h2>";
		    	html_str += `<img src="http://pokeapi.co/media/img/${id}.png">`;
		    	html_str += "<h4>Types</h4>";
		    	html_str += "<ul>";

		    	// Loop through types array to output each type's name
		    	for(let i=0; i < data.types.length; i++){
		    		// Display each type's name
		    		html_str += "<li>"+ data.types[i].type.name +"</li>";
		    	}

		    	html_str += "</ul>";

		    	// Display height
		    	html_str += "<h4>Height</h4>";
		    	html_str += "<p>"+ data.height +"</p>";

		    	// Display weight
		    	html_str += "<h4>Weight</h4>";
		    	html_str += "<p>"+ data.weight +"</p>";

		    	// Output all the built html content
		    	$("div#pokedex").html(html_str);

		    },
		    error: function (error) { console.log("Failed to load data:"+ error) },
		    dataType: "json"
		});
	})

})