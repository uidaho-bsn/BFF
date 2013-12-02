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
			},
			"user[new_password]": {
				minlength: 6,
				maxlength: 64,
			},
			"user[new_password_confirmation]": {
				equalTo: "#user_new_password"
			},
			"user[password]": {
				required: true, 
				minlength: 6,
				maxlength: 64,
			}
		},
		messages: {
			"user[email]": {
				required: "Email is required!", 
				email: "Not a valid email address!", 
			},
			"user[new_password]": {
				minlength: "New Password must be longer than 6 characters!",
				maxlength: "New Password must be shorter than 64 characters!",				
			},
			"user[new_password_confirmation]": {
				equalTo: "Password Confirmation does not match New Password!"
			},
			"user[password]": {
				required: "Password is required!", 
				minlength: "Password must be longer than 6 characters!",
				maxlength: "Password must be shorter than 64 characters!",
			}
		}
	});
});
