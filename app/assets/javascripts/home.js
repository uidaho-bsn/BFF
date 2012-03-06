/*function Staff(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
    
	this.draw = function() {
    	var ctx = document.getElementById('note_view').getContext('2d');
		var img = new Image();
		img.onload = function()
		{
		  ctx.beginPath();
		    ctx.drawImage(img, this.x, this.y, this.width, this.height);
		  ctx.closePath();
		  ctx.stroke();
		};
		img.src = 'images/music_staff.png';
  	}
}

function draw_interface() {
	staff = new Staff(0, 0, 500, 100);
  	staff.draw();
}

window.onload=draw_interface;*/
