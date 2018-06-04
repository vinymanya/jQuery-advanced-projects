
$(document).ready(function(){

	$("form").submit(function(){
		const firstName = $("#fn").val();
			  lastName = $("#ln").val();
			  email = $("#email").val();
			  desc = $("#desc").val();
		$("div#container").append("<div class = 'cardContainer'>"+ "<h3>" + firstName + " " + lastName + "</h3>" + "<p>" + email +"</p><p>" + desc + "</p><br>" +
				"<a href='#''>" + "<i class='fa fa-twitter'>" + "</i>" + "</a><a href='#'>" + "<i class='fa fa-linkedin'>" + "</i>" + "</a>" +
				"<a href='#'>" + "<i class='fa fa-facebook'>" + "</i>" + "</a><p><button id='descButton'>" + "Description" + "</button>" + "</p></div>"
		);
		alert("You have been successfully added!");

		// Clear out the form inputs
		$("#fn").val("");
		$("#ln").val("");
		$("#email").val("");
		$("#desc").val("");
		return false; // Prevent the form from being submitted
	})

	// Attach an event handler to dynamically generated content.
	$("div#container").on("click", "#descButton", function(){
		$(this).parent().toggle();
	})
})