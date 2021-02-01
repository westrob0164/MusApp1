
export function midiRhythmSetup() {
    
    var midiPanel =  `<div id ="rhythmTempoTitle" class="midiControls">Set tempo: <span id="demo"></span></div>
                      <div id ="rhythmTempoSlider" > <input type="range" min="40" max="208" value="80" class="myslider2" id="sliderRange"></div>
                      <div id ="rhythmVolumeTitle" class="midiControls"> Set rhythm volume:  <span id="output"></span></div>
                      <div id ="rhythmVolumeSlider"><input id="inputRhythm" type="range" min="0" value="4" max="8" step="1" class="myslider2"></div>
                      <div id ="beatVolumeTitle" class="midiControls"> Set beat volume:  <span id="output2"></span></div>
                      <div id ="beatVolumeSlider"> <input id="inputBeat" type="range" min="0" value="4" max="8" step="1" class="myslider2"> </div>`;
    
    midiPanel = `${midiPanel}<div id ="spacer" class="rhythmMidiTitle"> Sound Controls </div>`;

    $("#rhythmMiniControls").html(midiPanel);

    var rangeslider = document.getElementById("sliderRange"); 
    var output = document.getElementById("demo"); 
    output.innerHTML = rangeslider.value;     
            
    rangeslider.oninput = function() { 
      output.innerHTML = this.value ; 
    } 

    var values = ["off","<em>ppp</em>","<em>pp</em>","<em>p</em>","<em>mp</em>","<em>mf</em>","<em>f</em>","<em>ff</em>","<em>fff</em>"];

    var input = document.getElementById('inputRhythm'),
    output2 = document.getElementById('output');    
    input.oninput = function(){
        output2.innerHTML = values[this.value];
    };    
    input.oninput();


    var input = document.getElementById('inputBeat'),
    output3 = document.getElementById('output2');    
    input.oninput = function(){
        output3.innerHTML = values[this.value];
    };    
    input.oninput();

}
