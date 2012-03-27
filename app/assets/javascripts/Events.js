/**
 * @author Max Stillwell
 */

var pointer = '';
var mouse_X;
var mouse_Y;

function onClick(e) {
	// Variables
	mouse_X = e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft);
	mouse_Y = e.pageY - (canvas.offsetTop  + canvas.offsetParent.offsetTop);
	
	fingering_chart.OnClick();
};

function MouseMoved(e) {
	mouse_X = e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft);
	mouse_Y = e.pageY - (canvas.offsetTop  + canvas.offsetParent.offsetTop);
	
	if(pointer) { document.body.style.cursor = 'pointer'; }
	else        { document.body.style.cursor = 'default'; };
};
