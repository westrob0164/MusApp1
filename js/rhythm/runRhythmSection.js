
import { getMusicInfo  } from './getMusicInfo.js';
import { rhythmPractice  } from './rhythmSelection.js';
import { midiRhythmSetup  } from './midiRhythmSetup.js';


export function runRhythmSection(beatType) {

    //$("#rhythmMiniControls2").empty();  


    $("#splashImage").empty();
    $(".contentWraper").empty();

    var rhythmSelStr = rhythmPractice(beatType);

    // zero out the start Rhythm values array
    rhythmFragments.startRhythmValues  = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   
    $(".contentWraper").html(rhythmSelStr);	

    $("#submit").on("click", function(e){

        // check to see if a rhythm fragment is selected
        var selectArray = rhythmFragments.startRhythmValues;
        var checkArray = selectArray.includes(1);
        
        if (checkArray  == false) {
            alert("please select a rhythm fragment"); 
        } else {       

            getMusicInfo(beatType);
            midiRhythmSetup();
            
            $("#createRhythmLine").empty();

            var updateSubmitButton = `<button class = "selectionButton" id="updateRhythm">Update rhythm line</button>`;
            $("#createRhythmLine").html(updateSubmitButton);
        
            $("#updateRhythm").on("click", function(){

                var selectArray2 = rhythmFragments.startRhythmValues;
                var checkArray2 = selectArray2.includes(1);

                if (checkArray2  == false) {
                    alert("please select a rhythm fragment"); 
                } else {  

                    $("#notes").empty();
                    getMusicInfo(beatType);
                }
            });
        }
    })   
}