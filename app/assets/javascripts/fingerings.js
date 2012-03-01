function Fingering(x, y, width, height) {
	/* Canvas Variables */
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.ctx = document.getElementById('fingering_view').getContext('2d');
	/* Public Functions */
    this.draw_chart = draw_chart;
    /* Status Variables */
    this.status = new Array();
    this.status[0] = 7;  this.status[1] = 7;  this.status[2] = 7;  this.status[3] = 7;
    this.status[4] = 7;  this.status[5] = 7;  this.status[6] = 7;  this.status[7] = 7;
    this.status[8] = 7;  this.status[9] = 7;  this.status[10] = 7; this.status[11] = 7;
    this.status[12] = 7; this.status[13] = 7; this.status[14] = 7; this.status[15] = 7;
    this.status[16] = 7; this.status[17] = 7; this.status[18] = 7; this.status[19] = 7;
    this.status[20] = 7; this.status[21] = 7; this.status[22] = 7; this.status[23] = 7;
	this.status[24] = 7; this.status[25] = 7;
	     
	function draw_chart() {
		draw_low_bflat(this.status, this.ctx)
		draw_low_b(this.status, this.ctx)
		draw_low_c(this.status, this.ctx)
		draw_low_d(this.status, this.ctx)
		draw_whisper(this.status, this.ctx)
		draw_thumb_csharp(this.status, this.ctx)
		draw_high_a(this.status, this.ctx)
		draw_high_c(this.status, this.ctx)
		draw_high_d(this.status, this.ctx)
		draw_thumb_bflat(this.status, this.ctx)
		draw_low_e(this.status, this.ctx)
		draw_thumb_fsharp(this.status, this.ctx)
		draw_thumb_aflat(this.status, this.ctx)
		draw_trill_a_to_b(this.status, this.ctx)
		draw_trill_g(this.status, this.ctx)
		draw_trill_fsharp(this.status, this.ctx)
		draw_trill_eflat(this.status, this.ctx)
		draw_low_eflat(this.status, this.ctx)
		draw_low_dflat(this.status, this.ctx)
		draw_trill_csharp(this.status, this.ctx)
		draw_trill_bflat(this.status, this.ctx)
		draw_low_g(this.status, this.ctx)
		draw_low_f(this.status, this.ctx)
		draw_little_finger_fsharp(this.status, this.ctx)
		draw_little_finger_aflat(this.status, this.ctx)
  	}
  	
  	function draw_low_bflat(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
	function draw_low_b(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
  	function draw_low_c(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
  	function draw_low_d(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
  	function draw_whisper(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
  	function draw_thumb_csharp(status, ctx) {
		if (status[5] == 1) {
			ctx.fillStyle = "orange"
			draw_oval(30, 20, 10, 1.0, 0.5, 0, 'fill', ctx)
		}
		else if (status[5] == 2) {
			
		}
		else if (status[5] == 3) {
			
		}
		else if (status[5] == 4) {
			
		}
		else if (status[5] == 5) {
			
		}
		else if (status[5] == 6) {
			
		}
  		else if (status[5] == 7) {
  			draw_oval(30, 20, 10, 1.0, 0.5, 0, 'stroke', ctx)
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
  	function draw_high_a(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
  			draw_oval(20, 50, 10, 1.5, 0.5, Math.PI / 4, 'stroke', ctx)
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
  	function draw_high_c(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
  			draw_oval(30, 80, 10, 1.0, 0.5, 0, 'stroke', ctx)
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
  	function draw_high_d(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
  	function draw_thumb_bflat(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
  	function draw_low_e(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
  	function draw_thumb_fsharp(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}	
  	}
  	
  	function draw_thumb_aflat(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}	
  	}
  	
  	function draw_trill_a_to_b(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}	
  	}
  	
  	function draw_trill_g(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}	
  	}
  	
  	function draw_trill_fsharp(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}	
  	}
  	
  	function draw_trill_eflat(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}	
  	}
  	
  	function draw_low_eflat(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
  	function draw_low_dflat(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}
  	
  	function draw_trill_csharp(status, ctx) {
 		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		} 		
  	}
  	
  	function draw_trill_bflat(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}  		
  	}
  	
  	function draw_low_g(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}	
  	}
  	
  	function draw_low_f(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}	
  	}
  	
  	function draw_little_finger_fsharp(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}	
  	}
  	
  	function draw_little_finger_aflat(status, ctx) {
		if (status[0] == 1) {

		}
		else if (status[0] == 2) {
			
		}
		else if (status[0] == 3) {
			
		}
		else if (status[0] == 4) {
			
		}
		else if (status[0] == 5) {
			
		}
		else if (status[0] == 6) {
			
		}
  		else if (status[0] == 7) {
		}
		else {
			alert("A javascript error has occured. Could not draw canvas correctly!");
		}
  	}

	function draw_oval(x, y, r, scale_x, scale_y, rotation, stroke_fill, ctx) {
		ctx.save();
			ctx.scale(scale_x, scale_y);
			ctx.rotate(rotation);
			ctx.beginPath();
				ctx.arc(x, y, r, 0, Math.PI * 2, false);
			ctx.scale(scale_y, scale_x);
			ctx.rotate(-rotation);
			if(stroke_fill == 'fill') {
				ctx.fill();
			}
			else if(stroke_fill == 'stroke') {
				ctx.stroke();
			}
			else {
				alert("An error has occured in draw oval!");
			}
			ctx.closePath();
		ctx.restore();
	}
	
	function draw_circle(x, y, r, stroke_fill, ctx) {
		ctx.beginPath();
			ctx.arc(x, y, r, 0, Math.PI * 2, false);
			if(stroke_fill == 'fill') {
				ctx.fill();
			}
			else if(stroke_fille == 'stroke') {
				ctx.stroke();
			}
			else {
				alert("An error has occured in draw circle!");
			}
	}
}

function draw() {
	var f_chart = new Fingering(0, 0, 500, 100);
	
  	f_chart.draw_chart();
}

window.onload=draw;