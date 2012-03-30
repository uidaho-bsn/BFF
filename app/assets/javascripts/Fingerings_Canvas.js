/**
 * @author Max Stillwell
 */

function Fingerings_Canvas(keys_string, note_tone, type, help) {
	/* Private Variables */
	var fingering_chart1;
	var fingering_chart2;
	var fingering_chart3;
	var fingering_chart4;
	var number_of_fingerings;
	var help_hover  = false;
	var debug_show  = false;
	var help_enable = help;
	var help_show   = false;
	/* Public Functions */
	this.Update   = Update;
	this.ToString = ToString;
	this.OnClick  = OnClick;
	
	/* Begin Constructor */
	number_of_fingerings = keys_string[0];
	var k_strings = new Array(number_of_fingerings);
	var n_strings = new Array(number_of_fingerings);
	var t_strings = new Array(number_of_fingerings);
	
	k_strings = parseKeysString(keys_string);
	n_strings = parseNotesString(note_tone);
	t_strings = parseTonesString(note_tone);

	scale_X = canvas.width / 200;          // Base canvas size is 200
	scale_Y = (canvas.height - 100) / 200; // by 200, don't go any smaller. Extra 100 is for note.

	if(number_of_fingerings >= 1) { fingering_chart1 = new Fingering_Chart(canvas.width, canvas.height, 0, 0,   k_strings[0], n_strings[0], t_strings[0], help, true);  };
	if(number_of_fingerings >= 2) { fingering_chart2 = new Fingering_Chart(canvas.width, canvas.height, 200, 0, k_strings[1], n_strings[1], t_strings[1], help, false); };
	if(number_of_fingerings >= 3) { fingering_chart3 = new Fingering_Chart(canvas.width, canvas.height, 400, 0, k_strings[2], n_strings[2], t_strings[2], help, false); };
	if(number_of_fingerings >= 4) { fingering_chart4 = new Fingering_Chart(canvas.width, canvas.height, 600, 0, k_strings[3], n_strings[3], t_strings[3], help, false); };
	
	ctx.canvas.width *= number_of_fingerings;

	if((type == 'edit') || (type == 'new')) {
		canvas.onclick     = OnClick;
		canvas.onmousemove = MouseMoved;
		
		return setInterval(Update, 100);
	}
	else { Update(); };
	/* End Constructor */
	
	/* Begin Draw Functions */
	function draw() {
		clear();
		
		if(debug_show)  { draw_debug(); };
		if(help_enable) { draw_help();  };
	};
	
	function clear() {
		ctx.fillStyle = "#fff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};
	
	function draw_help() {
		ctx.save()
			ctx.fillStyle = "black";
			if(help_hover) {
				ctx.fillStyle = "rgb(255, 0, 0)";
			};
			
			ctx.shadowColor = "rgb(190, 190, 190)";
			ctx.shadowOffsetX = 1.5;
			ctx.shadowOffsetY = 1.5;
			
			ctx.font = "12pt Calibri";
			ctx.fillText("?", (canvas.width - 10) * scale_X, (canvas.heigth + 5) * scale_Y);
			
			if(help_show) {
				
			};
		ctx.restore();
	};
	
	function draw_debug() {
		ctx.save();
			ctx.font = "6pt Calibri";
			ctx.fillStyle = "black";
			ctx.fillText(pointer + " (" + mouse_X + "," + mouse_Y + ")", 100, 235);
		ctx.restore();
	};
	/* End Draw Functions */
	
	/* Begin Update Functions */
	function Update() {
		draw();
		
		update_mouse();
	};
	
	function update_mouse() {
		help_hover = false;
		
		if((mouse_X > (190 * scale_X) && mouse_X < (200 * scale_X)) && (mouse_Y > (0 * scale_Y) && mouse_Y < (10 * scale_Y))) { help_hover = true; }
		
		if(help_hover       && pointer == '')     { pointer = 'help'; }
		else if(!help_hover && pointer == 'help') { pointer = '' };
		
		ctx.save();
			ctx.scale(scale_X, scale_Y);
			ctx.save()
				if(number_of_fingerings >= 1) { fingering_chart1.Update(); };
			ctx.restore();
			ctx.save()
				if(number_of_fingerings >= 2) { fingering_chart2.Update(); };
			ctx.restore();
			ctx.save()
				if(number_of_fingerings >= 3) { fingering_chart3.Update(); };
			ctx.restore();
			ctx.save()
				if(number_of_fingerings >= 4) { fingering_chart4.Update(); };
			ctx.restore();
		ctx.restore();
	};
	/* End Update Functions */
	
	/* Begin Events */
	function OnClick(e) {
		mouse_X = e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft);
		mouse_Y = e.pageY - (canvas.offsetTop  + canvas.offsetParent.offsetTop);
		
		if(help_hover) { 
			debug_show = !debug_show;
			help_show  = !help_show;
		}

		if(number_of_fingerings >= 1) { fingering_chart1.OnClick(); };
		if(number_of_fingerings >= 2) { fingering_chart2.OnClick(); };
		if(number_of_fingerings >= 3) { fingering_chart3.OnClick(); };
		if(number_of_fingerings >= 4) { fingering_chart4.OnClick(); };
	};
	
	function MouseMoved(e) {
		mouse_X = e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft);
		mouse_Y = e.pageY - (canvas.offsetTop  + canvas.offsetParent.offsetTop);
		
		if(pointer) { document.body.style.cursor = 'pointer'; }
		else        { document.body.style.cursor = 'default'; };
	};
	/* End Events */
	
	/* Begin Helpers */
	function parseKeysString(keys_string) {
		var retArray = new Array(number_of_fingerings);
		
		if(number_of_fingerings >= 1) { retArray[0] = keys_string.substring(2, 32);   };
		if(number_of_fingerings >= 2) { retArray[1] = keys_string.substring(33, 62);  };
		if(number_of_fingerings >= 3) { retArray[2] = keys_string.substring(61, 91);  };
		if(number_of_fingerings >= 4) { retArray[3] = keys_string.substring(91, 111); };
		
		return retArray;
	};
	
	function parseNotesString(notes_string) {
		var retArray = new Array(number_of_fingerings);
		
		var temp = new Array(number_of_fingerings);
		var str  = notes_string.substring(2);
		temp = str.split(',');
		
		if(number_of_fingerings >= 1) { retArray[0] = temp[0].substring(0,2); };
		if(number_of_fingerings >= 2) { retArray[1] = temp[1].substring(0,2); };
		if(number_of_fingerings >= 3) { retArray[2] = temp[2].substring(0,2); };
		if(number_of_fingerings >= 4) { retArray[3] = temp[3].substring(0,2); };
		
		return retArray;
	};
	
	function parseTonesString(tones_string) {
		var retArray = new Array(number_of_fingerings);
		
		var temp = new Array(number_of_fingerings);
		var str  = tones_string.substring(2);
		temp = str.split(',');
		
		if(number_of_fingerings >= 1) { retArray[0] = temp[0].substring(3); };
		if(number_of_fingerings >= 2) { retArray[1] = temp[1].substring(3); };
		if(number_of_fingerings >= 3) { retArray[2] = temp[2].substring(3); };
		if(number_of_fingerings >= 4) { retArray[3] = temp[3].substring(3); };
	
		for(i in retArray) {
			switch (retArray[i]) {
				case "natural":
					retArray[i] = "♮";
				break;
				case "flat":
					retArray[i] = "♭";
				break;
				case "sharp":
					retArray[i] = "♯";
				break;
			};
		};
	
		return retArray;
	};
	
	function ToString(type) {
		switch(type) {
			case "keys":
				var ret = String(number_of_fingerings) + ':' + fingering_chart1.ToString("keys");
				if(number_of_fingerings >= 2) { ret += ','   + fingering_chart2.ToString("keys") };
				if(number_of_fingerings >= 3) { ret += ','   + fingering_chart3.ToString("keys") };
				if(number_of_fingerings == 4) { ret += ','   + fingering_chart4.ToString("keys") };

				return ret;
			break;
			case "note_tones":
				var ret = String(number_of_fingerings) + ':' + fingering_chart1.ToString("note_tones");
				if(number_of_fingerings >= 2) { ret += ','   + fingering_chart2.ToString("note_tones") };
				if(number_of_fingerings >= 3) { ret += ','   + fingering_chart3.ToString("note_tones") };
				if(number_of_fingerings == 4) { ret += ','   + fingering_chart4.ToString("note_tones") };
				
				return ret;
			break;
			default:
				return ToString("keys");
			break;
		};
	};	
	/* End Helpers */
};
