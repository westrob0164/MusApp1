


export function playTonic(midiNote) {

       
    var getTempo = document.getElementById('sliderRange').value;   // get the tempo value  
    var getDynamicValue = document.getElementById('input').value;           // get the volume value
    var instrument = $( "#midiInstr" ).val();                           // get the instrument value
    var pitchLevel = $( "#pitchLevelNumber" ).val();                   // get the pitch modification value
    
    var dynamicValues = [16,33,49,64,80,96,112,127];
	var velocity = dynamicValues[getDynamicValue];

    var tempo = 60/getTempo;  

    MIDI.programChange(0, instrument);
    MIDI.noteOn(0, midiNote-pitchLevel, velocity, 0);
    MIDI.noteOff(0, midiNote-pitchLevel,tempo-.05);
    
    

}