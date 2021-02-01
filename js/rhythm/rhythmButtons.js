

export function rhythmButtons() {

    var buttonTable = `<table width="100%">
                        <tr>
                          <td width="20%">
                            <button id="playRhythm" class="solfageNotesButton">Play rhythm</button>
                          </td>
                          <td width="20%">
                            <button id="stopMusic" class="solfageNotesButton">Stop Music</button>
                          </td>
                          <td width="20%">
                          </td>
                          <td width="20%">
                          </td>
                          <td width="20%">
                          </td>
                        </tr>
                    </table>`;

    $("#rhythmButtons").html(buttonTable);
    
    

}