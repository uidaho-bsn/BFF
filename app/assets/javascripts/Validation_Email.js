/**
 * @author Max Stillwell
 */
//= require jquery
//= require jquery_ujs
//= require jquery-validation-1.9.0/jquery.validate.min

$(document).ready(function () {
	$("#form").validate({
		debug: false, 
		rules: {
			"user[email]": {
				required: true, 
				email: true, 
			}
		},
		messages: {
			"user[email]": {
				required: "Email is required!", 
				email: "Not a valid email address!", 
			}
		}
	});
});
