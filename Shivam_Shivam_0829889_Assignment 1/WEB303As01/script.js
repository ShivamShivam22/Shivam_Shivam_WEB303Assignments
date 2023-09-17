/*
	WEB 303 Assignment 1 - jQuery
	{Shivam Shivam}
*/
$(document).ready(function() {

	$('#yearly-salary, #percent').on('change', function() {

	var salary = parseFloat($('#yearly-salary').val());
		var percent = parseFloat($('#percent').val());
			var amount = (salary * percent / 100).toFixed(2); 
				$('#amount').text('$' + amount);
					});
  });
