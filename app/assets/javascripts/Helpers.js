/**
 * @author Max Stillwell
 */

function cursorOverClickable() {
	if(fingering_chart.low_bflat.contains())                 { return 'low_bflat'; }
	else if(fingering_chart.low_b.contains())                { return 'low_b'; }
	else if(fingering_chart.low_c.contains())                { return 'low_c'; }
	else if(fingering_chart.low_d.contains())                { return 'low_d'; }
	else if(fingering_chart.whisper.contains())              { return 'whisper'; }
	else if(fingering_chart.thumb_csharp.contains())         { return 'thumb_csharp'; }
	else if(fingering_chart.high_a.contains())               { return 'high_a'; }
	else if(fingering_chart.high_c.contains())               { return 'high_c'; }
	else if(fingering_chart.high_d.contains())               { return 'high_d'; }
	else if(fingering_chart.thumb_bflat.contains())          { return 'thumb_bflat'; }
	else if(fingering_chart.low_e.contains())                { return 'low_e'; }
	else if(fingering_chart.thumb_fsharp.contains())         { return 'thumb_fsharp'; }
	else if(fingering_chart.thumb_aflat.contains())          { return 'thumb_aflat'; }
	else if(fingering_chart.trill_a_to_b.contains())         { return 'trill_a_to_b'; }
	else if(fingering_chart.trill_g.contains())              { return 'trill_g'; }
	else if(fingering_chart.hole_1.contains())               { return 'hole_1'; }
	else if(fingering_chart.trill_fsharp.contains())         { return 'trill_fsharp'; }
	else if(fingering_chart.hole_2.contains())               { return 'hole_2'; }
	else if(fingering_chart.trill_eflat.contains())          { return 'trill_eflat'; }
	else if(fingering_chart.hole_3.contains())               { return 'hole_3'; }
	else if(fingering_chart.low_eflat.contains())            { return 'low_eflat'; }
	else if(fingering_chart.low_dflat.contains())            { return 'low_dflat'; }
	else if(fingering_chart.trill_csharp.contains())         { return 'trill_csharp'; }
	else if(fingering_chart.hole_4.contains())               { return 'hole_4'; }
	else if(fingering_chart.hole_5.contains())               { return 'hole_5'; }
	else if(fingering_chart.trill_bflat.contains())          { return 'trill_bflat'; }
	else if(fingering_chart.low_g.contains())                { return 'low_g'; }
	else if(fingering_chart.low_f.contains())                { return 'low_f'; }
	else if(fingering_chart.little_finger_fsharp.contains()) { return 'little_finger_fsharp'; }
	else if(fingering_chart.little_finger_aflat.contains())  { return 'little_finger_aflat'; }
	else if(fingering_chart.note.contains())                 { return 'bottom'; }
	else if(fingering_chart.contains())						 { return 'help'; };

	return 'none';
}