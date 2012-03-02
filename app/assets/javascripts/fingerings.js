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
	this.rotation = rotation
	this.status = 7;
	this.type = type;
	/* Public Functions */
	this.draw = draw;
	
	function draw() {
		switch (this.type) {
			case 'circle':
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
				alert("Error: Key.draw(). No 'type' was given.");
			break;
		};
	};

	function status_effect(status) {
		switch (status) {
			case 1:
				ctx.fillStyle = "orange";
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
				ctx.fillStyle = "yellow";
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
	this.low_bflat 	 			= new Key(40, 20,  10, -( 115 * Math.PI ) / 180, 'oval-large', this.ctx);
	this.low_b 		 			= new Key(30, 30,  10, -( 115 * Math.PI ) / 180, 'oval-large', this.ctx);
	//this.low_c 		 		= new Key();  
	this.low_d 		 			= new Key(10, 70,  10, Math.PI / 2, 			 'oval-large', this.ctx);
	this.whisper 	 			= new Key(70, 70,  10, 0, 						 'oval-small', this.ctx);
	this.thumb_csharp 			= new Key(70, 55,  10, 0, 						 'oval-med',   this.ctx);
	this.high_a 		 		= new Key(70, 40,  10, 0, 						 'oval-large', this.ctx);
	this.high_c 		 		= new Key(70, 25,  10, 0, 						 'oval-med',   this.ctx);
	this.high_d 		 		= new Key(70, 10,  10, 0, 						 'oval-small', this.ctx);
	this.thumb_bflat  			= new Key(70, 110, 10, 0, 						 'oval-large', this.ctx);
	this.low_e 		 			= new Key(70, 140, 20, 0, 						 'circle', 	   this.ctx);
	this.thumb_fsharp 			= new Key(70, 170, 10, -( 10 * Math.PI ) / 180,  'oval-large', this.ctx);
	this.thumb_aflat  			= new Key(75, 185, 10, -( 10 * Math.PI ) / 180,  'oval-large', this.ctx);
	this.trill_a_to_b 			= new Key(50, 180, 10, 0, 						 'oval-small', this.ctx);
	//this.trill_g 	 			= new Key();
	//this.trill_fsharp 		= new Key();
	//this.trill_eflat 			= new Key();
	//this.low_eflat 			= new Key();
	//this.low_dflat 			= new Key();
	//this.trill_csharp 		= new Key();
	//this.trill_bflat 			= new Key();
	//this.low_g 				= new Key();
	//this.low_f 				= new Key();
	//this.little_finger_fsharp = new Key();
	//this.little_finger_aflat 	= new Key();

	function draw() {
		ctx.strokeRect(0, 0, canvas.width, canvas.height);
		this.low_bflat.draw();
		this.low_b.draw();
		//this.low_c.draw();
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
		//this.trill_g.draw();
		//this.trill_fsharp.draw();
		//this.trill.eflat.draw();
		//this.low_eflat.draw();
		//this.low_dflat.draw();
		//this.trill_chsarp.draw();
		//this.trill_bflat.draw();
		//this.low_g.draw();
		//this.low_f.draw();
		//this.little_finger_fsharp.draw();
		//this.little_finger_aflat.draw();
	};
};

/* Events */
function onClick(e) {
	// Variables
	var location = 'none';
	
	// Debug
	status.innerHTML = ("Clicked: Cursor[" + e.pageX + ", " + e.pageY + "]");

	// Find Click Location
	if(intersects(fingering_chart.low_bflat.x, fingering_chart.low_bflat.y, (e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft)), 
		(e.pageY - (canvas.offsetTop + canvas.offsetParent.offsetTop)), fingering_chart.low_bflat.r)) {
		location = 'low_bflat';
	}
	else if(intersects(fingering_chart.low_b.x, fingering_chart.low_b.y, (e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft)), 
		(e.pageY - (canvas.offsetTop + canvas.offsetParent.offsetTop)), fingering_chart.low_b.r)) {
		location = 'low_b';
	};
	
	// Update Status
	switch (location) {
		case 'low_bflat':
			if(fingering_chart.low_bflat.status >= 7) {
				fingering_chart.low_bflat.status = 0;
			};
			fingering_chart.low_bflat.status += 1;
		break;
		case 'low_b':
			if(fingering_chart.low_b.status >= 7) {
				fingering_chart.low_b.status = 0;
			};
			fingering_chart.low_b.status += 1;
		break;
		case 'none':
		break;
	};

	// Draw
	draw();
};

function MouseMoved(e) {
	// Debug
	status.innerHTML = "Cursor[" + e.pageX + ", " + e.pageY + "], Offset[" + (e.pageX - canvas.offsetLeft) + 
		", " + (e.pageY - canvas.offsetTop) + "]";

	// Find Mouse
	if (isCursorOverKey(e.pageX - (canvas.offsetLeft + canvas.offsetParent.offsetLeft), 
		e.pageY - (canvas.offsetTop + canvas.offsetParent.offsetTop))) {
		document.body.style.cursor = 'pointer';
	}
	else {
		document.body.style.cursor = 'default';
	};
};

/* Helpers */
function intersects(x, y, mx, my, r) {
	dx = x - mx;
	dy = y - my;
	
	//alert(dx + "*" + dx + "+" + dy + "*" + dy + "<=" + r + "*" + r);
	if(dx * dx + dy * dy <= r * r) {
		return true;
	}
	
	return false;
};

function isCursorOverKey(x, y) {	
	if(intersects(fingering_chart.low_bflat.x, fingering_chart.low_bflat.y, x, y, fingering_chart.low_bflat.r)) {
		return true;
	}
	else if(intersects(fingering_chart.low_b.x, fingering_chart.low_b.y, x, y, fingering_chart.low_b.r)) {
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
		return setInterval(draw, 500);
	}
	else {
		alert("Error: Could not get canvas context!");
	};
});

