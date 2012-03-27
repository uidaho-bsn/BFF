/**
 * @author Max Stillwell
 */

function Key(name, x, y, r, t, type, status) {
	/* Private Variables */
	var x = x;
	var y = y;
	var r = r;
	var t = t;
	var name  = name;
	var type  = type;
	var hover = false;
	if(status == 0) { status = 7; }
	else            { status = status; };
	/* Public Functions */
	this.Update   = Update;
	this.OnClick  = OnClick;
	this.ToString = ToString;

	/* Begin Draw Functions */
	function draw() {
		switch (type) {
			case 'circle':
				draw_circle();
			break;
			case 'circle-key':
				draw_circle();
			break;
			case 'half-circle':
				draw_half_circle(1.0, 1.0);
			break;
			case 'half-circle-flat':
				draw_half_circle(1.5, 0.5);
			break;
			case 'oval-small':
				draw_oval(0.75, 0.5);
			break;
			case 'oval-med':
				draw_oval(1.00, 0.5);
			break;
			case 'oval-large':
				draw_oval(1.50, 0.5);
			break;
			case 'box-up-left-curve':
				draw_box_up_left_curve();
			break;
			case 'box-right-end-curve':
				draw_right_end_curve();
			break;
			default:
				alert("Error: Key.draw(" + type + ").");
			break;
		};
	};
	
	function draw_oval(scale_x, scale_y) {
		ctx.save();
			ctx.translate(x, y);
			ctx.rotate(t);
			ctx.scale(scale_x, scale_y);
			
			ctx.beginPath();
				ctx.arc(0, 0, r, 0, Math.PI * 2, false);
				switch(parseInt(status)) {
					case 5: // Hatch Pattern (Optional Key)
						ctx.moveTo(-r * Math.cos(1.75 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.75 * Math.PI), -r * Math.sin(0.75 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.65 * Math.PI), -r * Math.sin(1.65 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.85 * Math.PI), -r * Math.sin(0.85 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.55 * Math.PI), -r * Math.sin(1.55 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.95 * Math.PI), -r * Math.sin(0.95 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.85 * Math.PI), -r * Math.sin(1.85 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.65 * Math.PI), -r * Math.sin(0.65 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.95 * Math.PI), -r * Math.sin(1.95 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.55 * Math.PI), -r * Math.sin(0.55 * Math.PI));
					break;
					case 6: // X (Flicked Key)
						ctx.moveTo(-r * Math.cos(1.25 * Math.PI), -r * Math.sin(1.25 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.25 * Math.PI), -r * Math.sin(0.25 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.75 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.75 * Math.PI), -r * Math.sin(0.75 * Math.PI));
					break;	
				};
			ctx.closePath();
			
			ctx.scale(scale_y, scale_x);
			if(status == 1) {
				ctx.fillStyle = "333333";
				ctx.fill();
			}
			if(hover) { ctx.strokeStyle = "red"; };
			ctx.stroke();
		ctx.restore();
	};
	
	function draw_circle() {
		ctx.save();
			ctx.translate(x, y);

			ctx.beginPath();
				ctx.arc(0, 0, r, 0, Math.PI * 2, false);
				switch (parseInt(status)) {
					case 5: // Hatch Pattern (Optional Key)
						ctx.moveTo(-r * Math.cos(1.75 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.75 * Math.PI), -r * Math.sin(0.75 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.65 * Math.PI), -r * Math.sin(1.65 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.85 * Math.PI), -r * Math.sin(0.85 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.55 * Math.PI), -r * Math.sin(1.55 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.95 * Math.PI), -r * Math.sin(0.95 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.85 * Math.PI), -r * Math.sin(1.85 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.65 * Math.PI), -r * Math.sin(0.65 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.95 * Math.PI), -r * Math.sin(1.95 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.55 * Math.PI), -r * Math.sin(0.55 * Math.PI));
					break;
					case 6: // X (Flicked Key)
						ctx.moveTo(-r * Math.cos(1.25 * Math.PI), -r * Math.sin(1.25 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.25 * Math.PI), -r * Math.sin(0.25 * Math.PI));
						ctx.moveTo(-r * Math.cos(1.75 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						ctx.lineTo(-r * Math.cos(0.75 * Math.PI), -r * Math.sin(0.75 * Math.PI));
					break;
				};
			ctx.closePath();
			
			if(status >= 1 && status <= 4) {
				ctx.fillStyle = "333333";
				ctx.fill();	
			}
			if(hover) { ctx.strokeStyle = "red"; };
			ctx.stroke();

			if(status >= 2 && status <= 4) {
				ctx.beginPath();
					switch(parseInt(status)) {
						case 2: // x/y Pressed Key
							ctx.arc(0, 0, r, 1.25 * Math.PI, 1.75 * Math.PI, false);
							ctx.lineTo(0,0);
							ctx.lineTo(-r * Math.cos(0.25 * Math.PI), -r * Math.sin(0.75 * Math.PI));
						break;
						case 3: // 1/2 Pressed Key
							ctx.arc(0, 0, r, 0, Math.PI, true);
							ctx.moveTo(-r, 0);
							ctx.lineTo(r, 0);
						break;
						case 4: // y/x Pressed Key
							ctx.arc(0, 0, r, 0.25 * Math.PI, 0.75 * Math.PI, false);
							ctx.lineTo(0,0);
							ctx.lineTo(-r * Math.cos(1.25 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						break;
					};
				ctx.closePath();
				
				ctx.fillStyle = "white";
				ctx.fill();
				ctx.stroke();
			};
		ctx.restore();
	};
	
	function draw_half_circle(scale_x, scale_y) {
		ctx.save();
			ctx.translate(x, y);
			ctx.rotate(t);
			ctx.scale(scale_x, scale_y);
			
			ctx.beginPath();
				ctx.arc(0, 0, r, 0, Math.PI, false);
				ctx.moveTo(-r, 0);
				ctx.lineTo(r, 0);
				switch(parseInt(status)) {
					case 5: // Hatch Pattern (Optional Key)
						ctx.moveTo(-r * Math.cos(1.75 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						ctx.lineTo(r - 5, r * Math.sin(Math.PI));
						ctx.moveTo(-r * Math.cos(1.65 * Math.PI), -r * Math.sin(1.65 * Math.PI));
						ctx.lineTo(r, r * Math.sin(Math.PI));
						ctx.moveTo(-r * Math.cos(1.85 * Math.PI), -r * Math.sin(1.85 * Math.PI));
						ctx.lineTo(r - 10, r * Math.sin(Math.PI));
						ctx.moveTo(-r * Math.cos(1.55 * Math.PI), -r * Math.sin(1.55 * Math.PI));
						ctx.lineTo(r, r * Math.sin(0.1 * Math.PI));
					break;
					case 6: // X (Flicked Key)
						ctx.moveTo(-r * Math.cos(1.25 * Math.PI), -r * Math.sin(1.25 * Math.PI));
						ctx.lineTo(-r, -r * Math.sin(Math.PI));
						ctx.moveTo(-r * Math.cos(1.75 * Math.PI), -r * Math.sin(1.75 * Math.PI));
						ctx.lineTo(r, r * Math.sin(Math.PI));
					break;
				};
			ctx.closePath();
			
			ctx.scale(scale_y, scale_x);
			if(status == 1) {
				ctx.fillStyle = "333333";
				ctx.fill();	
			}
			if(hover) { ctx.strokeStyle = "red"; };
			ctx.stroke();
		ctx.restore();
	};

	function draw_box_up_left_curve() {
		ctx.save();
			ctx.translate(x, y);
			ctx.rotate(t);
			
			ctx.beginPath();
				ctx.arc(0, 0, r, -( 180 * Math.PI ) / 180, -( 100 * Math.PI ) / 180, false);
				ctx.lineTo(10, -8);
				ctx.lineTo(6, 4);
				ctx.lineTo(-10, 4);
				ctx.lineTo(-10, 0);
				switch(parseInt(status)){
					case 5: // Hatch Pattern (Optional Key)
						ctx.moveTo(10, -8);
						ctx.lineTo(-10, 4);
						ctx.moveTo(6, -9);
						ctx.lineTo(-10, 0);
						ctx.moveTo(1, -9);
						ctx.lineTo(-9, -4);
						ctx.moveTo(8.5, -3.5);
						ctx.lineTo(-5, 4);
					break;
					case 6: // X (Flicked Key)
						ctx.moveTo(10, -8);
						ctx.lineTo(-10, 4);
						ctx.moveTo(6, 4);
						ctx.lineTo(-7, -8);
					break;
				};
			ctx.closePath();
			
			if(status == 1) {
				ctx.fillStyle = "333333";
				ctx.fill();	
			}
			if(hover) { ctx.strokeStyle = "red"; };
			ctx.stroke();
		ctx.restore();
	};
	
	function draw_right_end_curve() {
		ctx.save();
			ctx.translate(x, y);
			ctx.rotate(t);
			
			ctx.beginPath();
				ctx.moveTo(-10, 5);
				ctx.lineTo(-7, -7);
				ctx.lineTo(6, -5);
				ctx.arc(4.5, 0, r, -( 90 * Math.PI ) / 180, ( 90 * Math.PI ) / 180, false);
				ctx.lineTo(-10, 5);
				switch(parseInt(status)){
					case 5: // Hatch Pattern (Optional Key)
						ctx.moveTo(-10, 5);
						ctx.lineTo(9, -3.5);
						ctx.moveTo(-3, 5);
						ctx.lineTo(9, 0);
						ctx.moveTo(-9, 0.5);
						ctx.lineTo(6, -5);
						ctx.moveTo(-8, -3);
						ctx.lineTo(0, -5.5);
					break;
					case 6: // X (Flicked Key)
						ctx.moveTo(-7, -7);
						ctx.lineTo(9, 3.5);
						ctx.moveTo(-10, 5);
						ctx.lineTo(9, -3.5);
					break;
				};
			ctx.closePath();
			
			if(status == 1) {
				ctx.fillStyle = "333333";
				ctx.fill();	
			}
			if(hover) { ctx.strokeStyle = "red"; };
			ctx.stroke();
		ctx.restore();
	};
	/* End Draw Functions */
	
	/* Begin Update Functions */
	function Update() {
		draw();
		
		update_mouse();
		

	};	

	function update_mouse() {
		hover = false;
		
		if(type == 'oval-small' || type == 'oval-med' || type == 'oval-large') { //fix me for ellipse math!!!!
			var dx = (x * scale_X) - mouse_X;
			var dy = (y * scale_Y) - mouse_Y;

			var r2 = r * Math.sqrt(Math.pow(scale_X, 2) + Math.pow(scale_Y, 2)) * 0.7;
			
			if(dx * dx + dy * dy <= r2 * r2) { hover = true; };
		}
		else if (type == 'half-circle' || type == 'half-circle-flat') { // fix me for semi circle math!!!
			var dx = (x * scale_X) - mouse_X;
			var dy = (y * scale_Y) - mouse_Y;

			var r2 = r * Math.sqrt(Math.pow(scale_X, 2) + Math.pow(scale_Y, 2)) * 0.7;
			
			if(dx * dx + dy * dy <= r2 * r2) { hover = true; };
		}
		else {
			var dx = (x * scale_X) - mouse_X;
			var dy = (y * scale_Y) - mouse_Y;
			
			var r2 = r * Math.sqrt(Math.pow(scale_X, 2) + Math.pow(scale_Y, 2)) * 0.7;
			
			if(dx * dx + dy * dy <= r2 * r2) { hover = true; };
		};
		
		if(hover       && pointer == '')   { pointer = name; }
		else if(!hover && pointer == name) { pointer = ''; };
	};
	
	function OnClick() {
		if(hover) {
			switch (type) {
				case 'circle':
					if(status >= 7) { status = 0; };
					status += 1;
				break;
				default:
					switch (parseInt(status)) {
						case 1:
							status = 5;
						break;
						case 5:
							status = 6;
						break;
						case 6:
							status = 7;
						break;
						case 7:
							status = 1;
						break;
					};
				break;
			};
			
			return true;
		};
	};
	/* End Update Functions */
	
	/* Begin Helpers */
	function ToString() {
		return String(status);
	};
	/* End Helpers */
};