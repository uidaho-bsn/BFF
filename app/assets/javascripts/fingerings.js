/* Globals */
var fingering_chart;
var canvas;
var ctx;

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
	//find location
	var loc_num = 'low_bflat';
	
	//Update Status
	switch (loc_num) {
		case 'low_bflat':
			if(fingering_chart.low_bflat.status >= 7) {
				fingering_chart.low_bflat.status = 0;
			};
			fingering_chart.low_bflat.status += 1;
		break;
	};

	//Draw
	draw();
};

/* Draw */
function clear() {
	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
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
		fingering_chart = new Fingering_Chart();
	
		// Init Events
		$("#fingering_view").click(onClick);
	
		// Draw
		draw();
	}
	else {
		alert("Error: Could not get canvas context!")
	};
});