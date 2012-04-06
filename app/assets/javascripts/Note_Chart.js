/**
 * @author Max Stillwell
 */

function Note_Chart(offset_x, offset_y) {
	/* Private Variables */
	var note = new Note("f3", "♮", offset_x, offset_y + 20, 200, "search");
	/* Public Functions */
	this.Update = Update;
	this.OnClick = OnClick;
	this.ToString = ToString;
	
	/* Begin Update Functions */
	function Update () {
		ctx.translate(offset_x, offset_y + 20);
		
		update_mouse();
	};
	
	function update_mouse() {
		note.Update();
	};
	/* End Update Functions */
	
	/* Begin Events */
	function OnClick () {		
		note.OnClick();
	};
	/* End Events */
	
	/* Begin Helper Functions */
	function ToString() {
		return note.ToString();
	};
	/* End Helper Functions */
};
