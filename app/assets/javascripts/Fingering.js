/**
 * @author Max Stillwell
 */

function Fingering(keys_string, offset_x, offset_y, type) {
	/* Public Functions */
    this.Update   = Update;
    this.OnClick  = OnClick;
    this.ToString = ToString;
    /* Private Variables */
	var low_bflat 	 		  = new Key("low_bflat",            40,  20,  10, -( 115 * Math.PI ) / 180, 'oval-large',          keys_string[0],  offset_x, offset_y, type);
	var low_b 		 		  = new Key("low_b",                30,  30,  10, -( 115 * Math.PI ) / 180, 'oval-large',          keys_string[1],  offset_x, offset_y, type);
	var low_c 		 		  = new Key("low_c",                23,  37,  11, -( 300 * Math.PI ) / 180, 'half-circle',         keys_string[2],  offset_x, offset_y, type);  
	var low_d 		 		  = new Key("low_d",                20,  70,  10, Math.PI / 2, 			    'oval-large',          keys_string[3],  offset_x, offset_y, type);
	var whisper 	 		  = new Key("whisper",              70,  70,  10, 0, 						'oval-small',          keys_string[4],  offset_x, offset_y, type);
	var thumb_csharp 		  = new Key("thumb_csharp",         70,  55,  10, 0, 						'oval-med',            keys_string[5],  offset_x, offset_y, type);
	var high_a 		 	  	  = new Key("high_a",               70,  40,  10, 0, 						'oval-large',          keys_string[6],  offset_x, offset_y, type);
	var high_c 		 	  	  = new Key("high_c",               70,  25,  10, 0, 						'oval-med',            keys_string[7],  offset_x, offset_y, type);
	var high_d 		 	  	  = new Key("high_d",               70,  10,  10, 0, 						'oval-small',          keys_string[8],  offset_x, offset_y, type);
	var thumb_bflat  		  = new Key("thumb_bflat",          70,  110, 10, 0, 						'oval-large',          keys_string[9],  offset_x, offset_y, type);
	var low_e 		 		  = new Key("low_e",                70,  140, 20, 0, 						'circle-key',          keys_string[10], offset_x, offset_y, type);
	var thumb_fsharp 		  = new Key("thumb_fsharp",         70,  170, 10, -( 10 * Math.PI ) / 180,  'oval-large',          keys_string[11], offset_x, offset_y, type);
	var thumb_aflat  		  = new Key("thumb_aflat",          75,  185, 10, -( 10 * Math.PI ) / 180,  'oval-large',          keys_string[12], offset_x, offset_y, type);
	var trill_a_to_b 		  = new Key("trill_a_to_b",         50,  180, 10, 0, 						'oval-small',          keys_string[13], offset_x, offset_y, type);
	var trill_g 	 		  = new Key("trill_g",              145, 23,  10, 0, 						'oval-small',          keys_string[14], offset_x, offset_y, type);
	var hole_1				  = new Key("hole_1",               130, 15,  8,  0, 						'circle',              keys_string[15], offset_x, offset_y, type);
	var trill_fsharp 		  = new Key("trill_fsharp",         145, 47,  10, 0,						'oval-small',          keys_string[16], offset_x, offset_y, type);
	var hole_2				  = new Key("hole_2",               130, 37,  8,  0, 						'circle',              keys_string[17], offset_x, offset_y, type);
	var trill_eflat 		  = new Key("trill_eflat",          0,    0,  0,  0,                        'oval-small',          keys_string[18], offset_x, offset_y, type);
	var hole_3				  = new Key("hole_3",               130, 60,  8,  0, 						'circle',              keys_string[19], offset_x, offset_y, type);
	var low_eflat 			  = new Key("low_eflat",            150, 73,  10, -( 190 * Math.PI ) / 180, 'half-circle',         keys_string[20], offset_x, offset_y, type);
	var low_dflat 			  = new Key("low_dflat",            151, 76,  10, -( 10 * Math.PI  ) / 180, 'half-circle',         keys_string[21], offset_x, offset_y, type);
	var trill_csharp 		  = new Key("trill_csharp",         115, 100, 10, 0,                        'oval-small',          keys_string[22], offset_x, offset_y, type);
	var hole_4				  = new Key("hole_4",               130, 110, 8,  0, 						'circle',              keys_string[23], offset_x, offset_y, type);
	var hole_5				  = new Key("hole_5",               130, 135, 8,  0, 						'circle',              keys_string[24], offset_x, offset_y, type);
	var trill_bflat 		  = new Key("trill_bflat",          143, 148, 10, 0,                        'oval-small',          keys_string[25], offset_x, offset_y, type);
	var low_g 				  = new Key("low_g",                141, 162, 10, 0,                        'oval-large',          keys_string[26], offset_x, offset_y, type);
	var low_f 				  = new Key("low_f",                130, 180, 10, 0,                        'box-up-left-curve',   keys_string[27], offset_x, offset_y, type);
	var little_finger_fsharp  = new Key("little_finger_fsharp", 150, 180,  5, 0,                        'box-right-end-curve', keys_string[28], offset_x, offset_y, type);
	var little_finger_aflat   = new Key("little_finger_aflat",  140, 187, 15, 0,                        'half-circle-flat',    keys_string[29], offset_x, offset_y, type);

	/* Begin Update Functions */
	function Update() {
		low_bflat.Update();
		low_b.Update();
		low_c.Update();
		low_d.Update();
		whisper.Update();
		thumb_csharp.Update();
		high_a.Update();
		high_c.Update();
		high_d.Update();
		thumb_bflat.Update();
		low_e.Update();
		thumb_fsharp.Update();
		thumb_aflat.Update();
		trill_a_to_b.Update();
		trill_g.Update();
		hole_1.Update();
		trill_fsharp.Update();
		hole_2.Update();
		trill_eflat.Update();
		hole_3.Update();
		low_eflat.Update();
		low_dflat.Update();
		trill_csharp.Update();
		hole_4.Update();
		hole_5.Update();
		trill_bflat.Update();
		low_g.Update();
		low_f.Update();
		little_finger_fsharp.Update();
		little_finger_aflat.Update();
	};
	/* End Update Functions */
	
	/* Begin Event Functions */
	function OnClick() {
		if(low_bflat.OnClick())                 { return true; }
		else if(low_b.OnClick())                { return true; }
		else if(low_c.OnClick())                { return true; }
		else if(low_d.OnClick())                { return true; }
		else if(whisper.OnClick())              { return true; }
		else if(thumb_csharp.OnClick())         { return true; }
		else if(high_a.OnClick())               { return true; }
		else if(high_c.OnClick())               { return true; }
		else if(high_d.OnClick())               { return true; }
		else if(thumb_bflat.OnClick())          { return true; }
		else if(low_e.OnClick())                { return true; }
		else if(thumb_fsharp.OnClick())         { return true; }
		else if(thumb_aflat.OnClick())          { return true; }
		else if(trill_a_to_b.OnClick())         { return true; }
		else if(trill_g.OnClick())              { return true; }
		else if(hole_1.OnClick())               { return true; }
		else if(trill_fsharp.OnClick())         { return true; }
		else if(hole_2.OnClick())               { return true; }
		else if(trill_eflat.OnClick())          { return true; }
		else if(hole_3.OnClick())               { return true; }
		else if(low_eflat.OnClick())            { return true; }
		else if(low_dflat.OnClick())            { return true; }
		else if(trill_csharp.OnClick())         { return true; }
		else if(hole_4.OnClick())               { return true; }
		else if(hole_5.OnClick())               { return true; }
		else if(trill_bflat.OnClick())          { return true; }
		else if(low_g.OnClick())                { return true; }
		else if(low_f.OnClick())                { return true; }
		else if(little_finger_fsharp.OnClick()) { return true; }
		else if(little_finger_aflat.OnClick())  { return true; };
	};
	/* End Event Functions */
	
	/* Begin Helpers */
	function ToString() {
		return low_bflat.ToString()   + low_b.ToString()        		  + low_c.ToString()        +
			   low_d.ToString()       + whisper.ToString()      		  + thumb_csharp.ToString() +
			   high_a.ToString()      + high_c.ToString()       		  + high_d.ToString()       +
			   thumb_bflat.ToString() + low_e.ToString()        		  + thumb_fsharp.ToString() +
			   thumb_aflat.ToString() + trill_a_to_b.ToString() 		  + trill_g.ToString()      +
			   hole_1.ToString() 	  + trill_fsharp.ToString() 		  + hole_2.ToString()		+
			   trill_eflat.ToString() + hole_3.ToString()                 + low_eflat.ToString()    +
			   low_dflat.ToString()   + trill_csharp.ToString() 		  + hole_4.ToString()		+
			   hole_5.ToString()      + trill_bflat.ToString()  		  + low_g.ToString()		+
			   low_f.ToString()       + little_finger_fsharp.ToString()   + little_finger_aflat.ToString();
   	};
	/* End Helpers */
};
