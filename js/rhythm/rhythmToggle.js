function rhythmToggle(a, i) {
     
    selectedRhythmFragments = rhythmFragments.startRhythmValues;

    var x = `rhythmFragment${a}`;

    if (selectedRhythmFragments[i] == 0) {
        selectedRhythmFragments[i] = 1;
        document.getElementById(x).style.backgroundColor = "#00547d";
        document.getElementById(x).style.border = "thick solid #000000";
    
    } else {
        selectedRhythmFragments[i] = 0;
        document.getElementById(x).style.backgroundColor = "#87CEEB";
        document.getElementById(x).style.border = "none";
    }
}


