//export function selectType(i, name) {

import { createSolfegeMusicLine  } from './createSolfegeMusicLine.js';

import { midiSetup  } from './solfegeMidi.js';

export function selectType() {

    $("#solfege1").on("click", function(e){

        highlightDiv();   

        // check to see if a key is selected
        if ( notes.selectedSolfegeKey == 0) {
            alert("please select a key from the circle of Fifths"); 
        } else {           
            runCreateMusicLine(1);
            notes.solfegeSelected = [1];
            var instructionText = instruction[1];
            $("#instructions").html(instructionText);   
        }
    });

    $("#solfege2").on("click", function(e){

        highlightDiv();
             
        // check to see if a key is selected
        if ( notes.selectedSolfegeKey == 0) {
            alert("please select a key from the circle of Fifths"); 
        } else {
            runCreateMusicLine(2);
            notes.solfegeSelected = [2];
            var instructionText = instruction[2];
            $("#instructions").html(instructionText);   
        }
    });

    $("#solfege3").on("click", function(e){

        highlightDiv();
            
        // check to see if a key is selected
        if ( notes.selectedSolfegeKey == 0) {
            alert("please select a key from the circle of Fifths"); 
        } else {
            runCreateMusicLine(3);
            notes.solfegeSelected = [3];
            var instructionText = instruction[3];
            $("#instructions").html(instructionText);   
        }
    });

    $("#solfege4").on("click", function(e){

        highlightDiv();
       
        // check to see if a key is selected
        if ( notes.selectedSolfegeKey == 0) {
            alert("please select a key from the circle of Fifths"); 
        } else {
            runCreateMusicLine(4)
            notes.solfegeSelected = [4];
            var instructionText = instruction[4];
            $("#instructions").html(instructionText);   
        }
    });

    function highlightDiv() {

        for (let i = 1; i < 5; i++) {

            var x = `solfege${i}`;
            var y = `solfege${i}Text`;

            document.getElementById(x).style.backgroundColor = "#87CEEB";
            document.getElementById(y).style.color = "#083194";
        }
    }

    function runCreateMusicLine(stepNumber) {

        var solfegeNumber = `solfege${stepNumber}`;
        var solfegeText = `solfege${stepNumber}Text`;

        document.getElementById(solfegeNumber).style.backgroundColor = "#00547d";
        document.getElementById(solfegeText).style.color = "lightblue";

        // create the music line
        createSolfegeMusicLine( notes.selectedSolfegeKey[0], notes.selectedSolfegeKey[1], stepNumber);

        // if the midi control does not exist then create it
        if (notes.solfegeMidiKey ==  0) {
            midiSetup(); 
            notes.solfegeMidiKey = [1];
        }         
    }       
}