/**
 * @author Max Stillwell
 */

function Key(name, x, y, r, t, type, status, offset_x, offset_y, canvas_type) {
	/* Private Variables */
	var key_hover = false;
	/* Public Functions */
	this.Update   = Update;
	this.OnClick  = OnClick;
	this.ToString = ToString;

	/* Begin Draw Functions */
	function draw() {
		ctx.strokeStyle = "black";
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
				draw_half_circle(1.25, 0.75);
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
				ctx.fillStyle = "#333333";
				ctx.fill();
			}
			if(key_hover) { ctx.strokeStyle = "red"; };
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
				ctx.fillStyle = "#333333";
				ctx.fill();	
			}
			if(key_hover) { ctx.strokeStyle = "red"; };
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
				ctx.fillStyle = "#333333";
				ctx.fill();	
			}
			if(key_hover) { ctx.strokeStyle = "red"; };
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
						ctx.moveTo(10, -8);    ctx.lineTo(-10, 4);
						ctx.moveTo(6, -9);     ctx.lineTo(-10, 0);
						ctx.moveTo(1, -9);     ctx.lineTo(-9, -4);
						ctx.moveTo(8.5, -3.5); ctx.lineTo(-5, 4);
					break;
					case 6: // X (Flicked Key)
						ctx.moveTo(10, -8); ctx.lineTo(-10, 4);
						ctx.moveTo(6, 4);   ctx.lineTo(-7, -8);
					break;
				};
			ctx.closePath();
			
			if(status == 1) {
				ctx.fillStyle = "#333333";
				ctx.fill();	
			}
			if(key_hover) { ctx.strokeStyle = "red"; };
			ctx.stroke();
		ctx.restore();
	};
	
	function draw_right_end_curve() {
		ctx.save();
			ctx.translate(x, y);
			ctx.rotate(t);
			
			ctx.beginPath();
				ctx.moveTo(-10, 4.5);
				ctx.lineTo(-7, -7);
				ctx.lineTo(6, -5);
				ctx.arc(4.5, 0, r, -( 90 * Math.PI ) / 180, ( 90 * Math.PI ) / 180, false);
				ctx.lineTo(-10, 4.5);
				switch(parseInt(status)){
					case 5: // Hatch Pattern (Optional Key)
						ctx.moveTo(-10, 5);  ctx.lineTo(9, -3.5);
						ctx.moveTo(-3, 5);   ctx.lineTo(9, 0);
						ctx.moveTo(-9, 0.5); ctx.lineTo(6, -5);
						ctx.moveTo(-8, -3);  ctx.lineTo(0, -5.5);
					break;
					case 6: // X (Flicked Key)
						ctx.moveTo(-7, -7); ctx.lineTo(9, 3.5);
						ctx.moveTo(-10, 5); ctx.lineTo(9, -3.5);
					break;
				};
			ctx.closePath();
			
			if(status == 1) {
				ctx.fillStyle = "#333333";
				ctx.fill();	
			}
			if(key_hover) { ctx.strokeStyle = "red"; };
			ctx.stroke();
		ctx.restore();
	};
	/* End Draw Functions */
	
	/* Begin Update Functions */
	function Update() {
		draw();
		
		if(canvas_type != "show") { update_mouse(); };
	};	

	function update_mouse() {
		key_hover = false;
		
		if(type == "oval-small" || type == "oval-med" || type == "oval-large") {
			var rx = r * Math.cos(0)           * scale_X;
			var ry = r * Math.sin(Math.PI / 2) * scale_Y;
			
			switch(type) {
				case "oval-small":
					rx *= 0.75; ry *= 0.50;
				break;
				case "oval-med":
					rx *= 1.0; ry *= 0.5;
				break;
				case "oval-large":
					rx *= 1.5; ry *= 0.5;
				break;
			};
			
			var X =  (mouse_X - ((x + offset_x) * scale_X)) * Math.cos(t) + (mouse_Y - ((y + offset_y) * scale_Y)) * Math.sin(t);
			var Y = -(mouse_X - ((x + offset_x) * scale_X)) * Math.sin(t) + (mouse_Y - ((y + offset_y) * scale_Y)) * Math.cos(t);
			
			if((((X * X) / (rx * rx)) + ((Y * Y) / (ry * ry))) <= 1) { key_hover = true; };
		}
		else if (type == "half-circle" || type == "half-circle-flat") {
			var sr =   r * Math.sqrt((scale_X * scale_X) + (scale_Y * scale_Y)) * 0.7;
			var ax = -sr * Math.cos(t);
			var ay = -sr * Math.sin(t);
			var bx =  sr * Math.cos(t);
			var by =  sr * Math.sin(t);
			
			var v1x = bx - ((x + offset_x) * scale_X);
			var v1y = by - ((y + offset_y) * scale_Y);
			var v2x = mouse_X - ((x + offset_x) * scale_X);
			var v2y = mouse_Y - ((y + offset_y) * scale_Y);
			
			prod = v1x * v2y - v1y * v2x;
			
			if(!(t <= 0 && t > -Math.PI) && (t != -( 300 * Math.PI ) / 180)) {
				if(prod >= 0 && (Math.sqrt(Math.pow(((x + offset_x) * scale_X) - mouse_X, 2) + Math.pow(((y + offset_y) * scale_Y) - mouse_Y, 2))) <= sr) { key_hover = true; };
			}
			else {
				if(prod <= 0 && (Math.sqrt(Math.pow(((x + offset_x) * scale_X) - mouse_X, 2) + Math.pow(((y + offset_y) * scale_Y) - mouse_Y, 2))) <= sr) { key_hover = true; };
			};
		}
		/*else if (type == "half-circle-flat") {
			
		}*/
		/*else if (type == "box-up-left-curve") {
			var ax = (-10 + offset_x) * scale_X; var ay =  (4 + offset_y) * scale_Y;
			var bx =  (-9 + offset_x) * scale_X; var by = (-9 + offset_y) * scale_Y;
			var cx =  (10 + offset_x) * scale_X; var cy = (-8 + offset_y) * scale_Y;
			var dx =   (6 + offset_x) * scale_X; var dy =  (4 + offset_y) * scale_Y;
			
			var AB = ((mouse_X >= ax && mouse_Y >= ay) && (mouse_X >= bx && mouse_Y <= by))?true:false;
			var BC = ((mouse_X >= bx && mouse_Y <= by) && (mouse_X <= cx && mouse_Y <= cy))?true:false;
			var CD = ((mouse_X <= cx && mouse_Y <= cy) && (mouse_X <= dx && mouse_Y >= dy))?true:false;
			var DA = ((mouse_X <= dx && mouse_Y >= dy) && (mouse_X >= ax && mouse_Y >= ay))?true:false;
			
			if(AB && BC && CD && DA) { key_hover = true; };
		}*/
		/*else if (type == "box-right-end-curve") {
			
		}*/
		else {
			var dx = ((x + offset_x) * scale_X) - mouse_X;
			var dy = ((y + offset_y) * scale_Y) - mouse_Y;

			var r2 = r * Math.sqrt(Math.pow(scale_X, 2) + Math.pow(scale_Y, 2)) * 0.7;
			
			if(dx * dx + dy * dy <= r2 * r2) { key_hover = true; };
		};
		
		if(key_hover       && pointer == '')   { pointer = name; }
		else if(!key_hover && pointer == name) { pointer = ''; };
	};
	/* End Update Functions */
		
	/* Begin Event Functions */
	function OnClick() {
		if(key_hover) {
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
	/* End Event Functions */
	
	/* Begin Helpers */
	function ToString() {
		return String(status);
	};
	/* End Helpers */
};