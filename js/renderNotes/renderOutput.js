 //
 
 //export function renderOutput(divTag, rhythmLineLength, outputString) {
function renderOutput(divTag, rhythmLineLength, outputString) {

   // Create VexFlow Renderer element with id #notes.
    renderer = new Vex.Flow.Renderer($(divTag)[0], Vex.Flow.Renderer.Backends.SVG);
    artist = new Artist(10, 10, rhythmLineLength, {scale: 1});
    new VexTab(artist).parse(outputString)
    artist.render(renderer);    
}
 
