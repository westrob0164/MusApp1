



export function playRhythm(midiArray, numberOfRhythmFragments) {
   
    var getTempo = document.getElementById('sliderRange').value;   // get the tempo value  
    var getRhythmValue = document.getElementById('inputRhythm').value;  // get the volume value

    var getBeatValue = document.getElementById('inputBeat').value;  // get the volume value
    
    var dynamicValues = [0,16,33,49,64,80,96,112,127];
    var velocity = dynamicValues[getRhythmValue];

    var velocity2 = dynamicValues[getBeatValue];
    
    var instrumentRhythm = 114;
    var instrumentBeat = 114;

          
    var midiStringOn = [0];
    var midiStringOff =[];

    var tempo = 60/getTempo;  

    var myVar = setInterval(alertFunc, 83.33*tempo);

    var i = 0;

    function alertFunc() {

        if (i < midiArray.length) {
            
            if (midiArray[i] == 1) {
                
                // 	select snare drum
                MIDI.programChange(9, instrumentRhythm);				
                MIDI.noteOn(9, 40, velocity, 0);
            }

            if (i%12 == 0) {
                //  bass drum
                MIDI.programChange(9, instrumentBeat);
                MIDI.noteOn(9, 35, velocity2, 0);     
            }
            i++;

        } else {
            clearInterval(myVar);
            $('#playRhythm').prop('disabled', false);
            $( "#playRhythm" ).removeClass( "solfageNotesDisabled" );
            $( "#playRhythm" ).addClass( "solfageNotesButton" );
        }
    }

    $("#stopMusic").on("click", function(){         
        clearInterval(myVar);
        $('#playRhythm').prop('disabled', false);
        $( "#playRhythm" ).removeClass( "solfageNotesDisabled" );
        $( "#playRhythm" ).addClass( "solfageNotesButton" );
    });  
}




