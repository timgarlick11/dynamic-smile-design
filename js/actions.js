

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

	var EmployeesInfo = function (name, hours, wage) {
		this.name = name;
		this.hours = hours;
		this.wage = wage;

	}

	var employeeArr = [];

	var employeeOne = new EmployeesInfo("Tim", 40, 7.25);
	var employeeTwo = new EmployeesInfo("natalie", 30, 7.25);

	employeeArr.push(employeeOne, employeeTwo);

	var calculate = function() {
		var total = 0;
		var hoursRatio = 0
		for (var i = 0; i < employeeArr.length; i++) {
			console.log(employeeArr[i].name, employeeArr[i].hours);
			total = total + employeeArr[i].hours;

		}
		for (var i = 0; i < employeeArr.length; i++) {
			hoursRatio = employeeArr[i].hours / total;
			console.log(employeeArr[i].name, hoursRatio);

		}
		

	}
	calculate();
});
