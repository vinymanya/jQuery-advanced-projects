
$(document).ready(function(){
	// Get the input value when the form get submitted
	$("form").submit(function(){
		let city = $("#city").val();

		let URL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=86443c0614722e4f16ee8e6a4f309fb5";

		// Make an AJAX request the API using the constructed URL
		$.get(URL, function(data){
			// Handle data here
			// Convert celsius to farenheit
			let temp_celsius = data.main.temp;
			let temp_farenheit = Math.ceil(9/5*(temp_celsius-273)+32);
			let cityName = data.name;

			// Construct the html
			let html_str = "";
			html_str += "<h2>"+ cityName +"</h2>";
			html_str += "<h4>Temperature in "+ cityName +" is: "+ temp_farenheit +" &degf</h4>";

			// Insert html_str into the div
			$("div").html(html_str);

		}, "json");

		// Clear out the input
		$("#city").val("");
		return false;
	})
})