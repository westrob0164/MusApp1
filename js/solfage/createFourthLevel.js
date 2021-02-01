
export function create4thLevelFormula(key){
     
// get the note name
    var keyToPlay = notes.solfageOutPutSetup[0][key][1];
// get the first note
    var firstNote = startNumber(keyToPlay);
    
    var noteString = [firstNote];

    do {   
        // get the direction to go for the next note
        var nextDirectionLevel1 = posNeg();

        // get the second value
        var nextValue = getNextValue(nextDirectionLevel1);   

        //var lastItem = noteString[noteString.length - 1]

        var secondNote = noteString[noteString.length - 1] + (nextValue[1]*nextDirectionLevel1);

        //change the direction if the second note falls outside the range
        if (secondNote > 14 || secondNote < 0) {
            changes = changeDirectionValues(nextDirectionLevel1, nextValue);
            
            secondNote = noteString[noteString.length - 1] + (nextValue[1]*changes[0]); //update the notes
        }

        noteString.push(secondNote);

        if (nextValue[0] !== "forthMinus") {

            thirdNote = secondNote + nextValue[2];

            if (thirdNote > 14 || thirdNote < 0) {
                var changes = changeDirectionValues(nextDirectionLevel1, nextValue);
                //update the notes
                var thirdNote = secondNote + (nextValue[1]*changes[0]);
                }        
                noteString.push(thirdNote);    
        }

    } while (noteString.length < 15);

    if (noteString.length == 16) {
        noteString.pop();
    }

    // add the last two notes
    var penultimateNote = notes.fouthLevelLastTwo[0][keyToPlay][0][noteString[14]];
    var tonic = notes.fouthLevelLastTwo[0][keyToPlay][1][noteString[14]];

    noteString[14] = penultimateNote;
    
    noteString.push(tonic); 


    var outputArray = twoOctaves(noteString, key);   

    return outputArray;
}

//select the first note
function startNumber(keys){
    var startNoteNumber = Math.ceil(Math.random() * 4);
    switch (startNoteNumber) {
        case 1: var startNote = (notes.fouthLevelByKey[0][keys][0]+notes.start4thLevel[0]); break;
        case 2: var startNote = (notes.fouthLevelByKey[0][keys][0]+notes.start4thLevel[1]); break;
        case 3: var startNote = (notes.fouthLevelByKey[0][keys][0]+notes.start4thLevel[2]); break;
        case 4: var startNote = (notes.fouthLevelByKey[0][keys][0]+notes.start4thLevel[3]); break;
        default: break;
    }
    return startNote;    
}

//select note direction up or down
function posNeg (){  // change the direction
    var negPos = Math.floor(Math.random() * 2);  
    if (negPos == 1) { var direction = 1; } else { var direction = -1; }
    return direction;
}

// get the next value
function getNextValue(nextDirectionLevel1) {
    var newInterval = (Math.ceil(Math.random() * 7));   
    if (newInterval > 3) {
        //get the direction of the next interval  for this situation it is a step opposite to the leap
        var subsequentInterval = -1*nextDirectionLevel1;
        var notes = ["forthPlus", newInterval, subsequentInterval];
    } else if (newInterval == 3) {
        var next = (Math.ceil(Math.random() * 4));
        switch (next) {
            // four possible steps after a leap of a fouth
            case 1: var subsequentInterval = 1; break;
            case 2: var subsequentInterval = 2; break;
            case 3: var subsequentInterval = -1; break;
            case 4: var subsequentInterval = -2; break;
            default: break;
        }
        var notes = ["forth", newInterval, subsequentInterval];    
    } else { 
        // for leaps of a third or less
        var notes = ["forthMinus", newInterval, 100];   
    }       

    return notes;
}


// chech to value to make sure it does not go outside the boundaries of G/3 to G/5 (0, 14)
function changeDirectionValues(nextDirectionLevel1, nextValue) {       
    nextDirectionLevel1 = nextDirectionLevel1 * -1;
    nextValue[2] = nextValue[2] *-1;      
    var returnDirection = [nextDirectionLevel1, nextValue];
    return returnDirection;
}

function  twoOctaves(formula, keyToPlay) {

        
    var solfageInfo = notes.solfageOutPutSetup[0][keyToPlay];  //get the solfage out put setup information   
    var midiSound = notes.midiNotes[0][solfageInfo[0]];        //get midi notes//var key = "midiGb";    
    var noteName = solfageInfo[1];                           //get note offset //var update = 4;  
    var mode = solfageInfo[2];                                 // get mode
    var startSolfage = notes.fouthLevelByKey[0][noteName][1];
   
    var outputArray = [];       // create the empty array for ....

    for (let i = 0; i < formula.length; i++) {

        var outputArrayAdd = [ [ notes.solfegeRange[formula[i]], notes.fouthLevelSolfage[formula[i]+startSolfage],  midiSound[formula[i]] ] ];
        Array.prototype.push.apply(outputArray, outputArrayAdd);   
        
    }

    if (mode == "minor") {
        minorMode2(outputArray);
       }
    return outputArray;
}

function minorMode2(startSolNames2) {
    for (let i = 0; i < startSolNames2.length; i++) {
        if (startSolNames2[i][1] == "mi") { startSolNames2[i][1] = "me"; }   
        if (startSolNames2[i][1] == "la") { startSolNames2[i][1] = "le"; }  
        if (startSolNames2[i][1] == "ti") { startSolNames2[i][1] = "te"; }   
    }
 }
