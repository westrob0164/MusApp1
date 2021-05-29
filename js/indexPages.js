
//rhythm files
import { runRhythmSection  } from './rhythm/runRhythmSection.js';

// solfege files
import { selectType  } from './solfage/solfageSelection.js';
import { createSolfegePage  } from './solfage/createSolfege.js';
import { circleOfFifths  } from './solfage/circleOfFifths.js';



export function createIndexPages(type) {

    // create rhythm pages
    if (type == "rhythm") {

        $(".buttonWraper").empty();
        $(".contentWraper").empty();

        var rhythmPage = `<div class="btn-group" style="width:100%">`;
        rhythmPage =  `${rhythmPage}<button style="width:25%" id="rhythmInstructions" class="secButton">Rhythm Instructions</button>`;
        rhythmPage =  `${rhythmPage}<button style="width:25%" id="simple">1/4 note beats </button>`;
        rhythmPage =  `${rhythmPage}<button style="width:25%" id="simpleHalf">1/2 note beats</button>`;
        rhythmPage =  `${rhythmPage}<button style="width:25%" id="complex">dotted 1/4 note beats</button>`;
        // rhythmPage =  `${rhythmPage}<button style="width:22%" id="complexHalf">dotted 1/2 note beats</button>`;
        rhythmPage =  `${rhythmPage}</div>`;
        rhythmPage =  `${rhythmPage}<div id="splashImage"><br><img src="images/Band_of_the_Ceremonial_Guard.jpg" alt="Band" height="645" width="1050"></div>`;
        rhythmPage =  `${rhythmPage}</div>`;
        
        $(".buttonWraper").html(rhythmPage);


        var rhythmInstructionShort = `<h1>How can we read a rhythmic line fluently?</h1><p>${instruction[11]}</p>`

        $(".contentWraper").html(rhythmInstructionShort);

        $("#rhythmInstructions").on("click", function(){         
    
            rhythmInstructions("rhythm");
        
        });

        $("#simple").on("click", function(){         
    
            runRhythmSection(0);
        
        });

        $("#simpleHalf").on("click", function(){         
    
            runRhythmSection(1);
        
        });


        $("#complex").on("click", function(){         
    
            runRhythmSection(2);
        
        });


        $("#complexHalf").on("click", function(){         
    
            runRhythmSection(3);
        
        });


      //create solfage pages  
    } else {

        $(".buttonWraper").empty();
        $(".contentWraper").empty();

        var SolfegePage = `<div class="btn-group" style="width:100%">`;
        SolfegePage =  `${SolfegePage}<button style="width:50%" id="solfageInstructions">Solfege Instructions</button>`;
        SolfegePage =  `${SolfegePage}<button style="width:50%" id="solfege">Solfege</button>`;
        SolfegePage =  `${SolfegePage}</div>`;
        SolfegePage =  `${SolfegePage}<div id="splashImage"><br><img src="images/sound_ of_music.jpg" alt="Sound of Music" height="360" width="1080"></div>`;
        
        $(".buttonWraper").html(SolfegePage);

        var solfegeInstructionShort = `<h1>How can we sing a melody without an instrument?</h1><p>${instruction[0]}</p>`

        $(".contentWraper").html(solfegeInstructionShort);

        $("#solfageInstructions").on("click", function(){         
    
            solfageInstructions();
        
        });

        $("#solfege").on("click", function(){         
    
            solfage();
        
        });
        
    }
    
}

function solfageInstructions() {
    
    $("#splashImage").empty();
    $(".contentWraper").empty();

    notes.solfegeSelected = [0];

    var soflageInstrctions = `<h1>How can we sing a melody without an instrument?</h1><p>${instruction[0]}</p>`;
    soflageInstrctions = `${soflageInstrctions}<h2>Stage 1: Memorizing two melodic formulas</h2><p>${instruction[1]}</p>`;
    soflageInstrctions = `${soflageInstrctions}<h2>Stage 2: Singing random fragments of the formulas</h2><p>${instruction[2]}</p>`;
    soflageInstrctions = `${soflageInstrctions}<h2>Stage 3: Singing small-span random melodies</h2><p>${instruction[3]}</p>`;
    soflageInstrctions = `${soflageInstrctions}<h2>Stage 4: Singing large-span random melodies</h2><p>${instruction[4]}</p>`;
    soflageInstrctions = `${soflageInstrctions}<h2>Conclusion</h2><p>${instruction[5]}</p><p>${instruction[6]}</p><br>`;
    soflageInstrctions = `${soflageInstrctions}<h2>A couple of important questions regarding this method</h2><p>${instruction[7]}</p`;
    soflageInstrctions = `${soflageInstrctions}<p>${instruction[8]}</p><p>${instruction[9]}</p><p>${instruction[10]}</p>`;

    $(".contentWraper").html(soflageInstrctions);
    
}


function solfage() {

    createIndexPages("solfege");

    $("#splashImage").empty();
    $(".contentWraper").empty();

    notes.selectedSolfegeKey = [0];
    notes.solfegeMidiKey = [0];
    notes.solfegeSelected = [0];
    notes.toggleSwitch = [1];


    //create the html string to display the page
    var solfegeString = createSolfegePage();

    $(".contentWraper").html(solfegeString);
    circleOfFifths();

    selectType();

}


function rhythmInstructions() { 

    createIndexPages("rhythm");

    $("#splashImage").empty();
    $(".contentWraper").empty();

    notes.solfegeSelected = [0];

    var rhythmInstructions = `<h1>How can we read a rhythmic line fluently?</h1><p>${instruction[11]}</p>`;
    rhythmInstructions = `${rhythmInstructions}<h2>1/4 note beats</h2><p>${instruction[12]}</p>`;
    rhythmInstructions = `${rhythmInstructions}<h2>1/2 note beats</h2><p>${instruction[13]}</p>`;

    $(".contentWraper").html(rhythmInstructions);

}