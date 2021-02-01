//                         createSOlfegeMusicLine.js                                          //
//  created by R West, April 2020
//
//  dependencies:  outputString (outputStringSolfage.js)
//
//  functions:  createSolfageMusicLine 
//              oneOctave 
//              twoOctaves 
//              minorMode 
//              updateNoteArray
//              randomUpdate
//

import { create4thLevelFormula  } from './createFourthLevel.js';
import { outputString  } from './outputStringSolfage.js';

import { playMusicArray  } from './midiSound.js';
import { playTonic  } from './playTonic.js';

import { solfageButtons  } from './solfageButtons.js';

export function createSolfegeMusicLine(keyToPlay, label, outputType) {

    //default values
    var numberOfNotes = 16;     // display the number of notes for the array
    var numberOfElements = 6;   // the number of elements for the random number generator
  
    //empty the previous text
    $("#solfegeNotes").empty();

    //create the output text and solfage toggle button    
    var solfegeTitleText = `<p>Sing the following in the key of ${label}<br><br></p>`;
  
    $("#solfegeTitle2").html(solfegeTitleText);

    solfageButtons(outputType);
   
    var toggleSwitch = 1;
    var getMusicArray = setupArray(keyToPlay, outputType, numberOfNotes, numberOfElements);   
    createOutput(keyToPlay, getMusicArray, outputType, numberOfNotes, toggleSwitch);   
       
    $("#updateSol").on("click", function(e){
        $("#solfegeNotes").empty();    
        
        getMusicArray = setupArray(keyToPlay, outputType, numberOfNotes, numberOfElements);     
       
        createOutput(keyToPlay, getMusicArray, outputType, numberOfNotes, toggleSwitch); 
    });

    $("#playMusic").on("click", function(e){

        // disable play music button
        $('#playMusic').prop('disabled', true);
        $( "#playMusic" ).removeClass( "solfageMusicButton" );
        $( "#playMusic" ).addClass( "solfageMusicDisabled" );

        // disable play loop button
        $('#playLoop').prop('disabled', true);
        $( "#playLoopc" ).removeClass( "solfageMusicButton" );
        $( "#playLoop" ).addClass( "solfageMusicDisabled" );       

        playMusicArray(getMusicArray, 0);

    });

    $("#playLoop").on("click", function(e){

        // disable play music button
        $('#playMusic').prop('disabled', true);
        $( "#playMusic" ).removeClass( "solfageMusicButton" );
        $( "#playMusic" ).addClass( "solfageMusicDisabled" );

        // disable play loop button
        $('#playLoop').prop('disabled', true);
        $( "#playLoopc" ).removeClass( "solfageMusicButton" );
        $( "#playLoop" ).addClass( "solfageMusicDisabled" );       

        playMusicArray(getMusicArray, 1);
 
    });
   
    $("#playPitchCentre").on("click", function(e){

        var playTonicNote = notes.solfageOutPutSetup[0][keyToPlay][5];
        playTonic(playTonicNote);        

    });

    // set up the toggle for the display or non display of solfege names
    
    $("#toggleSol").on("click", function(e){
        $("#solfegeNotes").empty();
       if (notes.toggleSwitch  == 0) { 
        notes.toggleSwitch = 1; 
            $(this).text("Solfage Names - OFF");
        } else { 
            notes.toggleSwitch = 0; 
            $(this).text("Solfage Names - ON");
        }
       createOutput(keyToPlay, getMusicArray, outputType, numberOfNotes);   
    });

}

function setupArray(keyToPlay, outputType, numberOfNotes, numberOfElements) {   
    
    var startTonic = [];        // the empty array for output types 2 and 3
    var finalOutputArray = [];

    if (outputType == 2){startTonic = [3];}

    if (outputType == 4) {   

        finalOutputArray = create4thLevelFormula(keyToPlay);        

    } else {

        if (outputType == 1) {

            var centricityFormula = notes.centricityFormulaArray.slice();  // get the necessary formula to create the output array
            finalOutputArray = oneOctave(centricityFormula, keyToPlay);        // call the function to create the array
                                 
        } else {    
            for (let i = 0; i < numberOfNotes; i++) {               
                
                var solo = Math.floor(Math.random() * numberOfElements);   // get the random number
    
                if (outputType == 2) {
                    var startTonicAdd = notes.centFormFragArray[solo];     //Randomized fragments of the Solfege formula   
                } else {
                    var startTonicAdd = [solo];                            //Random notes around the pitch centre
                }             
                
                Array.prototype.push.apply(startTonic, startTonicAdd);     //append to the 'startTonic' array                 
            }
            
            if (outputType == 3) {   

                    // first note
                    var startTonicArray = notes.startRandom;
                    var startNote = Math.floor(Math.random() *startTonicArray.length); 
                    startTonic[0] = startTonicArray[startNote];

                    var penultimateArray = notes.penultimateRandom;
                    var penultimate = Math.floor(Math.random() * penultimateArray.length);   
                    startTonic[(startTonic.length)-2] =  penultimateArray[penultimate];

                    //lastNote
                    startTonic[numberOfNotes-1] = 3;
                    
                }
               // need to change this name
            finalOutputArray = oneOctave(startTonic, keyToPlay);                // call the function to create the array           
        }    
    }
    return finalOutputArray; 
}   

function createOutput(keyToPlay, finalOutputArray, outputType, numberOfNotes) {
    var musicLine = outputString(keyToPlay, finalOutputArray, outputType, numberOfNotes);   
    renderOutput('#solfegeNotes', 1050, musicLine);       
}
 
function  oneOctave(formula, keyToPlay) {
    
    var solfageInfo = notes.solfageOutPutSetup[0][keyToPlay];  //get the solfage out put setup information   
    var midiSound = notes.midiNotes[0][solfageInfo[0]];        //get midi notes//var key = "midiGb";    
    var noteOffset = solfageInfo[3];                           //get note offset //var update = 4;  
    var mode = solfageInfo[2];                                 // get mode
   
    var solfege = [];                                          // create the empty array for ....

    for (let i = 0; i < formula.length; i++) {
        // create the solfege sting
        var solfegeAdd = [notes.solfegeNames[formula[i]] ];
        Array.prototype.push.apply(solfege, solfegeAdd);   
        
        formula[i] = formula[i]+noteOffset;                   // update the note array string based on key   
    }
   
    var noteList = notes.solfegeRange;    

    var outputArray = [];                                     // create the empty array that is to be r

    //create the output array
    for (let i = 0; i < formula.length; i++) {
        var outputArrayAdd = [ [ noteList[formula[i]], solfege[i],  midiSound[formula[i]] ] ];
        Array.prototype.push.apply(outputArray, outputArrayAdd);                 
    }

    if (mode == "minor") {
        minorMode(outputArray);
       }
    return outputArray;
}

function minorMode(startSolNames2) {
    for (let i = 0; i < startSolNames2.length; i++) {
        if (startSolNames2[i][1] == "mi") { startSolNames2[i][1] = "me"; }   
        if (startSolNames2[i][1] == "la") { startSolNames2[i][1] = "le"; }  
        if (startSolNames2[i][1] == "ti") { startSolNames2[i][1] = "te"; }   
    }
 }