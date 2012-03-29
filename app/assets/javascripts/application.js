// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {
	$("#form").validate({
		debug: false, 
		rules: {
			"user[login]": {
				required: true, 
				minlength: 3, 
				maxlength: 64,
				equalTo: "Username",
				remote: "/users/check_login"
			},
			"user[password]": {
				required: true, 
				minlength: 6,
				maxlength: 64,
				equalTo: "password"
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
				equalTo: "Username is invalid!",
				remote: "Username is already in use!"
			},
			"user[password]": {
				required: "Password is required!", 
				minlength: "Password must be longer than 6 characters!",
				maxlength: "Password must be shorter than 64 characters!",
				equalTo: "Password is invalid!"
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