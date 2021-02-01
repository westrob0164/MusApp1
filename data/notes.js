var notes = {
    "centricityFormulaArray":[3, 2,3, 1,2,3, 0,1,2,3, 4,3, 5,4,3, 6,5,4,3],
    "centricityForNames":["do","ti","do","la","ti","do","so","la","ti","do","re","do","mi","re","do","fa","mi","re","do"],
    "centFormFragArray":[[2,3],[1,2,3],[0,1,2,3],[4,3],[5,4,3],[6,5,4,3]],
    "solfegeNames":["so","la","ti","do","re","mi","fa"],
    "solfegeRange":["G/3","A/3","B/3","C/4","D/4","E/4","F/4","G/4","A/4","B/4","C/5","D/5","E/5","F/5","G/5"],
    /*Data for the 3rd level sofege*/
    "selectedSolfage":[1, 0, 0, 0],  //fix name
    "startRandom":[0,3,5],
    "penultimateRandom":[0,2,4],
    "lastRandom":[3],
    /* Data for the 4th level sofege */
    "start4thLevel":[0,2,4,7],
    "fouthLevelByKey":[ // first Note, start of Solfege
        {
            "C":[3,4],
            "G":[0,0],
            "D":[4,3],
            "A":[1,6],
            "E":[5,2],
            "B":[2,5],
            "F":[6,1]     
        }
       ],
    "fouthLevelLastTwo" : [           
       { 
        "A" :[[0,0,2,3,4,5,6,6,8,9,10,11,11,11,11], [1,1,1,1,1,8,8,8,8,8,8,8,8,8,8]],
        "B" :[[0,1,1,3,4,5,6,7,8,8,10,11,12,12,12], [2,2,2,2,2,2,9,9,9,9,9,9,9,9,9]],
        "C" :[[0,1,2,2,4,5,6,7,8,9,9,11,12,13,13],  [3,3,3,3,3,3,3,10,10,10,10,10,10,10,10]],
        "D" :[[1,1,2,3,3,5,6,7,8,9,10,10,12,13,14], [4,4,4,4,4,4,4,4,11,11,11,11,11,11,11]],
        "E" :[[2,2,2,3,4,4,6,7,8,9,10,11,11,13,14], [5,5,5,5,5,5,5,5,5,12,12,12,12,12,12]],
        "F" :[[3,3,3,3,4,5,5,7,8,9,10,11,12,12,14], [6,6,6,6,6,6,6,6,6,6,13,13,13,13,13]],
        "G" :[[1,1,2,3,4,5,6,6,8,9,10,11,12,13,14], [0,0,0,0,7,7,7,7,7,7,7,14,14,14,14]]
     }],
    "fouthLevelSolfage": ["do","re","mi","fa","so","la","ti","do","re","mi","fa","so","la","ti","do","re","mi","fa","so","la","ti","do"], //fix name
    "solfageOutPutSetup":[//this is for seting up the solfage output            fix name
       {  /*the value [the string to use from the midi string array,
                       the key value,
                       the mode,
                       the start location for the solfegeRange array,
                       *probably not needed the start location for the midiNotes array ]*/
           "C" : ["midiC","C","major",7,7,72],
           "G" : ["midiG","G","major",4,4,67],
           "D" : ["midiD","D","major",8,8,74],
           "A" : ["midiA","A","major",5,5,69],
           "E" : ["midiE","E","major",2,2,64],
           "B" : ["midiB","B","major",6,6,71],
           "F#" : ["midiF#","F","major",3,4,66],
           "Gb" : ["midiGb","G","major",4,4,66],
           "Db" : ["midiDb","D","major",8,8,73],
           "Ab" : ["midiAb","A","major",5,5,68],
           "Eb" : ["midiEb","E","major",2,2,63],
           "Bb" : ["midiBb","B","major",6,6,70],
           "F" : ["midiF","F","major",3,3,65],
           "Am" : ["midiC","A","minor",5,5,69],
           "Em" : ["midiG","E","minor",2,2,64],
           "Bm" : ["midiD","B","minor",6,6,71],
           "F#m" : ["midiA","F","minor",3,3,66],
           "C#m" : ["midiE","C","minor",7,0,73],
           "G#m" : ["midiB","G","minor",4,4,68],
           "D#m" : ["midiF#","D","minor",1,2,63],
           "Ebm" : ["midiGb","E","minor",2,2,63],
           "Bbm" : ["midiDb","B","minor",6,6,70],
           "Fm" : ["midiAb","F","minor",3,3,65],
           "Cm" : ["midiEb","C","minor",7,0,72],
           "Gm" : ["midiBb","G","minor",4,4,67],
           "Dm" : ["midiF","D","minor",8,1,74],     
       }                                       
   ],
   "midiNotes":[
       {
           "midiC"  : [55,57,59,60,62,64,65,67,69,71,72,74,76,77,79],
           "midiG"  : [55,57,59,60,62,64,66,67,69,71,72,74,76,78,79],
           "midiD"  : [55,57,59,61,62,64,66,67,69,71,73,74,76,78,79],
           "midiA"  : [56,57,59,61,62,64,66,68,69,71,73,74,76,78,80],
           "midiE"  : [56,57,59,61,63,64,66,68,69,71,73,75,76,78,80],
           "midiB"  : [56,58,59,61,63,64,66,68,70,71,73,75,76,78,80],	
           "midiF#" : [56,58,59,61,63,65,66,68,70,71,73,75,77,78,80],				
           "midiGb" : [54,56,58,59,61,63,65,66,68,70,71,73,75,77,78],			
           "midiDb" : [54,56,58,60,61,63,65,66,68,70,72,73,75,77,78],			
           "midiAb" : [55,56,58,60,61,63,65,67,68,70,72,73,75,77,79],
           "midiEb" : [55,56,58,60,62,63,65,67,68,70,72,74,75,77,79],
           "midiBb" : [55,57,58,60,62,63,65,67,69,70,72,74,75,77,79],
           "midiF"  : [55,57,58,60,62,64,65,67,69,70,72,74,76,77,79]
       }
   ],
   "midiInstruments": [
        {"value" : 73, "label" : "Flute", "selected":"no"},
        {"value" : 60, "label" : "Horn", "selected":"no"},
        {"value" : 12, "label" : "Marimba", "selected":"no"},
        {"value" : 0, "label" : "Grand Piano", "selected":"yes"},
        {"value" : 53, "label" : "Voice", "selected":"no"},      
        {"value" : 40, "label" : "Violin", "selected":"no"}
   ],
   "pitchLevel": [
    {"value" : -12, "label" : "Raise Pitch One Octave", "selected":"no"},
    {"value" : 0, "label" : "Keep Pitch", "selected":"yes"},
    {"value" : 12, "label" : "Drop Pitch One Octave", "selected":"no"},
   ],
   "selectedSolfegeKey": [0],
   "solfegeMidiKey" : [0],
   "solfegeSelected" : [0],
   "toggleSwitch": [1]
}

