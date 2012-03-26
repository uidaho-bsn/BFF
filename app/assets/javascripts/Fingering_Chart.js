/**
 * @author Max Stillwell
 */

function Fingering_Chart(keys_string, note, tone, help) {
	/* Public Functions */
    this.draw     = draw;
    this.contains = contains;
    this.update   = update;
    this.ToString = ToString;
    /* Public Variables */
	this.low_bflat 	 		  = new Key(40,  20,  10, -( 115 * Math.PI ) / 180, 'oval-large',          keys_string[0]);
	this.low_b 		 		  = new Key(30,  30,  10, -( 115 * Math.PI ) / 180, 'oval-large',          keys_string[1]);
	this.low_c 		 		  = new Key(23,  37,  11, -( 300 * Math.PI ) / 180, 'half-circle',         keys_string[2]);  
	this.low_d 		 		  = new Key(20,  70,  10, Math.PI / 2, 			  	'oval-large',          keys_string[3]);
	this.whisper 	 		  = new Key(70,  70,  10, 0, 						'oval-small',          keys_string[4]);
	this.thumb_csharp 		  = new Key(70,  55,  10, 0, 						'oval-med',            keys_string[5]);
	this.high_a 		 	  = new Key(70,  40,  10, 0, 						'oval-large',          keys_string[6]);
	this.high_c 		 	  = new Key(70,  25,  10, 0, 						'oval-med',            keys_string[7]);
	this.high_d 		 	  = new Key(70,  10,  10, 0, 						'oval-small',          keys_string[8]);
	this.thumb_bflat  		  = new Key(70,  110, 10, 0, 						'oval-large',          keys_string[9]);
	this.low_e 		 		  = new Key(70,  140, 20, 0, 						'circle-key',          keys_string[10]);
	this.thumb_fsharp 		  = new Key(70,  170, 10, -( 10 * Math.PI ) / 180,  'oval-large',          keys_string[11]);
	this.thumb_aflat  		  = new Key(75,  185, 10, -( 10 * Math.PI ) / 180,  'oval-large',          keys_string[12]);
	this.trill_a_to_b 		  = new Key(50,  180, 10, 0, 						'oval-small',          keys_string[13]);
	this.trill_g 	 		  = new Key(145, 23,  10, 0, 						'oval-small',          keys_string[14]);
	this.hole_1				  = new Key(130, 15,  8,  0, 						'circle',              keys_string[15]);
	this.trill_fsharp 		  = new Key(145, 47,  10, 0,						'oval-small',          keys_string[16]);
	this.hole_2				  = new Key(130, 37,  8,  0, 						'circle',              keys_string[17]);
	this.trill_eflat 		  = new Key(0,    0,  0,  0,                        'oval-small',          keys_string[18]);
	this.hole_3				  = new Key(130, 60,  8,  0, 						'circle',              keys_string[19]);
	this.low_eflat 			  = new Key(150, 73,  10, -( 190 * Math.PI ) / 180, 'half-circle',         keys_string[20]);
	this.low_dflat 			  = new Key(151, 76,  10, -( 10 * Math.PI ) / 180,  'half-circle',         keys_string[21]);
	this.trill_csharp 		  = new Key(115, 100, 10, 0,                        'oval-small',          keys_string[22]);
	this.hole_4				  = new Key(130, 110, 8,  0, 						'circle',              keys_string[23]);
	this.hole_5				  = new Key(130, 135, 8,  0, 						'circle',              keys_string[24]);
	this.trill_bflat 		  = new Key(143, 148, 10, 0,                        'oval-small',          keys_string[25]);
	this.low_g 				  = new Key(141, 162, 10, 0,                        'oval-large',          keys_string[26]);
	this.low_f 				  = new Key(130, 180, 10, 0,                        'box-up-left-curve',   keys_string[27]);
	this.little_finger_fsharp = new Key(150, 180,  5, 0,                        'box-right-end-curve', keys_string[28]);
	this.little_finger_aflat  = new Key(140, 187, 15, 0,                        'half-circle-flat',    keys_string[29]);
	this.note				  = new Note(note, tone);
	/* Private Variables */
	var help_hover = false;
	var add_hover  = false;
	var debug_show = false;
	
	/* Begin Draw Functions */
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
		if(debug_show) { draw_debug(); };
		if(help)  { draw_help();  };
		//draw_add_chart();
	};
	
	function draw_help() {
		ctx.fillStyle = "black";
		ctx.shadowColor = "rgb(190, 190, 190)";
		ctx.shadowOffsetX = 1.5;
		ctx.shadowOffsetY = 1.5;
		if(help_hover) {
			ctx.fillStyle = "rgb(255, 0, 0)";
		};
		
		ctx.font = "5pt Calibri";
		ctx.fillText("?", 190, 5);
	}
	
	function draw_add_chart() {
		ctx.fillStyle = "black";
		ctx.shadowColor = "rgb(190, 190, 190)";
		ctx.shadowOffsetX = 1.5;
		ctx.shadowOffsetY = 1.5;
		if(add_hover) {
			ctx.fillStyle = "rgb(255, 0, 0)";
		};
		
		ctx.font = "5pt Calibri";
		ctx.fillText("=>", 190, 100);
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
		if(help_hover) { debug_show = !debug_show; }
		else if(add_hover) {
			
		};
	};

	function contains() {
		help_hover = add_hover = false;
		
		if((mouse_X > (190 * scale_X) && mouse_X < (200 * scale_X)) && 
			(mouse_Y > (0 * scale_Y) && mouse_Y < (10 * scale_Y))) { return help_hover = true; }
		else if((mouse_X > (190 * scale_X) && mouse_X < (200 * scale_X)) && 
			(mouse_Y > (95 * scale_Y) && mouse_Y < (105 * scale_Y))) { return add_hover = true; };
	};
	/* End Update Functions */
	
	/* Begin Helpers */
	function ToString() {
		return this.low_bflat.ToString()   + this.low_b.ToString()        		  + this.low_c.ToString()        +
			   this.low_d.ToString()       + this.whisper.ToString()      		  + this.thumb_csharp.ToString() +
			   this.high_a.ToString()      + this.high_c.ToString()       		  + this.high_d.ToString()       +
			   this.thumb_bflat.ToString() + this.low_e.ToString()        		  + this.thumb_fsharp.ToString() +
			   this.thumb_aflat.ToString() + this.trill_a_to_b.ToString() 		  + this.trill_g.ToString()      +
			   this.hole_1.ToString() 	   + this.trill_fsharp.ToString() 		  + this.hole_2.ToString()		 +
			   this.trill_eflat.ToString() + this.low_eflat.ToString() 			  + this.hole_3.ToString() 	     +
			   this.low_dflat.ToString()   + this.trill_csharp.ToString() 		  + this.hole_4.ToString()		 +
			   this.hole_5.ToString()      + this.trill_bflat.ToString()  		  + this.low_g.ToString()		 +
			   this.low_f.ToString() 	   + this.little_finger_fsharp.ToString() + this.little_finger_aflat.ToString();
	};
	/* End Helpers */
};