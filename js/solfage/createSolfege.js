//Create Solage Page


export function createSolfegePage() {

    var solfegeString = `<div class="selectionLineA" id="solfegeDiv">`;

    solfegeString = `${solfegeString}<div class="selectionLineA" id="solfegeImage">`;
    solfegeString = `${solfegeString}<svg width="425" height="430" id="wheel"></svg></div>`;

    solfegeString = `${solfegeString}<div class="selectionLineA" id="solfegeTitle">`;
    solfegeString = `${solfegeString}<h2>Please select the practice stage</h2></div>`;

    solfegeString = `${solfegeString}<div class="selectionLineA" id="solfege1">`;
    solfegeString = `${solfegeString}<p id ="solfege1Text">Stage 1: Memorizing two melodic formulas</p></div>`;
    
    solfegeString = `${solfegeString}<div class="selectionLineA" id="solfege2">`;
    solfegeString = `${solfegeString}<p id ="solfege2Text">Stage 2: Singing random fragments of the formulas</p></div>`;
    
    solfegeString = `${solfegeString}<div class="selectionLineA" id="solfege3">`;
    solfegeString = `${solfegeString}<p id ="solfege3Text">Stage 3: Singing small-span random melodies</p></div>`;  

    solfegeString = `${solfegeString}<div class="selectionLineA" id="solfege4">`;
    solfegeString = `${solfegeString}<p id ="solfege4Text">Stage 4: Singing large-span random melodies</p></div></div>`;

    solfegeString = `${solfegeString}<div id=instructions></div>`;
    solfegeString = `${solfegeString}<div id=solfegeTitle2></div>`;
    solfegeString = `${solfegeString}<div id=solfegeButtons></div>`;
    solfegeString = `${solfegeString}<div id=solfegeNotes></div>`;
    solfegeString = `${solfegeString}<div id=solfegeMiniControls></div>`;
         
    return solfegeString;
}