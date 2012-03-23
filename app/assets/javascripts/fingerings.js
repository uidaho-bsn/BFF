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
 // Mouse
  var mouse_X;
  var mouse_Y;

/* Objects */
function Note(note, tone) {
	/* Public Variables */
	this.note = note;
	this.tone = tone;
	/* Public Functions */
	this.draw = draw;
	this.update = update;
	this.contains = contains;
	/* Private Variables */
	var e2 = false; var f2 = false; var g2 = false;
	var a2 = false; var b2 = false; var c3 = false;
	var d3 = false; var e3 = false; var f3 = false;
	var g3 = false; var a3 = false; var b3 = false;
	var text = false;
	
	/* Begin Draw Functions */
	function draw() {
		ctx.save();
			draw_staff();
			draw_cleff();	
			draw_e2();
			draw_f2();
			draw_g2();
			draw_a2();
			draw_b2();
			draw_c3();
			draw_d3();
			draw_e3();
			draw_f3();
			draw_g3();
			draw_a3();
			draw_b3();
			draw_text();
		ctx.restore();
	};
	
	function draw_staff() {
		ctx.beginPath();
			ctx.moveTo(0, 225);
			ctx.lineTo(200, 225);
			ctx.moveTo(0, 220);
			ctx.lineTo(200, 220);
			ctx.moveTo(0, 215);
			ctx.lineTo(200, 215);
			ctx.moveTo(0, 210);
			ctx.lineTo(200, 210);
			ctx.moveTo(0, 205);
			ctx.lineTo(200, 205);
		ctx.closePath();
		
		ctx.lineWidth = 0.5;
		ctx.stroke();
	};
	
	function draw_cleff() {
		ctx.font = "18pt Calibri";
		ctx.fillStyle = "black";
		ctx.fillText("𝄢", 1, 223);
	};

	function draw_text () {
		if(note != '') {
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 1.5;
			ctx.shadowOffsetY = 1.5;
			if(text) {
				ctx.fillStyle = "rgb(255, 0, 0)";
			};
			
			ctx.font = "9pt Calibri";
			ctx.fillText(note[0] + " " + tone, 10, 200);
			
			ctx.font = "4pt Calibri";
			ctx.fillText(note[1], 15, 195);
		};
	};

	function draw_e2() {
		ctx.save();
			ctx.translate(50, 230);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;
			
			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();
			
			if(note == "e2") { ctx.fill(); }
			else if(e2) {
				ctx.fillStyle = "red";
				ctx.fill();
			};
		ctx.restore();
		ctx.save();
			ctx.translate(50, 230);
			
			ctx.beginPath();
				ctx.moveTo(-7, 0);
				ctx.lineTo(7, 0);
			ctx.closePath();
			
			if(note == "e2") { ctx.stroke(); }
			else if(e2) {
				ctx.strokeStyle = "red";
				ctx.stroke();
			};
		ctx.restore();
	};
	
	function draw_f2() {
		ctx.save();
			ctx.translate(60, 227);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;
			
			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();
			
			if(note == "f2") { ctx.fill(); }
			else if(f2) {	
				ctx.fillStyle = "red";
				ctx.fill();
			};
		ctx.restore();
	};
	
	function draw_g2() {
		ctx.save();
			ctx.translate(70, 225);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);

			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;

			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();

			if(note == "g2") { ctx.fill(); }
			else if(g2) {
				ctx.fillStyle = "red";
				ctx.fill();			
			};
		ctx.restore();
	};
	
	function draw_a2() {
		ctx.save();
			ctx.translate(80, 222);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;

			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();

			if(note == "a2") { ctx.fill(); }
			else if(a2) {
				ctx.fillStyle = "red";
				ctx.fill();		
			};
		ctx.restore();
	};

	function draw_b2() {
		ctx.save();
			ctx.translate(90, 220);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;

			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();

			if(note == "b2") { ctx.fill(); }
			else if(b2) {
				ctx.fillStyle = "red";
				ctx.fill();	
			};
		ctx.restore();
	};
	
	function draw_c3() {
		ctx.save();
			ctx.translate(100, 217);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;

			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();

			if(note == "c3") { ctx.fill(); }
			else if(c3) {
				ctx.fillStyle = "red";
				ctx.fill();
			};
		ctx.restore();
	};
	
	function draw_d3() {
		ctx.save();
			ctx.translate(110, 215);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;

			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();

			if(note == "d3") { ctx.fill(); }
			else if(d3) {
				ctx.fillStyle = "red";
				ctx.fill();
			};
		ctx.restore();
	};
	
	function draw_e3() {
		ctx.save();
			ctx.translate(120, 212);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;

			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();

			if(note == "e3") { ctx.fill(); }
			else if(e3) {
				ctx.fillStyle = "red";
				ctx.fill();
			};
		ctx.restore();
	};
	
	function draw_f3() {
		ctx.save();
			ctx.translate(130, 210);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;

			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();

			if(note == "f3") { ctx.fill(); }
			else if(f3) {
				ctx.fillStyle = "red";
				ctx.fill();
			};
		ctx.restore();
	};
	
	function draw_g3() {
		ctx.save();
			ctx.translate(140, 207);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;

			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();

			if(note == "g3") { ctx.fill(); }
			else if(g3) {
				ctx.fillStyle = "red";
				ctx.fill();
			};
		ctx.restore();
	};
	
	function draw_a3() {
		ctx.save();
			ctx.translate(150, 205);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;

			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();

			if(note == "a3") { ctx.fill(); }
			else if(a3) {
				ctx.fillStyle = "red";
				ctx.fill();	
			};
		ctx.restore();
	};
	
	function draw_b3() {
		ctx.save();
			ctx.translate(160, 202);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;

			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();

			if(note == "b3") { ctx.fill(); }
			else if(b3) {
				ctx.fillStyle = "red";
				ctx.fill();
			};
		ctx.restore();
	};
	/* End Draw Functions */
	
	/* Begin Update Functions */
	function update() {
		if(e2)      { note = "e2"; }
		else if(f2) { note = "f2"; }
		else if(g2) { note = "g2"; }
		else if(a2) { note = "a2"; }
		else if(b2) { note = "b2"; }
		else if(c3) { note = "c3"; }
		else if(d3) { note = "d3"; }
		else if(e3) { note = "e3"; }
		else if(f3) { note = "f3"; }
		else if(g3) { note = "g3"; }
		else if(a3) { note = "a3"; }
		else if(b3) { note = "b3"; }
		else if(text) {
			switch(tone) {
				case '♯': //Sharp
					tone = '♭'; //Flat
				break;
				case '♭': //Flat
					tone = '♮'; //Natural
				break;
				case '♮': //Natural
					tone = '♯'; //Sharp
				break;
			};
		};
	};

	function contains() {
		e2 = false; f2 = false; g2 = false;
		a2 = false; b2 = false; c3 = false;
		d3 = false; e3 = false; f3 = false; 
		g3 = false; a3 = false; b3 = false;
		text = false;
		
		if(mouse_Y < (232.5 * scale_Y)      && mouse_Y > (227.5 * scale_Y)) { return e2 = true; }
		else if(mouse_Y < (230 * scale_Y)   && mouse_Y > (225 * scale_Y))   { return f2 = true; }
		else if(mouse_Y < (227.5 * scale_Y) && mouse_Y > (222.5 * scale_Y)) { return g2 = true; }
		else if(mouse_Y < (225 * scale_Y)   && mouse_Y > (220 * scale_Y))   { return a2 = true; }
		else if(mouse_Y < (222.5 * scale_Y) && mouse_Y > (217.5 * scale_Y)) { return b2 = true; }
		else if(mouse_Y < (220 * scale_Y)   && mouse_Y > (215 * scale_Y))   { return c3 = true; }
		else if(mouse_Y < (217.5 * scale_Y) && mouse_Y > (212.5 * scale_Y)) { return d3 = true; }
		else if(mouse_Y < (215 * scale_Y)   && mouse_Y > (210 * scale_Y))   { return e3 = true; }
		else if(mouse_Y < (212.5 * scale_Y) && mouse_Y > (207.5 * scale_Y)) { return f3 = true; }
		else if(mouse_Y < (210 * scale_Y)   && mouse_Y > (205 * scale_Y))   { return g3 = true; }
		else if(mouse_Y < (207.5 * scale_Y) && mouse_Y > (202.5 * scale_Y)) { return a3 = true; }
		else if(mouse_Y < (205 * scale_Y)   && mouse_Y > (200 * scale_Y))   { return b3 = true; }
		else if((mouse_X > (20 * scale_X) && mouse_X < (30 * scale_X)) && (mouse_Y > (190 * scale_Y) && mouse_Y < (215 * scale_Y))) { return text = true; };
	};
	/* End Update Functions */
};

function Key(x, y, r, rotation, type, status) {
	/* Public Variables */
	this.x = x;
	this.y = y;
	this.r = r;
	this.rotation = rotation;
	if(status == 0) { this.status = 7; }
	else { this.status = status; };
	this.type = type;
	/* Private Variables */
	var highlight = false;
	/* Public Functions */
	this.draw = draw;
	this.contains = contains;
	this.update = update;

	/* Begin Draw Functions */
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
			if(highlight) { ctx.strokeStyle = "red"; };
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
			if(highlight) { ctx.strokeStyle = "red"; };
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
			if(highlight) { ctx.strokeStyle = "red"; };
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
			if(highlight) { ctx.strokeStyle = "red"; };
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
			if(highlight) { ctx.strokeStyle = "red"; };
			ctx.stroke();
		ctx.restore();
	};
	/* End Draw Functions */
	
	/* Begin Update Functions */
	function update() {
		switch (this.type) {
			case 'circle':
				if(this.status >= 7) { this.status = 0; };
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

	function contains() {
		highlight = false;
		
		if(this.type == 'oval-small' || this.type == 'oval-med' || this.type == 'oval-large') { //fix me for ellipse math!!!!
			var dx = (this.x * scale_X) - mouse_X;
			var dy = (this.y * scale_Y) - mouse_Y;

			var r2 = this.r * Math.sqrt(Math.pow(scale_X, 2) + Math.pow(scale_Y, 2)) * 0.7;
			
			if(dx * dx + dy * dy <= r2 * r2) {
				highlight = true;
				return true; 
			};
		}
		else if (this.type == 'half-circle' || this.type == 'half-circle-flat') { // fix me for semi circle math!!!
			var dx = (this.x * scale_X) - mouse_X;
			var dy = (this.y * scale_Y) - mouse_Y;

			var r2 = this.r * Math.sqrt(Math.pow(scale_X, 2) + Math.pow(scale_Y, 2)) * 0.7;
			
			if(dx * dx + dy * dy <= r2 * r2) {
				highlight = true;
				return true; 
			};
		}
		else {
			var dx = (this.x * scale_X) - mouse_X;
			var dy = (this.y * scale_Y) - mouse_Y;

			var r2 = this.r * Math.sqrt(Math.pow(scale_X, 2) + Math.pow(scale_Y, 2)) * 0.7;
			
			if(dx * dx + dy * dy <= r2 * r2) {
				highlight = true;
				return true; 
			};
		};
		
		return false;
	};
	/* End Update Functions */
};

function Fingering_Chart(type, keys_string, note, tone, help) {
	/* Public Functions */
    this.draw = draw;
    this.contains = contains;
    this.update = update;
    /* Public Variables */
    // Keys
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
	// Note
	this.note = new Note(note, tone);
	/* Private Variables */
	var text = false;
	var debug = false;
	
	/* Begin Draw Functions */
	function draw() {
		// Draw Keys
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
		// Draw Note & Staff
		this.note.draw();
		// Draw Debug Info
		if(debug) { draw_debug(); };
		// Draw Help '?'
		if(help) {
			ctx.fillStyle = "black";
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 1.5;
			ctx.shadowOffsetY = 1.5;
			if(text) {
				ctx.fillStyle = "rgb(255, 0, 0)";
			};
			
			ctx.font = "5pt Calibri";
			ctx.fillText("?", 190, 5);
		};
	};
	
	function draw_debug() {
		ctx.beginPath();
			ctx.font = "6pt Calibri";
			ctx.fillStyle = "black";
			ctx.fillText("(" + mouse_X + "," + mouse_Y + ")", 165, 235);
		ctx.closePath();
	};
	/* End Draw Functions */
	
	/* Begin Update Functions */
	function update() {
		if(text) { debug = !debug; };
	};

	function contains() {
		text = false;
		
		if((mouse_X > (180 * scale_X) && mouse_X < (200 * scale_X)) && (mouse_Y > (0 * scale_Y) && mouse_Y < (10 * scale_Y))) { return text = true; };
	};
	/* End Update Functions */
};

/* Events */
function onClick(e) {
	// Variables
	var click_X = e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft);
	var click_Y = e.pageY - (canvas.offsetTop  + canvas.offsetParent.offsetTop);
	var location = cursorOverClickable(click_X, click_Y);
	
	if(location == "bottom")    { fingering_chart.note.update(); }
	else if(location == "help") { fingering_chart.update(); }
	else {
		switch (location) {
			case 'low_bflat': 
				fingering_chart.low_bflat.update(); 
			break;
			case 'low_b':
				fingering_chart.low_b.update();
			break;
			case 'low_c':
				fingering_chart.low_c.update();
			break;
			case 'low_d':
				fingering_chart.low_d.update();
			break;
			case 'whisper':
				fingering_chart.whisper.update();
			break;
			case 'thumb_csharp':
				fingering_chart.thumb_csharp.update();
			break;
			case 'high_a':
				fingering_chart.high_a.update();
			break;
			case 'high_c':
				fingering_chart.high_c.update();
			break;
			case 'high_d':
				fingering_chart.high_d.update();
			break;
			case 'thumb_bflat':
				fingering_chart.thumb_bflat.update();
			break;
			case 'low_e':
				fingering_chart.low_e.update();
			break;
			case 'thumb_fsharp':
				fingering_chart.thumb_fsharp.update();
			break;
			case 'thumb_aflat':
				fingering_chart.thumb_aflat.update();
			break;
			case 'trill_a_to_b':
				fingering_chart.trill_a_to_b.update();
			break;
			case 'trill_g':
				fingering_chart.trill_g.update();
			break;
			case 'hole_1':
				fingering_chart.hole_1.update();
			break;
			case 'trill_fsharp':
				fingering_chart.trill_fsharp.update();
			break;
			case 'hole_2':
				fingering_chart.hole_2.update();
			break;
			case 'trill_eflat':
				fingering_chart.trill_eflat.update();
			break;
			case 'hole_3':
				fingering_chart.hole_3.update();
			break;
			case 'low_eflat':
				fingering_chart.low_eflat.update();
			break;
			case 'low_dflat':
				fingering_chart.low_dflat.update();
			break;
			case 'trill_csharp':
				fingering_chart.trill_csharp.update();
			break;
			case 'hole_4':
				fingering_chart.hole_4.update();
			break;
			case 'hole_5':
				fingering_chart.hole_5.update();
			break;
			case 'trill_bflat':
				fingering_chart.trill_bflat.update();
			break;
			case 'low_g':
				fingering_chart.low_g.update();
			break;
			case 'low_f':
				fingering_chart.low_f.update();
			break;
			case 'little_finger_fsharp':
				fingering_chart.little_finger_fsharp.update();
			break;
			case 'little_finger_aflat':
				fingering_chart.little_finger_aflat.update();
			break;
		};
	};
};

function MouseMoved(e) {
	mouse_X = (e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft));
	mouse_Y = (e.pageY - (canvas.offsetTop  + canvas.offsetParent.offsetTop));

	// Is Mouse Over a Clickable Object?
	if (cursorOverClickable() != 'none') { document.body.style.cursor = 'pointer'; }
	else 								 { document.body.style.cursor = 'default'; };
};

/* Helpers */
function cursorOverClickable() {
	if(fingering_chart.low_bflat.contains())                 { return 'low_bflat'; }
	else if(fingering_chart.low_b.contains())                { return 'low_b'; }
	else if(fingering_chart.low_c.contains())                { return 'low_c'; }
	else if(fingering_chart.low_d.contains())                { return 'low_d'; }
	else if(fingering_chart.whisper.contains())              { return 'whisper'; }
	else if(fingering_chart.thumb_csharp.contains())         { return 'thumb_csharp'; }
	else if(fingering_chart.high_a.contains())               { return 'high_a'; }
	else if(fingering_chart.high_c.contains())               { return 'high_c'; }
	else if(fingering_chart.high_d.contains())               { return 'high_d'; }
	else if(fingering_chart.thumb_bflat.contains())          { return 'thumb_bflat'; }
	else if(fingering_chart.low_e.contains())                { return 'low_e'; }
	else if(fingering_chart.thumb_fsharp.contains())         { return 'thumb_fsharp'; }
	else if(fingering_chart.thumb_aflat.contains())          { return 'thumb_aflat'; }
	else if(fingering_chart.trill_a_to_b.contains())         { return 'trill_a_to_b'; }
	else if(fingering_chart.trill_g.contains())              { return 'trill_g'; }
	else if(fingering_chart.hole_1.contains())               { return 'hole_1'; }
	else if(fingering_chart.trill_fsharp.contains())         { return 'trill_fsharp'; }
	else if(fingering_chart.hole_2.contains())               { return 'hole_2'; }
	else if(fingering_chart.trill_eflat.contains())          { return 'trill_eflat'; }
	else if(fingering_chart.hole_3.contains())               { return 'hole_3'; }
	else if(fingering_chart.low_eflat.contains())            { return 'low_eflat'; }
	else if(fingering_chart.low_dflat.contains())            { return 'low_dflat'; }
	else if(fingering_chart.trill_csharp.contains())         { return 'trill_csharp'; }
	else if(fingering_chart.hole_4.contains())               { return 'hole_4'; }
	else if(fingering_chart.hole_5.contains())               { return 'hole_5'; }
	else if(fingering_chart.trill_bflat.contains())          { return 'trill_bflat'; }
	else if(fingering_chart.low_g.contains())                { return 'low_g'; }
	else if(fingering_chart.low_f.contains())                { return 'low_f'; }
	else if(fingering_chart.little_finger_fsharp.contains()) { return 'little_finger_fsharp'; }
	else if(fingering_chart.little_finger_aflat.contains())  { return 'little_finger_aflat'; }
	else if(fingering_chart.note.contains())                 { return 'bottom'; }
	else if(fingering_chart.contains())						 { return 'help'; };

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
		
		if(typeof fingering_id != 'undefined') { var keys_string = fingering }
		else                                   { var keys_string = '000000000000000000000000000000'; };

		if(typeof note_tone_id != 'undefined') { var note_tone = note_tone_id }
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

		fingering_chart = new Fingering_Chart(type, keys_string, note, tone, help);

		canvas_W = canvas.width;
		canvas_H = canvas.height;

		scale_X = canvas_W / 200;        // Base canvas size is 200
		scale_Y = (canvas_H - 100)/ 200; // by 200, don't go any smaller. Extra 100 is for note.

		// Init Events
		if(type == 'edit' || (type == 'new')) {
			canvas.onclick = onClick;
			canvas.onmousemove = MouseMoved;
			
			return setInterval(draw, 100);
		}
		else { draw(); };
	}
	else {
		alert("Error: Could not get canvas context!");
	};
	
	$("#new_fingering").submitWithAjax();
});
