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
			case 'circle-key':
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
				ctx.fillStyle = "black";
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
				var img = new Image();
				img.onload = function() {
					var pattern = ctx.createPattern(img, "repeat");
					
					ctx.fillStyle = pattern;
				};
				img.src = "images/pattern/diagonal-line.png";
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
	this.low_bflat 	 			= new Key(40,  20,  10, -( 115 * Math.PI ) / 180, 'oval-large');
	this.low_b 		 			= new Key(30,  30,  10, -( 115 * Math.PI ) / 180, 'oval-large');
	this.low_c 		 			= new Key(0,    0,   0, 0,                        'half-circle');  
	this.low_d 		 			= new Key(10,  70,  10, Math.PI / 2, 			  'oval-large');
	this.whisper 	 			= new Key(70,  70,  10, 0, 						  'oval-small');
	this.thumb_csharp 			= new Key(70,  55,  10, 0, 						  'oval-med');
	this.high_a 		 		= new Key(70,  40,  10, 0, 						  'oval-large');
	this.high_c 		 		= new Key(70,  25,  10, 0, 						  'oval-med');
	this.high_d 		 		= new Key(70,  10,  10, 0, 						  'oval-small');
	this.thumb_bflat  			= new Key(70,  110, 10, 0, 						  'oval-large');
	this.low_e 		 			= new Key(70,  140, 20, 0, 						  'circle-key');
	this.thumb_fsharp 			= new Key(70,  170, 10, -( 10 * Math.PI ) / 180,  'oval-large');
	this.thumb_aflat  			= new Key(75,  185, 10, -( 10 * Math.PI ) / 180,  'oval-large');
	this.trill_a_to_b 			= new Key(50,  180, 10, 0, 						  'oval-small');
	this.trill_g 	 			= new Key(145, 23,  10, 0, 						  'oval-small');
	this.hole_1					= new Key(130, 15,  8,  0, 						  'circle');
	this.trill_fsharp 			= new Key(145, 47,  10, 0,						  'oval-small');
	this.hole_2					= new Key(130, 37,  8,  0, 						  'circle');
	this.trill_eflat 			= new Key(0,    0,  0,  0,                        'oval-small');
	this.hole_3					= new Key(130, 60,  8,  0, 						  'circle');
	this.low_eflat 				= new Key(0,    0,  0,  0,                        'half-circle');
	this.low_dflat 				= new Key(0,    0,  0,  0,                        'half-circle');
	this.trill_csharp 			= new Key(115, 100, 10, 0,                        'oval-small');
	this.hole_4					= new Key(130, 110, 8,  0, 						  'circle');
	this.hole_5					= new Key(130, 150, 8,  0, 						  'circle');
	this.trill_bflat 			= new Key(143, 163, 10, 0,                        'oval-small');
	this.low_g 					= new Key(141, 177, 10, 0,                        'oval-large');
	this.low_f 					= new Key(0,    0,  0,  0,                        'half-circle');
	this.little_finger_fsharp 	= new Key(0,    0,  0,  0,                        'half-circle');
	this.little_finger_aflat 	= new Key(0,    0,  0,  0,                        'half-circle');

	function draw() {
		ctx.strokeRect(0, 0, canvas.width, canvas.height);
		this.low_bflat.draw();
		this.low_b.draw();
		this.low_c.draw();
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
		this.trill_g.draw();
		this.hole_1.draw();
		this.trill_fsharp.draw();
		this.hole_2.draw();
		this.trill_eflat.draw();
		this.low_eflat.draw();
		this.hole_3.draw();
		this.low_dflat.draw();
		this.trill_csharp.draw();
		this.hole_4.draw();
		this.hole_5.draw();
		this.trill_bflat.draw();
		this.low_g.draw();
		this.low_f.draw();
		this.little_finger_fsharp.draw();
		this.little_finger_aflat.draw();
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
	else if(intersects(fingering_chart.low_c.x, fingering_chart.low_c.y, clickX, clickY, fingering_chart.low_c.r)) {
		location = 'low_c';
	}
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
	}
	else if(intersects(fingering_chart.trill_g.x, fingering_chart.trill_g.y, clickX, clickY, fingering_chart.trill_g.r)) {
		location = 'trill_g';
	}
	else if(intersects(fingering_chart.hole_1.x, fingering_chart.hole_1.y, clickX, clickY, fingering_chart.hole_1.r)) {
		location = 'hole_1';
	}
	else if(intersects(fingering_chart.trill_fsharp.x, fingering_chart.trill_fsharp.y, clickX, clickY, fingering_chart.trill_fsharp.r)) {
		location = 'trill_fsharp';
	}
	else if(intersects(fingering_chart.hole_2.x, fingering_chart.hole_2.y, clickX, clickY, fingering_chart.hole_2.r)) {
		location = 'hole_2';
	}
	else if(intersects(fingering_chart.trill_eflat.x, fingering_chart.trill_eflat.y, clickX, clickY, fingering_chart.trill_eflat.r)) {
		location = 'trill_eflat';
	}
	else if(intersects(fingering_chart.hole_3.x, fingering_chart.hole_3.y, clickX, clickY, fingering_chart.hole_3.r)) {
		location = 'hole_3';
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
	else if(intersects(fingering_chart.hole_4.x, fingering_chart.hole_4.y, clickX, clickY, fingering_chart.hole_4.r)) {
		location = 'hole_4';
	}
	else if(intersects(fingering_chart.hole_5.x, fingering_chart.hole_5.y, clickX, clickY, fingering_chart.hole_5.r)) {
		location = 'hole_5';
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
	};

	// Update Status
	switch (location) {
		case 'low_bflat':
			fingering_chart.low_bflat.status = status_update(fingering_chart.low_bflat.status, fingering_chart.low_bflat.type);
		break;
		case 'low_b':
			fingering_chart.low_b.status = status_update(fingering_chart.low_b.status, fingering_chart.low_b.type);
		break;
		case 'low_c':
			fingering_chart.low_c.status = status_update(fingering_chart.low_c.status, fingering_chart.low_c.type);
		break;
		case 'low_d':
			fingering_chart.low_d.status = status_update(fingering_chart.low_d.status, fingering_chart.low_d.type);
		break;
		case 'whisper':
			fingering_chart.whisper.status = status_update(fingering_chart.whisper.status, fingering_chart.whisper.type);
		break;
		case 'thumb_csharp':
			fingering_chart.thumb_csharp.status = status_update(fingering_chart.thumb_csharp.status, fingering_chart.thumb_csharp.type);
		break;
		case 'high_a':
			fingering_chart.high_a.status = status_update(fingering_chart.high_a.status, fingering_chart.high_a.type);
		break;
		case 'high_c':
			fingering_chart.high_c.status = status_update(fingering_chart.high_c.status, fingering_chart.high_c.type);
		break;
		case 'high_d':
			fingering_chart.high_d.status = status_update(fingering_chart.high_d.status, fingering_chart.high_d.type);
		break;
		case 'thumb_bflat':
			fingering_chart.thumb_bflat.status = status_update(fingering_chart.thumb_bflat.status, fingering_chart.thumb_bflat.type);
		break;
		case 'low_e':
			fingering_chart.low_e.status = status_update(fingering_chart.low_e.status, fingering_chart.low_e.type);
		break;
		case 'thumb_fsharp':
			fingering_chart.thumb_fsharp.status = status_update(fingering_chart.thumb_fsharp.status, fingering_chart.thumb_fsharp.type);
		break;
		case 'thumb_aflat':
			fingering_chart.thumb_aflat.status = status_update(fingering_chart.thumb_aflat.status, fingering_chart.thumb_aflat.type);
		break;
		case 'trill_a_to_b':
			fingering_chart.trill_a_to_b.status = status_update(fingering_chart.trill_a_to_b.status, fingering_chart.trill_a_to_b.type);
		break;
		case 'trill_g':
			fingering_chart.trill_g.status = status_update(fingering_chart.trill_g.status, fingering_chart.trill_g.type);
		break;
		case 'hole_1':
			fingering_chart.hole_1.status = status_update(fingering_chart.hole_1.status, fingering_chart.hole_1.type);
		break;
		case 'trill_fsharp':
			fingering_chart.trill_fsharp.status = status_update(fingering_chart.trill_fsharp.status, fingering_chart.trill_fsharp.type);
		break;
		case 'hole_2':
			fingering_chart.hole_2.status = status_update(fingering_chart.hole_2.status, fingering_chart.hole_2.type);
		break;
		case 'trill_eflat':
			fingering_chart.trill_eflat.status = status_update(fingering_chart.trill_eflat.status, fingering_chart.trill_eflat.type);
		break;
		case 'hole_3':
			fingering_chart.hole_3.status = status_update(fingering_chart.hole_3.status, fingering_chart.hole_3.type);
		break;
		case 'low_eflat':
			fingering_chart.low_eflat.status = status_update(fingering_chart.low_eflat.status, fingering_chart.low_eflat.type);
		break;
		case 'low_dflat':
			fingering_chart.low_dflat.status = status_update(fingering_chart.low_dflat.status, fingering_chart.low_dflat.type);
		break;
		case 'trill_csharp':
			fingering_chart.trill_csharp.status = status_update(fingering_chart.trill_csharp.status, fingering_chart.trill_csharp.type);
		break;
		case 'hole_4':
			fingering_chart.hole_4.status = status_update(fingering_chart.hole_4.status, fingering_chart.hole_4.type);
		break;
		case 'hole_5':
			fingering_chart.hole_5.status = status_update(fingering_chart.hole_5.status, fingering_chart.hole_5.type);
		break;
		case 'trill_bflat':
			fingering_chart.trill_bflat.status = status_update(fingering_chart.trill_bflat.status, fingering_chart.trill_bflat.type);
		break;
		case 'low_g':
			fingering_chart.low_g.status = status_update(fingering_chart.low_g.status, fingering_chart.low_g.type);
		break;
		case 'low_f':
			fingering_chart.low_f.status = status_update(fingering_chart.low_f.status, fingering_chart.low_f.type);
		break;
		case 'little_finger_fsharp':
			fingering_chart.little_finger_fsharp.status = status_update(fingering_chart.little_finger_fsharp.status, fingering_chart.little_finger_fsharp.type);
		break;
		case 'little_finger_aflat':
			fingering_chart.little_finger_aflat.status = status_update(fingering_chart.little_finger_aflat.status, fingering_chart.little_finger_aflat.type);
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
function status_update(status, type) {
	switch (type) {
		case 'circle':
			if(status >= 7) {
				status = 0;
			};
			status += 1;
		break;
		default:
			switch (status) {
				case 1:
					status = 5;
				break;
				case 5:
					status = 6;
				break;
				case 6:
					status = 7;
				break;
				case 7:
					status = 1;
				break;
			};
		break;
	};

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
	   intersects(fingering_chart.low_c.x,        fingering_chart.low_c.y,        x, y, fingering_chart.low_c.r) ||
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
	   intersects(fingering_chart.trill_a_to_b.x, fingering_chart.trill_a_to_b.y, x, y, fingering_chart.trill_a_to_b.r) ||
	   intersects(fingering_chart.trill_g.x,      fingering_chart.trill_g.y,      x, y, fingering_chart.trill_g.r) ||
       intersects(fingering_chart.hole_1.x,       fingering_chart.hole_1.y,       x, y, fingering_chart.hole_1.r) ||
	   intersects(fingering_chart.trill_fsharp.x, fingering_chart.trill_fsharp.y, x, y, fingering_chart.trill_fsharp.r) ||
       intersects(fingering_chart.hole_2.x,       fingering_chart.hole_2.y,       x, y, fingering_chart.hole_2.r) ||
	   intersects(fingering_chart.trill_eflat.x,  fingering_chart.trill_eflat.y,  x, y, fingering_chart.trill_eflat.r) ||
       intersects(fingering_chart.hole_3.x,       fingering_chart.hole_3.y,       x, y, fingering_chart.hole_3.r) ||
	   intersects(fingering_chart.low_eflat.x,    fingering_chart.low_eflat.y,    x, y, fingering_chart.low_eflat.r) ||
	   intersects(fingering_chart.low_dflat.x,    fingering_chart.low_dflat.y,    x, y, fingering_chart.low_dflat.r) ||
	   intersects(fingering_chart.trill_csharp.x, fingering_chart.trill_csharp.y, x, y, fingering_chart.trill_csharp.r) ||
       intersects(fingering_chart.hole_4.x,       fingering_chart.hole_4.y,       x, y, fingering_chart.hole_4.r) ||
       intersects(fingering_chart.hole_5.x,       fingering_chart.hole_5.y,       x, y, fingering_chart.hole_5.r) ||
	   intersects(fingering_chart.trill_bflat.x,  fingering_chart.trill_bflat.y,  x, y, fingering_chart.trill_bflat.r) ||
	   intersects(fingering_chart.low_g.x,    	  fingering_chart.low_g.y,        x, y, fingering_chart.low_g.r) ||
	   intersects(fingering_chart.low_f.x,        fingering_chart.low_f.y,        x, y, fingering_chart.low_f.r) ||
	   intersects(fingering_chart.little_finger_fsharp.x, fingering_chart.little_finger_fsharp.y, x, y, fingering_chart.little_finger_fsharp.r) ||
	   intersects(fingering_chart.little_finger_aflat.x,  fingering_chart.little_finger_aflat.y,  x, y, fingering_chart.little_finger_aflat.r) ||
       intersects(fingering_chart.low_b.x,				  fingering_chart.low_b.y,			      x, y, fingering_chart.low_b.r)) {
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

