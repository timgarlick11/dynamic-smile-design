

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
// javascript test project
	var EmployeesInfo = function (name, hours, wage) {
		this.name = name;
		this.hours = hours;
		this.wage = wage;

	}

	var employeeArr = [];

	var employeeOne = new EmployeesInfo("Megan", 30, 7.25);
	var employeeTwo = new EmployeesInfo("Trevor", 30, 7.25);
	var employeeThree = new EmployeesInfo("Kayla", 30, 7.25);
	var employeeFour = new EmployeesInfo("Jonah", 30, 7.25);
	var employeeFive = new EmployeesInfo("Alicia", 10, 7.25);
	var employeeSix = new EmployeesInfo("Angie", 50, 7.25);
	var employeeSeven = new EmployeesInfo("Jaxton", 20, 7.25);
	var employeeEight = new EmployeesInfo("Kazia", 30, 7.25);
	var employeeNine = new EmployeesInfo("Lindsay", 15, 7.25);
	var employeeTen = new EmployeesInfo("jackson", 14, 7.25);
	var employeeEleven = new EmployeesInfo("nicole", 16, 7.25);
	var employeeTwelve = new EmployeesInfo("Kaitlyn", 13, 7.25);


	employeeArr.push(employeeOne, employeeTwo, employeeThree, employeeFour, 
		employeeFive, employeeSix, employeeSeven, employeeEight, 
		employeeNine, employeeTen, employeeEleven, employeeTwelve, 
		employeeThirteen, employeeFourteen, employeeFifteen, employeeSixteen);

	var calculate = function(grossIncome) {
		var totalHours = 0;
		var hoursRatio = 0
		var bonus = .05;

		for (var i = 0; i < employeeArr.length; i++) {
			console.log(employeeArr[i].name, employeeArr[i].hours);
			totalHours = totalHours + employeeArr[i].hours;
			console.log(totalHours);

		}
		console.log("globalInfo :" + totalHours, bonus*grossIncome);
		for (var i = 0; i < employeeArr.length; i++) {

			hoursRatio = employeeArr[i].hours / totalHours;
			bonus = bonus * hoursRatio * grossIncome;
			console.log(employeeArr[i].name, hoursRatio, bonus, grossIncome);
			bonus = .05; // reset bonus so it doesnt compound
		}

	}
	calculate(7200);
});
