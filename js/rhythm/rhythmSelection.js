// This Program adds the Rhythm selection items

export function rhythmPractice(beatType) {

    //default values
    var noMeasures = 4;
    var rhythmSelStr = [];
   
    //2 beat patterns
    if (beatType == 1) {
        rhythmSelStr = `<div class="selectionLineA" id="selectionDiv2">`;

        for (var i = 0; i <9; i++) {

            //add 21 to i to get the image and div id number;
            var image = i + 21;

            rhythmSelStr = `${rhythmSelStr}<div class="selectionLineA" id="rhythmFragment${image}" onclick="rhythmToggle(${image}, ${i})">`;
            rhythmSelStr = `${rhythmSelStr}<img src="images/${image}.jpg"></div>`;
        }
        
    }
    // complex time
    else if (beatType == 2) {
        rhythmSelStr = `<div class="complexContainer">`;

        for (var i = 1; i < 27; i++) {

            var image = i + 40;

            rhythmSelStr = `${rhythmSelStr}<div class="complexPattern" id="rhythmFragment${image}" onclick="rhythmToggle(${image}, ${i-1})">`;
            rhythmSelStr = `${rhythmSelStr}<img src="images/complex/${i}.png"></div>`;
        }
        
    }

    // one beat patterns
    else {
        rhythmSelStr = `<div class="selectionLineA" id="selectionDiv">`;
    
        //add the 1 beat 16th patterns
        for (var i = 0; i < 9; i++) {

            //add one to i to get the div id number
            var number = i + 1;

            rhythmSelStr = `${rhythmSelStr}<div class="selectionLineA" id="rhythmFragment${number}" onclick="rhythmToggle(${number}, ${i})">`;
            rhythmSelStr = `${rhythmSelStr}<img src="images/${number}.jpg"></div>`;         
        }
    }

    //add the Time signature selection data
    rhythmSelStr = `${rhythmSelStr}<div id="timeSignature">`;
    rhythmSelStr = `${rhythmSelStr}<div id="timeSigTitle"><h3>Select time signature</h3></div>`;
    rhythmSelStr = `${rhythmSelStr}<div class="selectionLineA" id="beatPerMeasureList">`;
    rhythmSelStr = `${rhythmSelStr}<select style="width: 50px">`;


    // 2 beat patterns
    if (beatType == 1) {
        var beatsPerMeasure = selectionLists.halfTime;
        var noBeatsPerMeaure = 3;
        var instructionNumber = 13;
    }else if (beatType == 2) {
        var beatsPerMeasure = selectionLists.complexTime;
        var noBeatsPerMeaure = 3;
        var instructionNumber = 13;
    }else{
        var beatsPerMeasure = selectionLists.quarterTime;
        var noBeatsPerMeaure = 3;
        var instructionNumber = 12;
    }

    // create the number of beats permeasure drop down list
    for (var i = 0; i < noBeatsPerMeaure; i++) {
        rhythmSelStr = `${rhythmSelStr}<option value="${beatsPerMeasure[i].id}"`;

        if (beatsPerMeasure[i].selected == "yes") {
            rhythmSelStr = `${rhythmSelStr}selected = "selected"`;
        }
        rhythmSelStr = `${rhythmSelStr}>${beatsPerMeasure[i].value}</option>`;
    }

    rhythmSelStr = `${rhythmSelStr}</select></div>`;
    rhythmSelStr = `${rhythmSelStr}<div class="selectionLineA" id="beatValueList">`;
    
    //2 beat patterns
    if (beatType == 1) {
        rhythmSelStr = `${rhythmSelStr}<p id = "text2">2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>`;        
    }
    // complex time
    else if (beatType == 2) {
        rhythmSelStr = `${rhythmSelStr}<p id = "text2">8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>`
    }
    // one beat patterns
    else {
        rhythmSelStr = `${rhythmSelStr}<p id = "text2">4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></div>`;
    }

    rhythmSelStr = `${rhythmSelStr}<div id = "beatPerMeasureText">&nbsp; beats per measure</div >`;
    rhythmSelStr = `${rhythmSelStr}<div id="beatValueText">&nbsp; beat value</div></div>`;

    //add the Measure selection data
    rhythmSelStr = `${rhythmSelStr}<div class="selectionLineB" id = "noOfMeasures">`;
    rhythmSelStr = `${rhythmSelStr}<h3>Set number of measures</h3>`;
    rhythmSelStr = `${rhythmSelStr} <select style="width: 50px">`;


    // create the number of measures drop down list
    for (var i = 0; i < selectionLists.noOfMeasures.length; i++) {
        rhythmSelStr = `${rhythmSelStr}<option value="${selectionLists.noOfMeasures[i].id}"`;

        if (selectionLists.noOfMeasures[i].selected == "yes") {
            rhythmSelStr = `${rhythmSelStr}selected = "selected"`;
        }
        rhythmSelStr = `${rhythmSelStr}>${selectionLists.noOfMeasures[i].value}</option>`;
    }

    rhythmSelStr = `${rhythmSelStr}</select></div>`; 

    // add the buttons

    rhythmSelStr = `${rhythmSelStr}<div class="selectionLineB" id ="selectionButtons">`;

    if (beatType == 1) {var beatType = 1;}
    else               {var beatType = 0;}

    rhythmSelStr = `${rhythmSelStr}<br><br><br><div id = "createRhythmLine"><button class = "selectionButton" id="submit">Create rhythm line</button></div>`;


    //rhythmSelStr = `${rhythmSelStr}<button class = "selectionButton" id="clear"">Clear Rhythm Line(s)</button>`;
    rhythmSelStr = `${rhythmSelStr}</div></div>`;
    
    rhythmSelStr = `${rhythmSelStr}<div id ="instructionArea"><p>${instruction[instructionNumber]}<br><br></p></div>`
    rhythmSelStr = `${rhythmSelStr}<div id="rhythmButtons"></div>`;


    rhythmSelStr = `${rhythmSelStr}<div id="notes"></div>`;
    rhythmSelStr = `${rhythmSelStr}<div id="rhythmMiniControls"></div>`;
   
    return rhythmSelStr;
}

