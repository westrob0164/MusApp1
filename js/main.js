// this is the main javascript program for the Musicianshp App
// it consists of the following:
//      imports of modules
//      global variables
//      function calls

//


import { createIndexPages  } from './indexPages.js';


$("#Rhythm").on("click", function(){     
    
    createIndexPages("rhythm");

});


$("#Solfege").on("click", function(){         
    
    createIndexPages("solfege");

});


$(".homePage").on("click", function() {
    $(".buttonWraper").empty();
    $(".contentWraper").empty(); 

    var homeImage = `<div class="btn-group" style="width:100%"><h2>Beethoven's Trumpet</h2> by John Baldessari`;
    homeImage =  `${homeImage}</div>`;
    homeImage =  `${homeImage}<div id="splashImage"><br><img src="images/BeethovenTrumpet.jpg" alt="Beethoven's Trumpet"></div>`;
    homeImage =  `${homeImage}</div>`;
    
    $(".buttonWraper").html(homeImage);  
});

//music setup
window.onload = function () {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instruments: [ "flute",
                       "french_horn",
                       "marimba",            
                       "acoustic_grand_piano",
                       "voice_oohs",
                       "violin",
                       "steel_drums"
                    ],
		onprogress: function(state, progress) {
			console.log("progress", state, progress);
		}
	});
};