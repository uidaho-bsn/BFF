/**
 * @author Max Stillwell
 */

function Note(note, tone, offset_x, offset_y, length) {
	/* Private Variables */
	var notes = new Array(12);
	var clef  = 'f-clef'
	var l1 = -10; var l2 = -5; var l3 = 0; var l4 = 5; var l5 = 10; var l6 = 15;
	var tone_hover = false; 
	var note_hover = false;
	/* Public Functions */
	this.Update   = Update;
	this.OnClick  = OnClick; 
	this.ToString = ToString;
	
	/* Begin Constructor */
	for(i in notes) {
		notes[i] = false;
	};
	/* End Constructor */
	
	/* Begin Draw Functions */
	function draw() {
		draw_staff();
		draw_cleff();	
		draw_text();
		draw_curr_note();
		draw_hover_note();
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

	function draw_curr_note () {
		var pos_x = (noteToPos() == 0)?l6:l6 - (2.5 * (noteToPos()));
		ctx.fillStyle   = "black";
		ctx.strokeStyle = "black";
		
		ctx.save();
			ctx.translate(50, pos_x);
			ctx.rotate(-(10 * Math.PI) / 180);
			ctx.scale(1.25, 0.9);
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 2;
			ctx.shadowOffsetY = 2;
			
			ctx.beginPath();
				ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
			ctx.closePath();
			
			ctx.fill();
		ctx.restore();
		
		if(noteToPos() == 0) {
			ctx.save();
				ctx.translate(50, pos_x);
				
				ctx.beginPath();
					ctx.moveTo(-7, 0);
					ctx.lineTo(7, 0);
				ctx.closePath();
				
				ctx.stroke();
			ctx.restore();
		};
	};

	function draw_hover_note() {
		var i;
		ctx.fillStyle   = "red";
		ctx.strokeStyle = "red";
		
		for(i = 0; i < 12; i++) {
			var pos_x = (i == 0)?l6:l6 - (2.5 * i);
			
			if(notes[i]) {
				ctx.save();
					ctx.translate(50, pos_x);
					ctx.rotate(-(10 * Math.PI) / 180);
					ctx.scale(1.25, 0.9);
					
					ctx.shadowColor = "rgb(190, 190, 190)";
					ctx.shadowOffsetX = 2;
					ctx.shadowOffsetY = 2;
					
					ctx.beginPath();
						ctx.arc(0, 0, 3, 0, Math.PI * 2, false);
					ctx.closePath();
					
					ctx.fill();
				ctx.restore();
				
				if(i == 0) {
					ctx.save();
						ctx.translate(50, pos_x);
						
						ctx.beginPath();
							ctx.moveTo(-7, 0);
							ctx.lineTo(7, 0);
						ctx.closePath();
						
						ctx.stroke();
					ctx.restore();
				};
			};
		};
	};
	/* End Draw Functions */
	
	/* Begin Update Functions */
	function Update() {
		draw();
		
		update_mouse();
	};

	function update_mouse() {
		var i;
		
		for(i = 0; i < 12; i++) {
			notes[i] = false;
		};

		if((mouse_X > ((0 + offset_x) * scale_X)) && (mouse_X < ((length + offset_x) * scale_X))) {
			if(     mouse_Y > ((l6 - 2.5 + offset_y) * scale_Y) && 
			        mouse_Y < ((l6 + 2.5 + offset_y) * scale_Y)) { notes[0] = true; }
			else if(mouse_Y < ((l6       + offset_y) * scale_Y) && 
					mouse_Y > ((l5       + offset_y) * scale_Y)) { notes[1] = true; }
			else if(mouse_Y > ((l5 - 2.5 + offset_y) * scale_Y) && 
					mouse_Y < ((l5 + 2.5 + offset_y) * scale_Y)) { notes[2] = true; }
			else if(mouse_Y < ((l5       + offset_y) * scale_Y) && 
					mouse_Y > ((l4       + offset_y) * scale_Y)) { notes[3] = true; }
			else if(mouse_Y > ((l4 - 2.5 + offset_y) * scale_Y) && 
					mouse_Y < ((l4 + 2.5 + offset_y) * scale_Y)) { notes[4] = true; }
			else if(mouse_Y < ((l4       + offset_y) * scale_Y) && 
					mouse_Y > ((l3       + offset_y) * scale_Y)) { notes[5] = true; }
			else if(mouse_Y > ((l3 - 2.5 + offset_y) * scale_Y) && 
					mouse_Y < ((l3 + 2.5 + offset_y) * scale_Y)) { notes[6] = true; }
			else if(mouse_Y < ((l3       + offset_y) * scale_Y) && 
					mouse_Y > ((l2       + offset_y) * scale_Y)) { notes[7] = true; }
			else if(mouse_Y > ((l2 - 2.5 + offset_y) * scale_Y) && 
					mouse_Y < ((l2 + 2.5 + offset_y) * scale_Y)) { notes[8] = true; }
			else if(mouse_Y < ((l2       + offset_y) * scale_Y) && 
					mouse_Y > ((l1       + offset_y) * scale_Y)) { notes[9] = true; }
			else if(mouse_Y > ((l1 - 2.5 + offset_y) * scale_Y) && 
					mouse_Y < ((l1 + 2.5 + offset_y) * scale_Y)) { notes[10] = true; }
			else if(mouse_Y < ((l1       + offset_y) * scale_Y) && 
					mouse_Y > ((l1 - 5.0 + offset_y) * scale_Y)) { notes[11] = true; };
		}
		/*else if(true) {
			
		};*/

		var temp = (note_hover || tone_hover)?true:false
		for(i = 0; i < 12; i++) {
			temp = (temp || notes[i])?true:false;
		};

		if(temp       && pointer == '')     { pointer = 'note'; }
		else if(!temp && pointer == 'note') { pointer = '' };
	};
	/* End Update Functions */
	
	/* Begin Event Functions */
	function OnClick() {
		note = posToNote();
		
		if(note_hover || tone_hover) {
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
		
		/*var temp = (note_hover || tone_hover)?true:false
		for(i in notes) {
			temp = (temp || notes[i])?true:false;
		};
		
		if(temp) { return true; };*/
	};
	/* End Event Functions */
	
	/* Begin Helpers */
	function posToNote() {
		var ret = note;
		
		switch(clef) {
			case "f-clef":
				if(notes[0])       { ret = "e2"; }
				else if(notes[1])  { ret = "f2"; }
				else if(notes[2])  { ret = "g2"; }
				else if(notes[3])  { ret = "a2"; }
				else if(notes[4])  { ret = "b2"; }
				else if(notes[5])  { ret = "c3"; }
				else if(notes[6])  { ret = "d3"; }
				else if(notes[7])  { ret = "e3"; }
				else if(notes[8])  { ret = "f3"; }
				else if(notes[9]) { ret = "g3"; }
				else if(notes[10]) { ret = "a3"; }
				else if(notes[11]) { ret = "b3"; };
			break;
			case "c-clef":
				/*if(notes[0])       { ret = "c4"; }
				else if(notes[1])  { ret = "d4"; }
				else if(notes[2])  { ret = "e4"; }
				else if(notes[3])  { ret = "f4"; }
				else if(notes[4])  { ret = "g4"; }
				else if(notes[5])  { ret = "a4"; }
				else if(notes[6])  { ret = "b4"; }
				else if(notes[7])  { ret = "c5"; }
				else if(notes[8])  { ret = "d5"; }
				else if(notes[9]) { ret = "e5"; }
				else if(notes[10]) { ret = "f5"; }
				else if(notes[11]) { ret = "g5"; };*/
			break;
			case "g-clef":
				if(notes[0])       { ret = "c4"; }
				else if(notes[1])  { ret = "d4"; }
				else if(notes[2])  { ret = "e4"; }
				else if(notes[3])  { ret = "f4"; }
				else if(notes[4])  { ret = "g4"; }
				else if(notes[5])  { ret = "a4"; }
				else if(notes[6])  { ret = "b4"; }
				else if(notes[7])  { ret = "c5"; }
				else if(notes[8])  { ret = "d5"; }
				else if(notes[9]) { ret = "e5"; }
				else if(notes[10]) { ret = "f5"; }
				else if(notes[11]) { ret = "g5"; };
			break;
		};
		
		return ret;
	};
	
	function noteToPos() {
		var ret = 1;
		
		switch(clef) {
			case "f-clef":
				if(note == "e2")      { ret = 0; }
				else if(note == "f2") { ret = 1; }
				else if(note == "g2") { ret = 2; }
				else if(note == "a2") { ret = 3; }
				else if(note == "b2") { ret = 4; }
				else if(note == "c3") { ret = 5; }
				else if(note == "d3") { ret = 6; }
				else if(note == "e3") { ret = 7; }
				else if(note == "f3") { ret = 8; }
				else if(note == "g3") { ret = 9; }
				else if(note == "a3") { ret = 10; }
				else if(note == "b3") { ret = 11; };
			break;
			case "c-clef":
				/*if(notes[1])       { ret = "c4"; }
				else if(notes[2])  { ret = "d4"; }
				else if(notes[3])  { ret = "e4"; }
				else if(notes[4])  { ret = "f4"; }
				else if(notes[5])  { ret = "g4"; }
				else if(notes[6])  { ret = "a4"; }
				else if(notes[7])  { ret = "b4"; }
				else if(notes[8])  { ret = "c5"; }
				else if(notes[9])  { ret = "d5"; }
				else if(notes[10]) { ret = "e5"; }
				else if(notes[11]) { ret = "f5"; }
				else if(notes[12]) { ret = "g5"; };*/
			break;
			case "g-clef":
				if(note == "c4")      { ret = 0; }
				else if(note == "d4") { ret = 1; }
				else if(note == "e4") { ret = 2; }
				else if(note == "f4") { ret = 3; }
				else if(note == "g4") { ret = 4; }
				else if(note == "a4") { ret = 5; }
				else if(note == "b4") { ret = 6; }
				else if(note == "c5") { ret = 7; }
				else if(note == "d5") { ret = 8; }
				else if(note == "e5") { ret = 9; }
				else if(note == "f5") { ret = 10; }
				else if(note == "g5") { ret = 11; };
			break;
		};
		
		return ret;
	}
	
	function ToString() {
		var t = "natural"
		switch(tone) {
			case "♭":
				var t = "flat";
			break;
			case "♯":
				var t = "sharp";
			break;
		};

		return (posToNote() + "_" + String(t))
	};
	/* End Helpers */
};