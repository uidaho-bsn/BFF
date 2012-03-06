/* 
 * fingering.js
 * Max Stillwell
 * */

/* Globals */
 // Canvas
  var canvas;
  var canvas_W;
  var canvas_H;
  var ctx;
 // Objects
  var fingering_chart;
 // Scale By
  var scale_X;
  var scale_Y;
 // Status
  var status;

/* Objects */
function Key(x, y, r, rotation, type) {
	/* Variables */
	this.x = x;
	this.y = y;
	this.r = r;
	this.rotation = rotation;
	this.status = 7;
	this.type = type;
	/* Public Functions */
	this.draw = draw;
	
	function draw() {
		switch (this.type) {
			case 'circle':
				draw_circle(x, y, r, this.status);
			break;
			case 'half-circle':
				draw_half_circle(x, y, r, rotation, this.status);
			break;
			case 'oval-small':
				draw_oval(x, y, r, 0.75, 0.5, rotation, this.status);
			break;
			case 'oval-med':
				draw_oval(x, y, r, 1.00, 0.5, rotation, this.status);
			break;
			case 'oval-large':
				draw_oval(x, y, r, 1.50, 0.5, rotation, this.status);
			break;
			default:
				alert("Error: Key.draw(" + type + ").");
			break;
		};
	};

	function status_effect(status) {
		switch (status) {
			case 1:
				ctx.fillStyle = "orange";
			break;
			case 2:
				ctx.fillStyle = "red";
			break;
			case 3:
				ctx.fillStyle = "green";
			break;
			case 4:
				ctx.fillStyle = "blue";
			break;
			case 5:
				ctx.fillStyle = "yellow";
			break;
			case 6:
				ctx.fillStyle = "purple";
			break;
			case 7:
				ctx.fillStyle = "white";
			break;
			default:
				alert("Error: Key.status_effect(" + status + ").")
			break;
		};
	};
	
	function draw_oval(x, y, r, scale_x, scale_y, rotation, status) {
		ctx.save();
			status_effect(status, ctx);
			ctx.translate(x, y);
			ctx.rotate(rotation);
			ctx.scale(scale_x, scale_y);
			ctx.beginPath();
				ctx.arc(0, 0, r, 0, Math.PI * 2, false);
				ctx.scale(scale_y, scale_x);
				if(status != 7) {
					ctx.fill();
				}
				else {
					ctx.stroke();
				}
			ctx.closePath();
		ctx.restore();
	};
	
	function draw_circle(x, y, r, status) {
		ctx.save();
			status_effect(status, ctx);
			ctx.translate(x, y);
			ctx.beginPath();
				ctx.arc(0, 0, r, 0, Math.PI * 2, false);
				if(status != 7) {
					ctx.fill();
				}
				else {
					ctx.stroke();
				}
			ctx.closePath();
		ctx.restore();
	};
	
	function draw_half_circle(x, y, r, rotation, status) {
		ctx.save();
			status_effect(status, ctx);
			ctx.translate(x, y);
			ctx.beginPath();
				ctx.arc(0, 0, r, 0, Math.PI, false);
				if(status != 7) {
					ctx.fill();
				}
				else {
					ctx.fill();
				}
				ctx.lineTo()
			ctx.closePath();
		ctx.restore();
	};
};

function Fingering_Chart() {
	/* Public Functions */
    this.draw = draw;
    /* Keys */
	this.low_bflat 	 			= new Key(40, 20,  10, -( 115 * Math.PI ) / 180, 'oval-large', this.ctx);
	this.low_b 		 			= new Key(30, 30,  10, -( 115 * Math.PI ) / 180, 'oval-large', this.ctx);
	//this.low_c 		 		= new Key();  
	this.low_d 		 			= new Key(10, 70,  10, Math.PI / 2, 			 'oval-large', this.ctx);
	this.whisper 	 			= new Key(70, 70,  10, 0, 						 'oval-small', this.ctx);
	this.thumb_csharp 			= new Key(70, 55,  10, 0, 						 'oval-med',   this.ctx);
	this.high_a 		 		= new Key(70, 40,  10, 0, 						 'oval-large', this.ctx);
	this.high_c 		 		= new Key(70, 25,  10, 0, 						 'oval-med',   this.ctx);
	this.high_d 		 		= new Key(70, 10,  10, 0, 						 'oval-small', this.ctx);
	this.thumb_bflat  			= new Key(70, 110, 10, 0, 						 'oval-large', this.ctx);
	this.low_e 		 			= new Key(70, 140, 20, 0, 						 'circle', 	   this.ctx);
	this.thumb_fsharp 			= new Key(70, 170, 10, -( 10 * Math.PI ) / 180,  'oval-large', this.ctx);
	this.thumb_aflat  			= new Key(75, 185, 10, -( 10 * Math.PI ) / 180,  'oval-large', this.ctx);
	this.trill_a_to_b 			= new Key(50, 180, 10, 0, 						 'oval-small', this.ctx);
	//this.trill_g 	 			= new Key();
	//this.trill_fsharp 		= new Key();
	//this.trill_eflat 			= new Key();
	//this.low_eflat 			= new Key();
	//this.low_dflat 			= new Key();
	//this.trill_csharp 		= new Key();
	//this.trill_bflat 			= new Key();
	//this.low_g 				= new Key();
	//this.low_f 				= new Key();
	//this.little_finger_fsharp = new Key();
	//this.little_finger_aflat 	= new Key();

	function draw() {
		ctx.strokeRect(0, 0, canvas.width, canvas.height);
		this.low_bflat.draw();
		this.low_b.draw();
		//this.low_c.draw();
		this.low_d.draw();
		this.whisper.draw();
		this.thumb_csharp.draw();
		this.high_a.draw();
		this.high_c.draw();
		this.high_d.draw();
		this.thumb_bflat.draw();
		this.low_e.draw();
		this.thumb_fsharp.draw();
		this.thumb_aflat.draw();
		this.trill_a_to_b.draw();
		//this.trill_g.draw();
		//this.trill_fsharp.draw();
		//this.trill.eflat.draw();
		//this.low_eflat.draw();
		//this.low_dflat.draw();
		//this.trill_chsarp.draw();
		//this.trill_bflat.draw();
		//this.low_g.draw();
		//this.low_f.draw();
		//this.little_finger_fsharp.draw();
		//this.little_finger_aflat.draw();
	};
};

/* Events */
function onClick(e) {
	// Variables
	var location = 'none';
	var clickX = e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft);
	var clickY = e.pageY - (canvas.offsetTop + canvas.offsetParent.offsetTop);

	// Find Click Location
	if(intersects(fingering_chart.low_bflat.x, fingering_chart.low_bflat.y, clickX, clickY, fingering_chart.low_bflat.r)) {
		location = 'low_bflat';
	}
	else if(intersects(fingering_chart.low_b.x, fingering_chart.low_b.y, clickX, clickY, fingering_chart.low_b.r)) {
		location = 'low_b';
	}
	/*else if(intersects(fingering_chart.low_c.x, fingering_chart.low_c.y, clickX, clickY, fingering_chart.low_c.r)) {
		location = 'low_c';
	}*/
	else if(intersects(fingering_chart.low_d.x, fingering_chart.low_d.y, clickX, clickY, fingering_chart.low_d.r)) {
		location = 'low_d';
	}
	else if(intersects(fingering_chart.whisper.x, fingering_chart.whisper.y, clickX, clickY, fingering_chart.whisper.r)) {
		location = 'whisper';
	}
	else if(intersects(fingering_chart.thumb_csharp.x, fingering_chart.thumb_csharp.y, clickX, clickY, fingering_chart.thumb_csharp.r)) {
		location = 'thumb_csharp';
	}
	else if(intersects(fingering_chart.high_a.x, fingering_chart.high_a.y, clickX, clickY, fingering_chart.high_a.r)) {
		location = 'high_a';
	}
	else if(intersects(fingering_chart.high_c.x, fingering_chart.high_c.y, clickX, clickY, fingering_chart.high_c.r)) {
		location = 'high_c';
	}
	else if(intersects(fingering_chart.high_d.x, fingering_chart.high_d.y, clickX, clickY, fingering_chart.high_d.r)) {
		location = 'high_d';
	}
	else if(intersects(fingering_chart.thumb_bflat.x, fingering_chart.thumb_bflat.y, clickX, clickY, fingering_chart.thumb_bflat.r)) {
		location = 'thumb_bflat';
	}
	else if(intersects(fingering_chart.low_e.x, fingering_chart.low_e.y, clickX, clickY, fingering_chart.low_e.r)) {
		location = 'low_e';
	}
	else if(intersects(fingering_chart.thumb_fsharp.x, fingering_chart.thumb_fsharp.y, clickX, clickY, fingering_chart.thumb_fsharp.r)) {
		location = 'thumb_fsharp';
	}
	else if(intersects(fingering_chart.thumb_aflat.x, fingering_chart.thumb_aflat.y, clickX, clickY, fingering_chart.thumb_aflat.r)) {
		location = 'thumb_aflat';
	}
	else if(intersects(fingering_chart.trill_a_to_b.x, fingering_chart.trill_a_to_b.y, clickX, clickY, fingering_chart.trill_a_to_b.r)) {
		location = 'trill_a_to_b';
	};
/*	else if(intersects(fingering_chart.trill_g.x, fingering_chart.trill_g.y, clickX, clickY, fingering_chart.trill_g.r)) {
		location = 'trill_g';
	}
	else if(intersects(fingering_chart.trill_fsharp.x, fingering_chart.trill_fsharp.y, clickX, clickY, fingering_chart.trill_fsharp.r)) {
		location = 'trill_fsharp';
	}
	else if(intersects(fingering_chart.trill_eflat.x, fingering_chart.trill_eflat.y, clickX, clickY, fingering_chart.trill_eflat.r)) {
		location = 'trill_eflat';
	}
	else if(intersects(fingering_chart.low_eflat.x, fingering_chart.low_eflat.y, clickX, clickY, fingering_chart.low_eflat.r)) {
		location = 'low_eflat';
	}
	else if(intersects(fingering_chart.low_dflat.x, fingering_chart.low_dflat.y, clickX, clickY, fingering_chart.low_dflat.r)) {
		location = 'low_dflat';
	}
	else if(intersects(fingering_chart.trill_csharp.x, fingering_chart.trill_csharp.y, clickX, clickY, fingering_chart.trill_csharp.r)) {
		location = 'trill_csharp';
	}
	else if(intersects(fingering_chart.trill_bflat.x, fingering_chart.trill_bflat.y, clickX, clickY, fingering_chart.trill_bflat.r)) {
		location = 'trill_bflat';
	}
	else if(intersects(fingering_chart.low_g.x, fingering_chart.low_g.y, clickX, clickY, fingering_chart.low_g.r)) {
		location = 'low_g';
	}
	else if(intersects(fingering_chart.low_f.x, fingering_chart.low_f.y, clickX, clickY, fingering_chart.low_f.r)) {
		location = 'low_f';
	}
	else if(intersects(fingering_chart.little_finger_fsharp.x, fingering_chart.little_finger_fsharp.y, clickX, clickY, fingering_chart.little_finger_fsharp.r)) {
		location = 'little_finger_fsharp';
	}
	else if(intersects(fingering_chart.little_finger_aflat.x, fingering_chart.little_finger_aflat.y, clickX, clickY, fingering_chart.little_finger_aflat.r)) {
		location = 'little_finger_aflat';
	};*/

	// Update Status
	switch (location) {
		case 'low_bflat':
			fingering_chart.low_bflat.status = status_update(fingering_chart.low_bflat.status);
		break;
		case 'low_b':
			fingering_chart.low_b.status = status_update(fingering_chart.low_b.status);
		break;
		case 'low_c':
			fingering_chart.low_c.status = status_update(fingering_chart.low_c.status);
		break;
		case 'low_d':
			fingering_chart.low_d.status = status_update(fingering_chart.low_d.status);
		break;
		case 'whisper':
			fingering_chart.whisper.status = status_update(fingering_chart.whisper.status);
		break;
		case 'thumb_csharp':
			fingering_chart.thumb_csharp.status = status_update(fingering_chart.thumb_csharp.status);
		break;
		case 'high_a':
			fingering_chart.high_a.status = status_update(fingering_chart.high_a.status);
		break;
		case 'high_c':
			fingering_chart.high_c.status = status_update(fingering_chart.high_c.status);
		break;
		case 'high_d':
			fingering_chart.high_d.status = status_update(fingering_chart.high_d.status);
		break;
		case 'thumb_bflat':
			fingering_chart.thumb_bflat.status = status_update(fingering_chart.thumb_bflat.status);
		break;
		case 'low_e':
			fingering_chart.low_e.status = status_update(fingering_chart.low_e.status);
		break;
		case 'thumb_fsharp':
			fingering_chart.thumb_fsharp.status = status_update(fingering_chart.thumb_fsharp.status);
		break;
		case 'thumb_aflat':
			fingering_chart.thumb_aflat.status = status_update(fingering_chart.thumb_aflat.status);
		break;
		case 'trill_a_to_b':
			fingering_chart.trill_a_to_b.status = status_update(fingering_chart.trill_a_to_b.status);
		break;
		case 'trill_g':
			fingering_chart.trill_g.status = status_update(fingering_chart.trill_g.status);
		break;
		case 'trill_fsharp':
			fingering_chart.trill_fsharp.status = status_update(fingering_chart.trill_fsharp.status);
		break;
		case 'trill_eflat':
			fingering_chart.trill_eflat.status = status_update(fingering_chart.trill_eflat.status);
		break;
		case 'low_eflat':
			fingering_chart.low_eflat.status = status_update(fingering_chart.low_eflat.status);
		break;
		case 'low_dflat':
			fingering_chart.low_dflat.status = status_update(fingering_chart.low_dflat.status);
		break;
		case 'trill_csharp':
			fingering_chart.trill_csharp.status = status_update(fingering_chart.trill_csharp.status);
		break;
		case 'trill_bflat':
			fingering_chart.trill_bflat.status = status_update(fingering_chart.trill_bflat.status);
		break;
		case 'low_g':
			fingering_chart.low_g.status = status_update(fingering_chart.low_g.status);
		break;
		case 'low_f':
			fingering_chart.low_f.status = status_update(fingering_chart.low_f.status);
		break;
		case 'little_finger_fsharp':
			fingering_chart.little_finger_fsharp.status = status_update(fingering_chart.little_finger_fsharp.status);
		break;
		case 'little_finger_aflat':
			fingering_chart.little_finger_aflat.status = status_update(fingering_chart.little_finger_aflat.status);
		break;
		case 'none':
			//
		break;
	};
};

function MouseMoved(e) {
	//Variables
	var mouseX = e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft);
	var mouseY = e.pageY - (canvas.offsetTop + canvas.offsetParent.offsetTop);

	// Find Mouse
	if (isCursorOverKey(mouseX, mouseY)) {
		document.body.style.cursor = 'pointer';
	}
	else {
		document.body.style.cursor = 'default';
	};
};

/* Helpers */
function status_update(status) {
	if(status >= 7) {
		status = 0;
	};
	status += 1;

	return status;
};

function intersects(x, y, mx, my, r) {
	var dx = x - mx;
	var dy = y - my;
	
	if(dx * dx + dy * dy <= r * r) {
		return true;
	};
	
	return false;
};

function isCursorOverKey(x, y) {	
	if(intersects(fingering_chart.low_bflat.x, 	  fingering_chart.low_bflat.y,    x, y, fingering_chart.low_bflat.r) ||
	   intersects(fingering_chart.low_b.x,    	  fingering_chart.low_b.y,        x, y, fingering_chart.low_b.r) ||
//	   intersects(fingering_chart.low_c.x,        fingering_chart.low_c.y,        x, y, fingering_chart.low_c.r) ||
	   intersects(fingering_chart.low_d.x,        fingering_chart.low_d.y,        x, y, fingering_chart.low_d.r) ||
	   intersects(fingering_chart.whisper.x,      fingering_chart.whisper.y,      x, y, fingering_chart.whisper.r) ||
	   intersects(fingering_chart.thumb_csharp.x, fingering_chart.thumb_csharp.y, x, y, fingering_chart.thumb_csharp.r) ||
	   intersects(fingering_chart.high_a.x,       fingering_chart.high_a.y,       x, y, fingering_chart.high_a.r) ||
	   intersects(fingering_chart.high_c.x,       fingering_chart.high_c.y,       x, y, fingering_chart.high_c.r) ||
	   intersects(fingering_chart.high_d.x,       fingering_chart.high_d.y,       x, y, fingering_chart.high_d.r) ||
	   intersects(fingering_chart.thumb_bflat.x,  fingering_chart.thumb_bflat.y,  x, y, fingering_chart.thumb_bflat.r) ||
	   intersects(fingering_chart.low_e.x,     	  fingering_chart.low_e.y,        x, y, fingering_chart.low_e.r) ||
	   intersects(fingering_chart.thumb_fsharp.x, fingering_chart.thumb_fsharp.y, x, y, fingering_chart.thumb_fsharp.r) ||
	   intersects(fingering_chart.thumb_aflat.x,  fingering_chart.thumb_aflat.y,  x, y, fingering_chart.thumb_aflat.r) ||
	   intersects(fingering_chart.trill_a_to_b.x, fingering_chart.trill_a_to_b.y, x, y, fingering_chart.trill_a_to_b.r)) { // ||
//	   intersects(fingering_chart.trill_g.x,      fingering_chart.trill_g.y,      x, y, fingering_chart.trill_g.r) ||
//	   intersects(fingering_chart.trill_fsharp.x, fingering_chart.trill_fsharp.y, x, y, fingering_chart.trill_fsharp.r) ||
//	   intersects(fingering_chart.trill_eflat.x,  fingering_chart.trill_eflat.y,  x, y, fingering_chart.trill_eflat.r) ||
//	   intersects(fingering_chart.low_eflat.x,    fingering_chart.low_eflat.y,    x, y, fingering_chart.low_eflat.r) ||
//	   intersects(fingering_chart.low_dflat.x,    fingering_chart.low_dflat.y,    x, y, fingering_chart.low_dflat.r) ||
//	   intersects(fingering_chart.trill_csharp.x, fingering_chart.trill_csharp.y, x, y, fingering_chart.trill_csharp.r) ||
//	   intersects(fingering_chart.trill_bflat.x,  fingering_chart.trill_bflat.y,  x, y, fingering_chart.trill_bflat.r) ||
//	   intersects(fingering_chart.low_g.x,    	  fingering_chart.low_g.y,        x, y, fingering_chart.low_g.r) ||
//	   intersects(fingering_chart.low_f.x,        fingering_chart.low_f.y,        x, y, fingering_chart.low_f.r) ||
//	   intersects(fingering_chart.little_finger_fsharp.x, fingering_chart.little_finger_fsharp.y, x, y, fingering_chart.little_finger_fsharp.r) ||
//	   intersects(fingering_chart.little_finger_aflat.x,  fingering_chart.little_finger_aflat.y,  x, y, fingering_chart.little_finger_aflat.r) ||
//     intersects(fingering_chart.low_b.x,				  fingering_chart.low_b.y,			      x, y, fingering_chart.low_b.r)) {
		return true;
	}
	else {
		return false;
	};
}

/* Draw */
function clear() {
	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, canvas_W, canvas_H);
};

function draw() {
	clear();
	fingering_chart.draw();
};

/* Init */
$(document).ready(function() {
	canvas = document.getElementById('fingering_view');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		status = document.getElementById('status');
		
		fingering_chart = new Fingering_Chart();
	
		canvas_W = canvas.width;
		canvas_H = canvas.height;
		
		scale_X = canvas_W / canvas.offsetWidth;
		scale_Y = canvas_H / canvas.offsetHeight;
	
		// Init Events
		canvas.onclick = onClick;
		canvas.onmousemove = MouseMoved;
 
		// Draw
		return setInterval(draw, 100);
	}
	else {
		alert("Error: Could not get canvas context!");
	};
});

