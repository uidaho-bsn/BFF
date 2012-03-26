/**
 * @author Max Stillwell
 */

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