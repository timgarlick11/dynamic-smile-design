$(document).ready(function(){

	console.log("hi");
	$('.nav-icon').click(function() {
		console.log("hey")
		$('.mobile-nav-dropdown').slideToggle(500);

	});
})