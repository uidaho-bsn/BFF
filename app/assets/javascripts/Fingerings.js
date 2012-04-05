/* 
 * @author Max Stillwell
 * */
//= require jquery
//= require jquery_ujs
//= require Fingering
//= require Key
//= require Note
//= require Fingering_Chart
//= require Fingerings_Canvas

var canvas;
var scale_X;
var scale_Y;
var ctx;
var fingerings_canvas;
var pointer = '';
var mouse_X;
var mouse_Y;

/* Init */
$(document).ready(function() {
	var type = 'none';
	var help = true;
	
	if(     canvas = document.getElementById('new_fingering' )) { type = 'new';  }
	else if(canvas = document.getElementById('edit_fingering')) { type = 'edit'; }
	else if(canvas = document.getElementById('show_fingering')) { 
		type = 'show'; 
		help = false; 
	}
	else { return false; };
	
	canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
	
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		
		if(typeof fingering_id != 'undefined') { var keys_string = fingering_id; }
		else                                   { var keys_string = '1:777777777777777777777777777777'; };

		if(typeof note_tone_id != 'undefined') { var note_tone = note_tone_id; }
		else                                   { var note_tone = '1:f3_natural'; };
		
		fingerings_canvas = new Fingerings_Canvas(keys_string, note_tone, type, help);
	}
	else {
		alert("Error: Could not get canvas context!");
	};
});
