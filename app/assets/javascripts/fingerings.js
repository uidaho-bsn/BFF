function Key(x, y, r, rotation, type, ctx) {
	/* Context */
	this.ctx = ctx;
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
				draw_circle(x, y, r, this.status, this.ctx);
			break;
			case 'half-circle':
				draw_half_circle(x, y, r, rotation, this.status, this.ctx);
			break;
			case 'oval-small':
				draw_oval(x, y, r, 0.75, 0.5, rotation, this.status, this.ctx);
			break;
			case 'oval-med':
				draw_oval(x, y, r, 1.00, 0.5, rotation, this.status, this.ctx);
			break;
			case 'oval-large':
				draw_oval(x, y, r, 1.50, 0.5, rotation, this.status, this.ctx);
			break;
			default:
				alert("Error: Key.draw(). No 'type' was given.");
			break;
		};
	};
	
	function status_effect(status, ctx) {
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
				alert("Error: Key.status_effect().")
			break;
		};
	};
	
	function draw_oval(x, y, r, scale_x, scale_y, rotation, status, ctx) {
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
	
	function draw_circle(x, y, r, status, ctx) {
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
	
	function draw_half_circle(x, y, r, rotation, status, ctx) {
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

function Fingering_Chart(canvas) {
	/* Canvas Variables */
	this.canvas = canvas;
	this.ctx    = this.canvas.getContext('2d');
	/* Event Handlers */	
	/* Public Functions */
    this.draw = draw;
    /* Keys */
	low_bflat 	 			= new Key(40, 20,  10, -( 115 * Math.PI ) / 180, 'oval-large', this.ctx);
	low_b 		 			= new Key(30, 30,  10, -( 115 * Math.PI ) / 180, 'oval-large', this.ctx);
	//low_c 		 			= new Key();  
	low_d 		 			= new Key(10, 70,  10, Math.PI / 2, 			 'oval-large', this.ctx);
	whisper 	 			= new Key(70, 70,  10, 0, 						 'oval-small', this.ctx);
	thumb_csharp 			= new Key(70, 55,  10, 0, 						 'oval-med',   this.ctx);
	high_a 		 			= new Key(70, 40,  10, 0, 						 'oval-large', this.ctx);
	high_c 		 			= new Key(70, 25,  10, 0, 						 'oval-med',   this.ctx);
	high_d 		 			= new Key(70, 10,  10, 0, 						 'oval-small', this.ctx);
	thumb_bflat  			= new Key(70, 110, 10, 0, 						 'oval-large', this.ctx);
	low_e 		 			= new Key(70, 140, 20, 0, 						 'circle', 	   this.ctx);
	thumb_fsharp 			= new Key(70, 170, 10, -( 10 * Math.PI ) / 180,  'oval-large', this.ctx);
	thumb_aflat  			= new Key(75, 185, 10, -( 10 * Math.PI ) / 180,  'oval-large', this.ctx);
	trill_a_to_b 			= new Key(50, 180, 10, 0, 						 'oval-small', this.ctx);
	//trill_g 	 			= new Key();
	//trill_fsharp 			= new Key();
	//trill_eflat 			= new Key();
	//low_eflat 			= new Key();
	//low_dflat 			= new Key();
	//trill_csharp 			= new Key();
	//trill_bflat 			= new Key();
	//low_g 				= new Key();
	//low_f 				= new Key();
	//little_finger_fsharp 	= new Key();
	//little_finger_aflat 	= new Key();

	function draw() {
		this.ctx.strokeRect(0, 0, canvas.width, canvas.height);
		low_bflat.draw();
		low_b.draw();
		//low_c.draw();
		low_d.draw();
		whisper.draw();
		thumb_csharp.draw();
		high_a.draw();
		high_c.draw();
		high_d.draw();
		thumb_bflat.draw();
		low_e.draw();
		thumb_fsharp.draw();
		thumb_aflat.draw();
		trill_a_to_b.draw();
		//trill_g.draw();
		//trill_fsharp.draw();
		//trill.eflat.draw();
		//low_eflat.draw();
		//low_dflat.draw();
		//trill_chsarp.draw();
		//trill_bflat.draw();
		//low_g.draw();
		//low_f.draw();
		//little_finger_fsharp.draw();
		//little_finger_aflat.draw();
	};
};

function init() {
	var canvas = document.getElementById('fingering_view');
	var fingering_chart = new Fingering_Chart(canvas);
	setTimeout(fingering_chart.draw(), 1000);
};

window.onload=init;