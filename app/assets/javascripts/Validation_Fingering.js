/**
 * @author Max Stillwell
 */
//= require jquery-validation-1.9.0/jquery.validate.min

$(document).ready(function () {
	$("#form").validate({
		debug: false, 
		rules: {
			"fingering[comments]": {
				minlength: 4, 
				maxlength: 255,
			}
		},
		messages: {
			"fingering[comments]": {
				minlength: "Comment too short!", 
				maxlength: "Comment too long!",
			}
		}
	});
});
