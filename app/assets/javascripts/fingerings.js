/* 
 * fingerings.js
 * @author Max Stillwell
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

/* Objects */
function Note(note, tone) {
	/* Variables */
	this.note = note;
	this.tone = tone;
	/* Public Functions */
	this.draw = draw;
	this.update = update;
	
	function draw() {
		ctx.save();
			ctx.translate(100, 215);
			draw_staff();
			draw_note(this.note);
		ctx.restore();
	};
	
	function draw_staff() {
		ctx.beginPath();
			ctx.moveTo(-100, 10);
			ctx.lineTo(100, 10);
			ctx.moveTo(-100, 5);
			ctx.lineTo(100, 5);
			ctx.moveTo(-100, 0);
			ctx.lineTo(100, 0);
			ctx.moveTo(-100, -5);
			ctx.lineTo(100, -5);
			ctx.moveTo(-100, -10);
			ctx.lineTo(100, -10);
		ctx.closePath();
		
		ctx.lineWidth = 0.5;
		ctx.stroke();
	};
	
	function draw_note(note) {
		switch(note) {
			case 'c':
				ctx.scale(1.1, 0.9);
				
				ctx.beginPath();
					ctx.arc(0, -2.5, 3, 0, Math.PI * 2, false);
				ctx.closePath();
				
				ctx.scale(0.9, 1.1);
				ctx.lineWidth = 0.75;
				ctx.stroke();
				
				ctx.font = "12pt Calibri";
				ctx.fillStyle = "black";
				ctx.fillText(note + tone, -90, -15);
			break;
			case 'a':
				ctx.scale(1.1, 0.9);
				
				ctx.beginPath();
					ctx.arc(0, 2.5, 3, 0, Math.PI * 2, false);
				ctx.closePath();
				
				ctx.scale(0.9, 1.1);
				ctx.lineWidth = 0.75;
				ctx.stroke();
				
				ctx.font = "12pt Calibri";
				ctx.fillStyle = "black";
				ctx.fillText(note + tone, -90, -15);
			break;
		};
	};

	function update(x, y) {
		if(y > 215 && y < 220) {
			note = 'c';
		}
		else if(y < 215 && y > 10 + 210) {
			note = 'a';
		};
	};
};

function Key(x, y, r, rotation, type, status) {
	/* Variables */
	this.x = x;
	this.y = y;
	this.r = r;
	this.rotation = rotation;
	if(status == 0) {
		this.status = 7;
	}
	else {
		this.status = status;
	};
	this.type = type;
	/* Public Functions */
	this.draw = draw;
	this.contains = contains;
	this.shift_status = shift_status;
	
	function draw() {
		switch (this.type) {
			case 'circle':
				draw_circle(x, y, r, this.status);
			break;
			case 'circle-key':
				draw_circle(x, y, r, this.status);
			break;
			case 'half-circle':
				draw_half_circle(x, y, r, rotation, false, this.status);
			break;
			case 'half-circle-flat':
				draw_half_circle(x, y, r, rotation, true, this.status);
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
			case 'box-up-left-curve':
				draw_box_up_left_curve(x, y, r, rotation, this.status);
			break;
			case 'box-right-end-curve':
				draw_right_end_curve(x, y, r, rotation, this.status);
			break;
			default:
				alert("Error: Key.draw(" + type + ").");
			break;
		};
	};
	
	function draw_oval(x, y, r, scale_x, scale_y, rotation, status) {
		ctx.save();
			ctx.translate(x, y);
			ctx.rotate(rotation);
			ctx.scale(scale_x, scale_y);
			
			ctx.beginPath();
				ctx.arc(0, 0, r, 0, Math.PI * 2, false);
				switch(status) {
					case 5: // Hatch Pattern (Optional Key)
						ctx.moveTo(-r * Math.cos(1.75 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.75 * Math.PI), -r * Math.sin(0.75 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.65 * Math.PI), -r * Math.sin(1.65 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.85 * Math.PI), -r * Math.sin(0.85 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.55 * Math.PI), -r * Math.sin(1.55 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.95 * Math.PI), -r * Math.sin(0.95 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.85 * Math.PI), -r * Math.sin(1.85 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.65 * Math.PI), -r * Math.sin(0.65 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.95 * Math.PI), -r * Math.sin(1.95 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.55 * Math.PI), -r * Math.sin(0.55 * Math.PI));
					break;
					case 6: // X (Flicked Key)
						ctx.moveTo(-r * Math.cos(1.25 * Math.PI), -r * Math.sin(1.25 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.25 * Math.PI), -r * Math.sin(0.25 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.75 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.75 * Math.PI), -r * Math.sin(0.75 * Math.PI));
					break;	
				};
			ctx.closePath();
			
			ctx.scale(scale_y, scale_x);
			if(status == 1) {
				ctx.fillStyle = "333333";
				ctx.fill();
			}
			ctx.stroke();
		ctx.restore();
	};
	
	function draw_circle(x, y, r, status) {
		ctx.save();
			ctx.translate(x, y);

			ctx.beginPath();
				ctx.arc(0, 0, r, 0, Math.PI * 2, false);
				switch (status) {
					case 5: // Hatch Pattern (Optional Key)
						ctx.moveTo(-r * Math.cos(1.75 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.75 * Math.PI), -r * Math.sin(0.75 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.65 * Math.PI), -r * Math.sin(1.65 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.85 * Math.PI), -r * Math.sin(0.85 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.55 * Math.PI), -r * Math.sin(1.55 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.95 * Math.PI), -r * Math.sin(0.95 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.85 * Math.PI), -r * Math.sin(1.85 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.65 * Math.PI), -r * Math.sin(0.65 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.95 * Math.PI), -r * Math.sin(1.95 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.55 * Math.PI), -r * Math.sin(0.55 * Math.PI));
					break;
					case 6: // X (Flicked Key)
						ctx.moveTo(-r * Math.cos(1.25 * Math.PI), -r * Math.sin(1.25 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.25 * Math.PI), -r * Math.sin(0.25 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.75 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.75 * Math.PI), -r * Math.sin(0.75 * Math.PI));
					break;
				};
			ctx.closePath();
			
			if(status >= 1 && status <= 4) {
				ctx.fillStyle = "333333";
				ctx.fill();	
			}
			ctx.stroke();

			if(status >= 2 && status <= 4) {
				ctx.beginPath();
					switch(status) {
						case 2: // x/y Pressed Key
							ctx.arc(0, 0, r, 1.25 * Math.PI, 1.75 * Math.PI, false);
							ctx.lineTo(0,0);
							ctx.lineTo(-r * Math.cos(0.25 * Math.PI), -r * Math.sin(0.75 * Math.PI));
						break;
						case 3: // 1/2 Pressed Key
							ctx.arc(0, 0, r, 0, Math.PI, true);
							ctx.moveTo(-r, 0);
							ctx.lineTo(r, 0);
						break;
						case 4: // y/x Pressed Key
							ctx.arc(0, 0, r, 0.25 * Math.PI, 0.75 * Math.PI, false);
							ctx.lineTo(0,0);
							ctx.lineTo(-r * Math.cos(1.25 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						break;
					};
				ctx.closePath();
				
				ctx.fillStyle = "white";
				ctx.fill();
				ctx.stroke();
			};
		ctx.restore();
	};
	
	function draw_half_circle(x, y, r, rotation, flat, status) {
		ctx.save();
			ctx.translate(x, y);
			ctx.rotate(rotation);
			if(flat) { ctx.scale(1.5, 0.5); };
			
			ctx.beginPath();
				ctx.arc(0, 0, r, 0, Math.PI, false);
				ctx.moveTo(-r, 0);
				ctx.lineTo(r, 0);
				switch(status) {
					case 5: // Hatch Pattern (Optional Key)
						ctx.moveTo(-r * Math.cos(1.75 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						ctx.lineTo(r - 5, r * Math.sin(Math.PI));
						ctx.moveTo(-r * Math.cos(1.65 * Math.PI), -r * Math.sin(1.65 * Math.PI));
						ctx.lineTo(r, r * Math.sin(Math.PI));
						ctx.moveTo(-r * Math.cos(1.85 * Math.PI), -r * Math.sin(1.85 * Math.PI));
						ctx.lineTo(r - 10, r * Math.sin(Math.PI));
						ctx.moveTo(-r * Math.cos(1.55 * Math.PI), -r * Math.sin(1.55 * Math.PI));
						ctx.lineTo(r, r * Math.sin(0.1 * Math.PI));
					break;
					case 6: // X (Flicked Key)
						ctx.moveTo(-r * Math.cos(1.25 * Math.PI), -r * Math.sin(1.25 * Math.PI));
						ctx.lineTo(-r, -r * Math.sin(Math.PI));
						ctx.moveTo(-r * Math.cos(1.75 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						ctx.lineTo(r, r * Math.sin(Math.PI));
					break;
				};
			ctx.closePath();
			
			if(flat) { ctx.scale(0.5, 1.5); };
			
			if(status == 1) {
				ctx.fillStyle = "333333";
				ctx.fill();	
			}
			ctx.stroke();
		ctx.restore();
	};

	function draw_box_up_left_curve(x, y, r, rotation, status) {
		ctx.save();
			ctx.translate(x, y);
			ctx.rotate(rotation);
			
			ctx.beginPath();
				ctx.arc(0, 0, r, -( 180 * Math.PI ) / 180, -( 100 * Math.PI ) / 180, false);
				ctx.lineTo(10, -8);
				ctx.lineTo(6, 4);
				ctx.lineTo(-10, 4);
				ctx.lineTo(-10, 0);
				switch(status){
					case 5: // Hatch Pattern (Optional Key)
						ctx.moveTo(10, -8);
						ctx.lineTo(-10, 4);
						ctx.moveTo(6, -9);
						ctx.lineTo(-10, 0);
						ctx.moveTo(1, -9);
						ctx.lineTo(-9, -4);
						ctx.moveTo(8.5, -3.5);
						ctx.lineTo(-5, 4);
					break;
					case 6: // X (Flicked Key)
						ctx.moveTo(10, -8);
						ctx.lineTo(-10, 4);
						ctx.moveTo(6, 4);
						ctx.lineTo(-7, -8);
					break;
				};
			ctx.closePath();
			
			if(status == 1) {
				ctx.fillStyle = "333333";
				ctx.fill();	
			}
			ctx.stroke();
		ctx.restore();
	};
	
	function draw_right_end_curve(x, y, r, rotation, status) {
		ctx.save();
			ctx.translate(x, y);
			ctx.rotate(rotation);
			
			ctx.beginPath();
				ctx.moveTo(-10, 5);
				ctx.lineTo(-7, -7);
				ctx.lineTo(6, -5);
				ctx.arc(4.5, 0, r, -( 90 * Math.PI ) / 180, ( 90 * Math.PI ) / 180, false);
				ctx.lineTo(-10, 5);
				switch(status){
					case 5: // Hatch Pattern (Optional Key)
						ctx.moveTo(-10, 5);
						ctx.lineTo(9, -3.5);
						ctx.moveTo(-3, 5);
						ctx.lineTo(9, 0);
						ctx.moveTo(-9, 0.5);
						ctx.lineTo(6, -5);
						ctx.moveTo(-8, -3);
						ctx.lineTo(0, -5.5);
					break;
					case 6: // X (Flicked Key)
						ctx.moveTo(-7, -7);
						ctx.lineTo(9, 3.5);
						ctx.moveTo(-10, 5);
						ctx.lineTo(9, -3.5);
					break;
				};
			ctx.closePath();
			
			if(status == 1) {
				ctx.fillStyle = "333333";
				ctx.fill();	
			}
			ctx.stroke();
		ctx.restore();
	};

	function contains(x, y) {
		if(this.type == 'oval-small' || this.type == 'oval-med' || this.type == 'oval-large') { //fix me for ellipse math!!!!
			var dx = (this.x * scale_X) - x;
			var dy = (this.y * scale_Y) - y;

			var r2 = this.r * Math.sqrt(Math.pow(scale_X, 2) + Math.pow(scale_Y, 2)) * 0.7;
			
			if(dx * dx + dy * dy <= r2 * r2) { return true; };
		}
		else if (this.type == 'half-circle' || this.type == 'half-circle-flat') { // fix me for semi circle math!!!
			var dx = (this.x * scale_X) - x;
			var dy = (this.y * scale_Y) - y;

			var r2 = this.r * Math.sqrt(Math.pow(scale_X, 2) + Math.pow(scale_Y, 2)) * 0.7;
			
			if(dx * dx + dy * dy <= r2 * r2) { return true; };
		}
		else {
			var dx = (this.x * scale_X) - x;
			var dy = (this.y * scale_Y) - y;

			var r2 = this.r * Math.sqrt(Math.pow(scale_X, 2) + Math.pow(scale_Y, 2)) * 0.7;
			
			if(dx * dx + dy * dy <= r2 * r2) { return true; };
		};
		
		return false;
	};

	function shift_status() {
		switch (this.type) {
			case 'circle':
				if(this.status >= 7) {
					this.status = 0;
				};
				this.status += 1;
			break;
			default:
				switch (this.status) {
					case 1:
						this.status = 5;
					break;
					case 5:
						this.status = 6;
					break;
					case 6:
						this.status = 7;
					break;
					case 7:
						this.status = 1;
					break;
				};
			break;
		};
	};
};

function Fingering_Chart(type, keys_string) {
	/* Public Functions */
    this.draw = draw;
    /* Keys */
	this.low_bflat 	 			= new Key(40,  20,  10, -( 115 * Math.PI ) / 180, 'oval-large',          keys_string[0]);
	this.low_b 		 			= new Key(30,  30,  10, -( 115 * Math.PI ) / 180, 'oval-large',          keys_string[1]);
	this.low_c 		 			= new Key(23,  37,  11, -( 300 * Math.PI ) / 180, 'half-circle',         keys_string[2]);  
	this.low_d 		 			= new Key(20,  70,  10, Math.PI / 2, 			  'oval-large',          keys_string[3]);
	this.whisper 	 			= new Key(70,  70,  10, 0, 						  'oval-small',          keys_string[4]);
	this.thumb_csharp 			= new Key(70,  55,  10, 0, 						  'oval-med',            keys_string[5]);
	this.high_a 		 		= new Key(70,  40,  10, 0, 						  'oval-large',          keys_string[6]);
	this.high_c 		 		= new Key(70,  25,  10, 0, 						  'oval-med',            keys_string[7]);
	this.high_d 		 		= new Key(70,  10,  10, 0, 						  'oval-small',          keys_string[8]);
	this.thumb_bflat  			= new Key(70,  110, 10, 0, 						  'oval-large',          keys_string[9]);
	this.low_e 		 			= new Key(70,  140, 20, 0, 						  'circle-key',          keys_string[10]);
	this.thumb_fsharp 			= new Key(70,  170, 10, -( 10 * Math.PI ) / 180,  'oval-large',          keys_string[11]);
	this.thumb_aflat  			= new Key(75,  185, 10, -( 10 * Math.PI ) / 180,  'oval-large',          keys_string[12]);
	this.trill_a_to_b 			= new Key(50,  180, 10, 0, 						  'oval-small',          keys_string[13]);
	this.trill_g 	 			= new Key(145, 23,  10, 0, 						  'oval-small',          keys_string[14]);
	this.hole_1					= new Key(130, 15,  8,  0, 						  'circle',              keys_string[15]);
	this.trill_fsharp 			= new Key(145, 47,  10, 0,						  'oval-small',          keys_string[16]);
	this.hole_2					= new Key(130, 37,  8,  0, 						  'circle',              keys_string[17]);
	this.trill_eflat 			= new Key(0,    0,  0,  0,                        'oval-small',          keys_string[18]);
	this.hole_3					= new Key(130, 60,  8,  0, 						  'circle',              keys_string[19]);
	this.low_eflat 				= new Key(150, 73,  10, -( 190 * Math.PI ) / 180, 'half-circle',         keys_string[20]);
	this.low_dflat 				= new Key(151, 76,  10, -( 10 * Math.PI ) / 180,  'half-circle',         keys_string[21]);
	this.trill_csharp 			= new Key(115, 100, 10, 0,                        'oval-small',          keys_string[22]);
	this.hole_4					= new Key(130, 110, 8,  0, 						  'circle',              keys_string[23]);
	this.hole_5					= new Key(130, 135, 8,  0, 						  'circle',              keys_string[24]);
	this.trill_bflat 			= new Key(143, 148, 10, 0,                        'oval-small',          keys_string[25]);
	this.low_g 					= new Key(141, 162, 10, 0,                        'oval-large',          keys_string[26]);
	this.low_f 					= new Key(130, 180, 10, 0,                        'box-up-left-curve',   keys_string[27]);
	this.little_finger_fsharp 	= new Key(150, 180,  5, 0,                        'box-right-end-curve', keys_string[28]);
	this.little_finger_aflat 	= new Key(140, 187, 15, 0,                        'half-circle-flat',    keys_string[29]);
	/* Note */
	this.note = new Note('c', "♮");
	
	function draw() {
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
		this.note.draw();
	};
};

/* Events */
function onClick(e) {
	// Variables
	var clickX = e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft);
	var clickY = e.pageY - (canvas.offsetTop  + canvas.offsetParent.offsetTop);
	var location = cursorOverKey(clickX, clickY);
	
	if(location == "bottom") {
		fingering_chart.note.update(clickX, clickY);
	}
	else {
		switch (location) {
			case 'low_bflat': 
				fingering_chart.low_bflat.shift_status(); 
			break;
			case 'low_b':
				fingering_chart.low_b.shift_status();
			break;
			case 'low_c':
				fingering_chart.low_c.shift_status();
			break;
			case 'low_d':
				fingering_chart.low_d.shift_status();
			break;
			case 'whisper':
				fingering_chart.whisper.shift_status();
			break;
			case 'thumb_csharp':
				fingering_chart.thumb_csharp.shift_status();
			break;
			case 'high_a':
				fingering_chart.high_a.shift_status();
			break;
			case 'high_c':
				fingering_chart.high_c.shift_status();
			break;
			case 'high_d':
				fingering_chart.high_d.shift_status();
			break;
			case 'thumb_bflat':
				fingering_chart.thumb_bflat.shift_status();
			break;
			case 'low_e':
				fingering_chart.low_e.shift_status();
			break;
			case 'thumb_fsharp':
				fingering_chart.thumb_fsharp.shift_status();
			break;
			case 'thumb_aflat':
				fingering_chart.thumb_aflat.shift_status();
			break;
			case 'trill_a_to_b':
				fingering_chart.trill_a_to_b.shift_status();
			break;
			case 'trill_g':
				fingering_chart.trill_g.shift_status();
			break;
			case 'hole_1':
				fingering_chart.hole_1.shift_status();
			break;
			case 'trill_fsharp':
				fingering_chart.trill_fsharp.shift_status();
			break;
			case 'hole_2':
				fingering_chart.hole_2.shift_status();
			break;
			case 'trill_eflat':
				fingering_chart.trill_eflat.shift_status();
			break;
			case 'hole_3':
				fingering_chart.hole_3.shift_status();
			break;
			case 'low_eflat':
				fingering_chart.low_eflat.shift_status();
			break;
			case 'low_dflat':
				fingering_chart.low_dflat.shift_status();
			break;
			case 'trill_csharp':
				fingering_chart.trill_csharp.shift_status();
			break;
			case 'hole_4':
				fingering_chart.hole_4.shift_status();
			break;
			case 'hole_5':
				fingering_chart.hole_5.shift_status();
			break;
			case 'trill_bflat':
				fingering_chart.trill_bflat.shift_status();
			break;
			case 'low_g':
				fingering_chart.low_g.shift_status();
			break;
			case 'low_f':
				fingering_chart.low_f.shift_status();
			break;
			case 'little_finger_fsharp':
				fingering_chart.little_finger_fsharp.shift_status();
			break;
			case 'little_finger_aflat':
				fingering_chart.little_finger_aflat.shift_status();
			break;
		};
	};
};

function MouseMoved(e) {
	//Variables
	var mouseX = (e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft));
	var mouseY = (e.pageY - (canvas.offsetTop  + canvas.offsetParent.offsetTop));

	// Is Mouse Over a Key?
	if (cursorOverKey(mouseX, mouseY) != 'none') { document.body.style.cursor = 'pointer'; }
	else { document.body.style.cursor = 'default'; };
};

/* Helpers */
function cursorOverKey(x, y) {
	if(fingering_chart.low_bflat.contains(x, y))                 { return 'low_bflat'; }
	else if(fingering_chart.low_b.contains(x, y))                { return 'low_b'; }
	else if(fingering_chart.low_c.contains(x, y))                { return 'low_c'; }
	else if(fingering_chart.low_d.contains(x, y))                { return 'low_d'; }
	else if(fingering_chart.whisper.contains(x, y))              { return 'whisper'; }
	else if(fingering_chart.thumb_csharp.contains(x, y))         { return 'thumb_csharp'; }
	else if(fingering_chart.high_a.contains(x, y))               { return 'high_a'; }
	else if(fingering_chart.high_c.contains(x, y))               { return 'high_c'; }
	else if(fingering_chart.high_d.contains(x, y))               { return 'high_d'; }
	else if(fingering_chart.thumb_bflat.contains(x, y))          { return 'thumb_bflat'; }
	else if(fingering_chart.low_e.contains(x, y))                { return 'low_e'; }
	else if(fingering_chart.thumb_fsharp.contains(x, y))         { return 'thumb_fsharp'; }
	else if(fingering_chart.thumb_aflat.contains(x, y))          { return 'thumb_aflat'; }
	else if(fingering_chart.trill_a_to_b.contains(x, y))         { return 'trill_a_to_b'; }
	else if(fingering_chart.trill_g.contains(x, y))              { return 'trill_g'; }
	else if(fingering_chart.hole_1.contains(x, y))               { return 'hole_1'; }
	else if(fingering_chart.trill_fsharp.contains(x, y))         { return 'trill_fsharp'; }
	else if(fingering_chart.hole_2.contains(x, y))               { return 'hole_2'; }
	else if(fingering_chart.trill_eflat.contains(x, y))          { return 'trill_eflat'; }
	else if(fingering_chart.hole_3.contains(x, y))               { return 'hole_3'; }
	else if(fingering_chart.low_eflat.contains(x, y))            { return 'low_eflat'; }
	else if(fingering_chart.low_dflat.contains(x, y))            { return 'low_dflat'; }
	else if(fingering_chart.trill_csharp.contains(x, y))         { return 'trill_csharp'; }
	else if(fingering_chart.hole_4.contains(x, y))               { return 'hole_4'; }
	else if(fingering_chart.hole_5.contains(x, y))               { return 'hole_5'; }
	else if(fingering_chart.trill_bflat.contains(x, y))          { return 'trill_bflat'; }
	else if(fingering_chart.low_g.contains(x, y))                { return 'low_g'; }
	else if(fingering_chart.low_f.contains(x, y))                { return 'low_f'; }
	else if(fingering_chart.little_finger_fsharp.contains(x, y)) { return 'little_finger_fsharp'; }
	else if(fingering_chart.little_finger_aflat.contains(x, y))  { return 'little_finger_aflat'; }
	//else if(y > 500 && y < 600) { return 'bottom'; };

	return 'none';
}

function keysToString() {
	return (String(fingering_chart.low_bflat.status) + String(fingering_chart.low_b.status) 			   + String(fingering_chart.low_c.status) +
		String(fingering_chart.low_d.status) 	     + String(fingering_chart.whisper.status) 			   + String(fingering_chart.thumb_csharp.status) +
		String(fingering_chart.high_a.status) 	     + String(fingering_chart.high_c.status) 			   + String(fingering_chart.high_d.status) +
		String(fingering_chart.thumb_bflat.status)   + String(fingering_chart.low_e.status) 			   + String(fingering_chart.thumb_fsharp.status) +
		String(fingering_chart.thumb_aflat.status)   + String(fingering_chart.trill_a_to_b.status) 		   + String(fingering_chart.trill_g.status) +
		String(fingering_chart.hole_1.status) 	     + String(fingering_chart.trill_fsharp.status) 		   + String(fingering_chart.hole_2.status) +
		String(fingering_chart.trill_eflat.status)   + String(fingering_chart.low_eflat.status) 	       + String(fingering_chart.hole_3.status) +
		String(fingering_chart.low_dflat.status)     + String(fingering_chart.trill_csharp.status) 		   + String(fingering_chart.hole_4.status) +
		String(fingering_chart.hole_5.status)        + String(fingering_chart.trill_bflat.status) 		   + String(fingering_chart.low_g.status) +
		String(fingering_chart.low_f.status) 	     + String(fingering_chart.little_finger_fsharp.status) + String(fingering_chart.little_finger_aflat.status));
};

/* Draw */
function clear() {
	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, canvas_W, canvas_H);
};

function draw() {
	ctx.save();
		clear();
		ctx.scale(scale_X, scale_Y);
		fingering_chart.draw();
	ctx.restore();
};

/* Init */
$(document).ready(function() {
	var type = 'none';
	
	if(canvas = document.getElementById('new_fingering')) { type = 'new'; }
	else if(canvas = document.getElementById('edit_fingering')) { type = 'edit'; }
	else if(canvas = document.getElementById('show_fingering')) { type = 'show'; }
	else { return false; };
	
	canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
	
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');
		
		if(typeof fingering_id != 'undefined') { var keys_string = fingering }
		else { var keys_string = '000000000000000000000000000000'; };

		fingering_chart = new Fingering_Chart(type, keys_string);

		canvas_W = canvas.width;
		canvas_H = canvas.height;

		scale_X = canvas_W / 200;        // Base canvas size is 200
		scale_Y = (canvas_H - 100)/ 200; // by 200, don't go any smaller. Extra 100 is for note.

		// Init Events
		if(type == 'edit' || (type == 'new')) {
			canvas.onclick = onClick;
			canvas.onmousemove = MouseMoved;
		};
 
		// Draw
		return setInterval(draw, 100);
	}
	else {
		alert("Error: Could not get canvas context!");
	};
	
	$("#new_fingering").submitWithAjax();
});
