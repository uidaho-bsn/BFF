/**
 * @author Max Stillwell
 */

function Note(note, tone, offset_x, offset_y, length) {
	/* Private Variables */
	var e2 = false; var f2 = false; var g2 = false;
	var a2 = false; var b2 = false; var c3 = false;
	var d3 = false; var e3 = false; var f3 = false;
	var g3 = false; var a3 = false; var b3 = false;
	var tone_hover = false;
	var note_hover = false;
	var l1 = -10; var l2 = -5; var l3 = 0; var l4 = 5; var l5 = 10; var l6 = 15;
	/* Public Functions */
	this.Update   = Update;
	this.OnClick  = OnClick; 
	this.ToString = ToString;
	
	/* Begin Draw Functions */
	function draw() {
		draw_staff();
		draw_cleff();	
		draw_text();
		
		ctx.fillStyle = "black";
		draw_e2(); draw_f2(); draw_g2();
		draw_a2(); draw_b2(); draw_c3();
		draw_d3(); draw_e3(); draw_f3();
		draw_g3(); draw_a3(); draw_b3();
	};
	
	function draw_staff() {
		ctx.save();
			ctx.beginPath();
				ctx.moveTo(0, l1); ctx.lineTo(length, l1);
				ctx.moveTo(0, l2); ctx.lineTo(length, l2);
				ctx.moveTo(0, l3); ctx.lineTo(length, l3);
				ctx.moveTo(0, l4); ctx.lineTo(length, l4);
				ctx.moveTo(0, l5); ctx.lineTo(length, l5);
			ctx.closePath();
			
			ctx.lineWidth = 0.5;
			ctx.stroke();
		ctx.restore();
	};
	
	function draw_cleff() {
		ctx.save();
			ctx.font      = "18pt Calibri";
			ctx.fillStyle = "black";

			ctx.fillText("𝄢", 1, 17.5); //𝄢 - B:
		ctx.restore();
	};

	function draw_text () {
		ctx.save();
			if(note != '') {
				ctx.shadowColor = "rgb(190, 190, 190)";
				ctx.shadowOffsetX = 1.5;
				ctx.shadowOffsetY = 1.5;
				
				ctx.fillStyle="black";
				if(tone_hover || note_hover) {
					ctx.fillStyle = "rgb(255, 0, 0)";
				};
				
				ctx.font = "9pt Calibri";
				ctx.fillText(note[0] + " " + tone, 10, 200);
				
				ctx.font = "4pt Calibri";
				ctx.fillText(note[1], 15, 195);
			};
		ctx.restore();
	};

	function draw_e2() {
		ctx.save();
			ctx.translate(50, l6);
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
			ctx.translate(50, l6);
			
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
			ctx.translate(60, l6 - 2.5);
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
			ctx.translate(70, l5);
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
			ctx.translate(80, l5 - 2.5);
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
			ctx.translate(90, l4);
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
			ctx.translate(100, l4 - 2.5);
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
			ctx.translate(110, l3);
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
			ctx.translate(120, l3 - 2.5);
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
			ctx.translate(130, l2);
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
			ctx.translate(140, l2 - 2.5);
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
			ctx.translate(150, l1);
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
			ctx.translate(160, l1 - 2.5);
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
	function Update() {
		draw();
		
		update_mouse();
	};

	function update_mouse() {
		e2 = f2 = g2 = a2 = b2 = c3 = d3 = e3 = f3 = g3 = a3 = b3 = tone_hover = note_hover = false;
		
		if((mouse_X > ((0 + offset_x) * scale_X)) && (mouse_X < ((length + offset_x) * scale_X))) {
			if(     mouse_Y < ((l6 - 2.5 + offset_y) * scale_Y) && 
			        mouse_Y > ((l6 + 2.5 + offset_y) * scale_Y)) { e2 = true; }
			else if(mouse_Y < ((l6       + offset_y) * scale_Y) && 
					mouse_Y > ((l5       + offset_y) * scale_Y)) { f2 = true; }					
			else if(mouse_Y < ((l6 - 2.5 + offset_y) * scale_Y) && 
					mouse_Y > ((l5 + 2.5 + offset_y) * scale_Y)) { g2 = true; }					
			else if(mouse_Y < ((l5       + offset_y) * scale_Y) && 
					mouse_Y > ((l4       + offset_y) * scale_Y)) { a2 = true; }					
			else if(mouse_Y < ((l5 - 2.5 + offset_y) * scale_Y) && 
					mouse_Y > ((l4 + 2.5 + offset_y) * scale_Y)) { b2 = true; }					
			else if(mouse_Y < ((l4       + offset_y) * scale_Y) && 
					mouse_Y > ((l3       + offset_y) * scale_Y)) { c3 = true; }
			else if(mouse_Y < ((l4 - 2.5 + offset_y) * scale_Y) && 
					mouse_Y > ((l3 + 2.5 + offset_y) * scale_Y)) { d3 = true; }					
			else if(mouse_Y < ((l3       + offset_y) * scale_Y) && 
					mouse_Y > ((l2       + offset_y) * scale_Y)) { e3 = true; }
			else if(mouse_Y < ((l3 - 2.5 + offset_y) * scale_Y) && 
					mouse_Y > ((l2 + 2.5 + offset_y) * scale_Y)) { f3 = true; }
			else if(mouse_Y < ((l2       + offset_y) * scale_Y) && 
					mouse_Y > ((l1       + offset_y) * scale_Y)) { g3 = true; }
			else if(mouse_Y < ((l2 - 2.5 + offset_y) * scale_Y) && 
					mouse_Y > ((l1 + 2.5 + offset_y) * scale_Y)) { a3 = true; }
			else if(mouse_Y < ((l1 - 2.5 + offset_y) * scale_Y) && 
					mouse_Y > ((l1 + 2.5 + offset_y) * scale_Y)) { b3 = true; };
		}
		/*else if(true) {
			
		};*/

		var temp = (note_hover || tone_hover || e2 || f2 || g2 || a2 || b2 || c3 || d3 || e3 || f3 || g3 || a3 || b3)?true:false;
		if(temp       && pointer == '')     { pointer = 'note'; }
		else if(!temp && pointer == 'note') { pointer = '' };
	};
	/* End Update Functions */
	
	/* Begin Event Functions */
	function OnClick() {
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
		else if(note_hover || tone_hover) {
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
		
		if(note_hover || tone_hover || e2 || f2 || g2 || a2 || b2 || c3 || d3 || e3 || f3 || g3 || a3 || b3) { return true; };
	};
	/* End Event Functions */
	
	/* Begin Helpers */
	function ToString() {
		var t = "natural"
		switch (tone) {
			case "♭":
				var t = "flat";
			break;
			case "♯":
				var t = "sharp";
			break;
		};

		return (String(note) + "_" + String(t))
	};
	/* End Helpers */
};