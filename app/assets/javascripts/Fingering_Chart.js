/**
 * @author Max Stillwell
 */

function Fingering_Chart(offset_x, offset_y, keys_string, note, tone, help, first) {
	/* Private Variables */
	var x = x;
	var y = y;
	var fingering  = new Fingering(keys_string, offset_x, offset_y + 40);
	var note       = new Note(note, tone, offset_x, offset_y + 20, 200);
	/* Public Functions */
	this.Update = Update;
	this.OnClick = OnClick;
	this.ToString = ToString;
	
	/* Begin Update Functions */
	function Update () {
		ctx.translate(offset_x, offset_y);
		
		update_mouse();
	};
	
	function update_mouse() {
		ctx.translate(0, 20);
		note.Update();
		
		ctx.translate(0, 20);
		fingering.Update();
	};
	/* End Update Functions */
	
	/* Begin Events */
	function OnClick () {		
		fingering.OnClick();
		note.OnClick();
	};
	/* End Events */
	
	/* Begin Helper Functions */
	function ToString(type) {
		switch(type) {
			case "keys":
				return fingering.ToString();
			break;
			case "note_tones":
				return note.ToString();
			break;
			default:
				return fingering.ToString();
			break;
		}
	};
	/* End Helper Functions */
};
