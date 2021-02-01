

export function midiSetup() {

    // setting up sound panel
    var midiPanel = `<div id ="tempoTitle" class="midiControls">Set tempo: <span id="demo"></span></div>
                     <div id ="tempoSlider"><input type="range" min="40" max="208" value="80" class="myslider2" id="sliderRange"></div>
                     <div id ="volumeTitle" class="midiControls"> Set volume:  <span id="output"></span></div>
                     <div id ="volumeSlider"> <input id="input" type="range" min="0" value="4" max="7" step="1" class="myslider2"> </div>
                     <div id ="instrumentTitle" class="midiControls"> Select instrument </div>
                     <div id ="instrumentList"> </div>
                     <div id ="pitchTitle" class="midiControls">Select octave transposition </div>
                     <div id ="pitchList"> </div>
                     <div id ="spacer" class="midiControlsTitle"> Sound Controls </div>`;

    $("#solfegeMiniControls").html(midiPanel);    
   
    var rangeslider = document.getElementById("sliderRange"); 
    var output = document.getElementById("demo"); 
    output.innerHTML = rangeslider.value; 
                
    rangeslider.oninput = function() { 
      output.innerHTML = this.value; 
    } 

    var values = ["<em>ppp</em>","<em>pp</em>","<em>p</em>","<em>mp</em>","<em>mf</em>","<em>f</em>","<em>ff</em>","<em>fff</em>"];

    var input = document.getElementById('input'),
    output2 = document.getElementById('output');
    
    input.oninput = function(){
        output2.innerHTML = values[this.value];
        
    };
    
    input.oninput();
    
    var midiInstrSelStr = `<select id = "midiInstr" style="width: 200px">`;
    for (var i = 0; i < notes.midiInstruments.length; i++) {
        midiInstrSelStr = `${midiInstrSelStr}<option value="${notes.midiInstruments[i].value}"`;
        if (notes.midiInstruments[i].selected == "yes") {
            midiInstrSelStr = `${midiInstrSelStr}selected = "selected"`;
        }
        midiInstrSelStr = `${midiInstrSelStr}>${notes.midiInstruments[i].label}</option>`;
    }
    midiInstrSelStr = `${midiInstrSelStr}></select>`;

    $("#instrumentList").html(midiInstrSelStr);

    var pitchLevelStr= `<select id = "pitchLevelNumber" style="width: 220px">`;
    for (var i = 0; i < notes.pitchLevel.length; i++) {
        pitchLevelStr = `${pitchLevelStr}<option value="${notes.pitchLevel[i].value}"`;
        if (notes.pitchLevel[i].selected == "yes") {
            pitchLevelStr = `${pitchLevelStr}selected = "selected"`;
        }
        pitchLevelStr = `${pitchLevelStr}>${notes.pitchLevel[i].label}</option>`;
    }
    pitchLevelStr = `${pitchLevelStr}></select>`;

    $("#pitchList").html(pitchLevelStr);
}