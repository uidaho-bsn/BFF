/* 
 * @author Max Stillwell
 * */

var canvas;
var canvas_W;
var scale_X;
var canvas_H;
var scale_Y;
var ctx;
var fingering_chart;

/* Draw */
function clear() {
	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, canvas_W, canvas_H);
};

function draw() {
	ctx.save();
		clear();
		ctx.scale(scale_X, scale_Y);
		fingering_chart.Update();
	ctx.restore();
};

/* Init */
$(document).ready(function() {
	var type = 'none';
	var help = true;
	
	if(canvas = document.getElementById('new_fingering'))       { type = 'new'; }
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
		else                                   { var keys_string = '000000000000000000000000000000'; };

		if(typeof note_tone_id != 'undefined') { var note_tone = note_tone_id; }
		else                                   { var note_tone = 'd3_natural'; };
		
		var note = note_tone.substring(0, 2);
		switch (note_tone.substring(3)) {
			case "natural":
				var tone = "♮";
			break;
			case "flat":
				var tone = "♭";
			break;
			case "sharp":
				var tone = "♯";
			break;
		};

		fingering_chart = new Fingering(keys_string, note, tone, help);

		canvas_W = canvas.width;
		canvas_H = canvas.height;

		scale_X = canvas_W / 200;         // Base canvas size is 200
		scale_Y = (canvas_H - 100) / 200; // by 200, don't go any smaller. Extra 100 is for note.

		// Init Events
		if((type == 'edit') || (type == 'new')) {
			canvas.onclick     = onClick;
			canvas.onmousemove = MouseMoved;
			
			return setInterval(draw, 100);
		}
		else { draw(); };
	}
	else {
		alert("Error: Could not get canvas context!");
	};
});
