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
			"user[login]": {
				required: true, 
				minlength: 3, 
				maxlength: 64,
				remote: "/users/check_login"
			},
			"user[password]": {
				required: true, 
				minlength: 6,
				maxlength: 64,
			},
			"user[password_confirmation]": {
				required: true, 
				equalTo: "#user_password"
			},
			"user[email]": {
				required: true, 
				email: true, 
				remote: "/users/check_email"
			},
			"user[email_confirmation]": {
				required: true, 
				email: true, 
				equalTo: "#user_email"
			}
		},
		messages: {
			"user[login]": {
				required: "Username is requried!", 
				minlength: "Username must be longer than 3 characters!", 
				maxlength: "Username must be shorter than 64 characters!",
				remote: "Username is already in use!"
			},
			"user[password]": {
				required: "Password is required!", 
				minlength: "Password must be longer than 6 characters!",
				maxlength: "Password must be shorter than 64 characters!",
			},
			"user[password_confirmation]": {
				required: "Password Confirmation is required!", 
				equalTo: "Password Confirmation does not match Password!"
			},
			"user[email]": {
				required: "Email is required!", 
				email: "Not a valid email address!", 
				remote: "Email is already in use!"
			},
			"user[email_confirmation]": {
				required: "Email Confirmation is required!", 
				email: "Not a valid email address!", 
				equalTo: "Email Confirmation does not match Email!"
			}
		}
	});
});
