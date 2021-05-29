

import { playRhythm }    from './rhythmMidi.js';
import { rhythmButtons } from './rhythmButtons.js';

export function getMusicInfo(beatType) {

    var outputMusicLine = drawMusicLine(beatType);  

    renderOutput('#notes', outputMusicLine[1], outputMusicLine[0]);  

    //create the rhythm buttons
    rhythmButtons();

    // play the music line
    $("#playRhythm").on("click", function(){

        var baseBeatLength =eval(outputMusicLine[3]) + eval(outputMusicLine[4]);

        playRhythm(outputMusicLine[2], baseBeatLength);

        $('#playRhythm').prop('disabled', true);
        $( "#playRhythm" ).removeClass( "solfageNotesButton" );
        $( "#playRhythm" ).addClass( "solfageNotesDisabled" );
    });

}
    
// get the rhythm fragment list
function rhythmFragArray(beatType){ 
 
    if (beatType == 1)      {var rhythFragment = rhythmFragments.rhythmHalf;}
    else if (beatType == 2) {var rhythFragment = rhythmFragments.rhythmComplex;}
    else                    {var rhythFragment = rhythmFragments.rhythmQuarter;}

    //zero out the array
    var rhythmFragIncluded = [];

    for (var i = 0; i < selectedRhythmFragments.length; i++) {

        // create an array of the rhythm fragments ids that are selected
        if (selectedRhythmFragments[i] == 1) {
            var rhythmFragIncludedAdd = [ [ rhythFragment[i].fragment, rhythFragment[i].midiFrag ] ];
        
            //append to the 'rhythmFragIncluded' array
            Array.prototype.push.apply(rhythmFragIncluded, rhythmFragIncludedAdd);             
        }
    } 
    return rhythmFragIncluded;
}

//get the key and time signature
function keyAndTimeSignature() {

    var timeSignature = document.getElementsByTagName('option');

    //zero out the array
    var keyAndTimeSig = [];
  
    for (var i = 0; i < timeSignature.length; i++) {

        // create an array for the time signature
        if (timeSignature[i].selected == true) {

            var keyAndTimeSigAdd =[timeSignature[i].value];
            Array.prototype.push.apply(keyAndTimeSig, keyAndTimeSigAdd);            
        }
    }
    console.log("key", keyAndTimeSig);
    return keyAndTimeSig;
}
   
//set up stave details
function drawMusicLine(beatType) {

    // default values
    var spaceNo = -30;
    var lengthOfOneMeasure = 250;

    // get the array of selected rhythm items
    var rhyFragArray = rhythmFragArray(beatType);     
    
    //get stave information
    var keyAndTime = keyAndTimeSignature();                                         
    
    // set clef
    var clef = "percussion";

    if (beatType == 1) {var beatValue = 2;}
    else if (beatType == 2) {var beatValue = 2;}
    else               {var beatValue = 4;}

    //create time signature 
    if (beatType == 2) {
        var time = `${keyAndTime[0]*3}/8`;
    } else {
        var time = `${keyAndTime[0]}/${beatValue}`;
    }
                                      

    var barLocation = keyAndTime[0];

    // Get the number of Measures
    var numOfMeasuresTotal = keyAndTime[1];
    
    // determine the number of rhythm fragments to place
    var numOfMeasures = numOfMeasuresTotal - 1;                                      

    var numberOfRhythmFragments = keyAndTime[0] * numOfMeasures;   

    if (numOfMeasuresTotal < 5) {
        var lengthOfOneMeasure = 350;
        var rhythmLineLength = lengthOfOneMeasure * numOfMeasures; 
        //var lengthOfOneMeasure = 350;
    } else{
        var lengthOfOneMeasure = 263;
        var rhythmLineLength = lengthOfOneMeasure * 4;
        //
    }                         


    // determine the number of elements in the taskArray array
    var numberOfElements = rhyFragArray.length;
    
    var musicLine = `options space=${spaceNo}\n`;
        musicLine = `${musicLine}tabstave notation=true tablature=false clef=${clef} time=${time}\nnotes`;

    //create empty array
    var midiDrumString = [];
    
    // create the output
    for (let i = 0; i < numberOfRhythmFragments; i++) {

        // get the random number
        var solo = Math.floor(Math.random() * numberOfElements);

        var rhythmFragOutput = rhyFragArray[solo];

        // get the number out of the taskArray
        musicLine = `${musicLine} ${rhythmFragOutput[0]}`;

        var midiDrumStringAdd = rhythmFragOutput[1];
        Array.prototype.push.apply(midiDrumString, midiDrumStringAdd);       

        var barLine = (i + 1) % barLocation;
        if (barLine == 0) {
            musicLine = `${musicLine}|`;
        }

        if (i == (keyAndTime[0]*4)-1 || i == (keyAndTime[0]*8)-1 || i == (keyAndTime[0]*12)-1) {
            musicLine = `${musicLine}\noptions space=20\n`;
            musicLine = `${musicLine}tabstave notation=true tablature=false clef=${clef} time=${time}\nnotes`;
        }      
    }

    //ending note, based on the beats per measure
    if (beatType == 1) {
        if (keyAndTime[0] == 4) {
            musicLine = `${musicLine} ${rhythmFragments.rhythmHalf[9].fragment}|`
        } else if (keyAndTime[0] == 3){
            musicLine = `${musicLine} ${rhythmFragments.rhythmHalf[10].fragment}|`
        }else{
            musicLine = `${musicLine} ${rhythmFragments.rhythmHalf[11].fragment}|`
        }
    } else if (beatType == 2) {
        if (keyAndTime[0] == 4) {
            musicLine = `${musicLine} ${rhythmFragments.rhythmComplex[26].fragment}|`
        } else if (keyAndTime[0] == 3){
            musicLine = `${musicLine} ${rhythmFragments.rhythmComplex[27].fragment}|`
        }else{
            musicLine = `${musicLine} ${rhythmFragments.rhythmComplex[28].fragment}|`
        }
    } else {     
        if (keyAndTime[0] == 4) {
            musicLine = `${musicLine} ${rhythmFragments.rhythmQuarter[9].fragment}|`
        } else if (keyAndTime[0] == 3){
            musicLine = `${musicLine} ${rhythmFragments.rhythmQuarter[10].fragment}|`
        }else{
            musicLine = `${musicLine} ${rhythmFragments.rhythmQuarter[11].fragment}|`
        }
    }
   

    var leadInBeats = [];
    //add the preceeding and trailing beats
    for (let i = 0; i < keyAndTime[0]; i++) {    
        var leadInBeatsAdd = rhythmFragments.soloBaseBeats;
        Array.prototype.push.apply(leadInBeats,leadInBeatsAdd);
    }

    var midiDrumStringPlusLeadIn = leadInBeats.concat(midiDrumString);

    //add the ending snare beats
    var midiDrumStringAddEnding =  midiDrumStringPlusLeadIn.concat(rhythmFragments.endBeats);

    var endingBeats = [];
    //add the rest of the ending base beats
    for (let i = 0; i < keyAndTime[0]-1; i++) {    
        var endingBeatsAdd = rhythmFragments.soloBaseBeats;
        Array.prototype.push.apply(endingBeats,endingBeatsAdd);
    }

    //final midiRhythmArray
    var midiRhythmOutput = midiDrumStringAddEnding.concat(endingBeats);

    var returnValues = [musicLine , rhythmLineLength, midiRhythmOutput, numberOfRhythmFragments, barLocation];
    console.log("the return Values", returnValues);
    return returnValues;
}


