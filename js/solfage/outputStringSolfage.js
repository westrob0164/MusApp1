// create the output string for solfage
export function outputString(solfageKey, musicArray, outputType, numberOfNotes) {

    $("#outputString").empty();

    
    //get the note name
    var solfageTonic = notes.solfageOutPutSetup[0][solfageKey][1];
    var toggleSwitch = notes.toggleSwitch;

    var stage3PitchCentre = musicArray[musicArray.length-1][0]

    var clef = "treble";
    var k = 0;
  
    if (outputType == 3) {
        var workingString = `\n options space=-20 \n tabstave notation=true tablature=false key = ${solfageKey} clef=${clef} \nnotes :h  ${stage3PitchCentre} $Pitch Centre$ | :q`
    } else if (outputType == 4) {
        var workingString = `\n options space=-20 \n tabstave notation=true tablature=false key = ${solfageKey} clef=${clef} \nnotes :h (${solfageTonic}/3.${solfageTonic}/4.${solfageTonic}/5) $Pitch Centre$ | :q`
    } else{ 
        var workingString = `\n options space=-20 \n tabstave notation=true tablature=false key = ${solfageKey} clef=${clef} \nnotes :w`
    }
   
    for (let i = 0; i < musicArray.length; i++) {

        workingString = `${workingString} ${musicArray[i][0]}`;

        if (toggleSwitch == 1) {
            workingString = `${workingString} $${musicArray[i][1]}$`
        } 

        if (outputType == 1 || outputType == 2) {

            if (musicArray[i][1] == 'do') {   // add a bar line               
                workingString = `${workingString}|`   

                if (outputType == 2) { // a new stave line
                    k++; 
                    if (k == 8) {    
                        var workingString = `${workingString}\n options space=20 \n tabstave notation=true tablature=false key = ${solfageKey} clef=${clef} \nnotes :w`
                    }
                }
            }
        }            
    } 

    workingString = `${workingString}\n options space=40`;

    return workingString;
}

