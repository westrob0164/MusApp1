


export function playMusicArray(midiArray, playType) {

       
    var getTempo = document.getElementById('sliderRange').value;   // get the tempo value  
    var getDynamicValue = document.getElementById('input').value;           // get the volume value
    var instrument = $( "#midiInstr" ).val();                           // get the instrument value
    var pitchLevel = $( "#pitchLevelNumber" ).val();                   // get the pitch modification value
    
    var dynamicValues = [16,33,49,64,80,96,112,127];
	var velocity = dynamicValues[getDynamicValue];

    var tempo = 60/getTempo;  
    
    var myVar = setInterval(alertFunc, 1000*tempo);
    
    var i = 0;

    function alertFunc() {

        if (i < midiArray.length) {

            MIDI.programChange(0, instrument);
            MIDI.noteOn(0, midiArray[i][2]-pitchLevel, velocity, 0);
            MIDI.noteOff(0, midiArray[i][2]-pitchLevel,tempo-.05);
            i++;
        } else {
            if (playType == 1) {
                i = 0;
            } else {
                clearInterval(myVar);

                // enable play music button
                $('#playMusic').prop('disabled', false);
                $( "#playMusic" ).removeClass( "solfageMusicDisabled" );
                $( "#playMusic" ).addClass( "solfageMusicButton" );

                // enable play loop button
                $('#playLoop').prop('disabled',  false);
                $( "#playLoop" ).removeClass( "solfageMusicDisabled" );
                $( "#playLoop" ).addClass( "solfageMusicButton" );

            }

        }
    }


    $("#stopMusic").on("click", function(){         
        clearInterval(myVar);

        // enable play music button
        $('#playMusic').prop('disabled', false);
        $( "#playMusic" ).removeClass( "solfageMusicDisabled" );
        $( "#playMusic" ).addClass( "solfageMusicButton" );

        // enable play loop button
        $('#playLoop').prop('disabled',  false);
        $( "#playLoop" ).removeClass( "solfageMusicDisabled" );
        $( "#playLoop" ).addClass( "solfageMusicButton" );


    });
}