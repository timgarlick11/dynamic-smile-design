

$(document).ready(function() {
	console.log("hi");
	$("<i class='fa fa-caret-right'></i>").appendTo(".link-button").css('margin-left', '6px');
	$("<i class='fa fa-caret-right'></i>").appendTo(".procedure-info").css('margin-left', '6px').css("color","#b59356");

	$('.nav-icon').click(function() {
		console.log("hey");
		$('.mobile-nav-dropdown').slideToggle(500);
	});

	$('.top-banner-scroll-button').click(function(){

		var WH = $(window).height();  
		var SH = $('body')[0].scrollHeight;
		$('html, body').stop().animate({scrollTop: SH-WH}, 1000);
 		console.log( SH+' '+WH ); // TEST

 	}); 
});
