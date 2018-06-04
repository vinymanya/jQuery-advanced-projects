
$(document).ready(function(){
	$("img").click(function(event){
		event.preventDefault();
		// Get the id
		let imgId = $(this).attr("id");
		// Construct the URL with the id above
		let URL = `https://www.anapioficeandfire.com/api/houses/${imgId}`;
		// Make an AJAX request the API using the constructed URL
		$.get(URL, function(data){
			// Construct the html to be inserted into the DOM
			let html_str = "";
			html_str += "<h2>House Properties:</h2>";
			html_str += "<h3>"+data.name+"</h3>";
			html_str += "<h4>Words:</h4>";
			html_str += "<p>"+data.words+"</p>";
			html_str += "<h4>Titles:</h4>";
			html_str += "<p>"+data.titles+"</p>";
			html_str += "<h4>Region:</h4>";
			html_str += "<p>"+data.region+"</p>";
			$("#houseInfo").html(html_str);
		}, "json")
	})
})