/**
 * @author Max Stillwell
 */

function Fingering_Chart(drawAreaW, drawAreaH, x, y, keys_string, note, tone, help, first) {
	/* Private Variables */
	var x = x;
	var y = y;
	var drawArea_W = drawAreaW;
	var drawArea_H = drawAreaH;
	var fingering  = new Fingering(keys_string, x, y);
	var note       = new Note(note, tone, x, y);
	/* Public Functions */
	this.Update = Update;
	this.OnClick = OnClick;
	this.ToString = ToString;
	
	/* Begin Update Functions */
	function Update () {
		ctx.translate(x, y);
		
		update_mouse();
	};
	
	function update_mouse() {
		fingering.Update();
		note.Update();
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
