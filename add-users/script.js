$(document).ready(function(){
	$("form").submit(function(){
		var firstName = $("#fn").val();
		var lastName = $("#ln").val();
		var email = $("#email").val();
		var phone = $("#contact").val();

		$("table").children("tbody").append(`
			<tr>
				<td>${firstName}</td>
				<td>${lastName}</td>
				<td>${email}</td>
				<td>${phone}</td>
			</tr>
			`);
		return false;
	})
})