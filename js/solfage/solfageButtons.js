


export function solfageButtons(outputType) {

    if (notes.toggleSwitch  == 1) {
        var toggleButtonText = "Solfage Names - OFF";
    } else {
        var toggleButtonText = "Solfage Names - ON";
    }

    if (outputType == 1){
        var outputType1 = true;
    }

    var buttonTable = `<table width="100%">
                <tr> 
                <td width="10%">
                    <button id="playPitchCentre" class="solfageMusicButton">Play Pitch Centre</button>
                </td>
                <td width="10%">
                    <button id="playMusic" class="solfageMusicButton">Play Melody</button>
                </td>
                <td width="10%">
                    <button ${outputType1 ? 'id="playLoop"' : 'id="stopMusic"'} class="solfageMusicButton">
                            ${outputType1 ? 'Play Loop' : 'Stop Music'} </button>
                </td>
                <td width="10%">
                    ${outputType1 ? '<button id="stopMusic" class="solfageMusicButton">Stop Music</button>' : ' '}
                </td>
                <td width="15%"> </td>
                <td width="20%">
                    ${!outputType1 ? '<button id="updateSol" class="solfageNotesButton">Create new melody</button>' : ' ' }
                </td>
                <td width="20%">
                    <button id="toggleSol" class="solfageNotesButton">${toggleButtonText}</button>
                </td>
                </tr>
            </table>`;

    $("#solfegeButtons").html(buttonTable);

}