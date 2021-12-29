/* SETTINGS */

import { note } from "@tonaljs/tonal";
const pgnParser = require("pgn-parser");

import * as Tone from "tone";
const synth = new Tone.Synth().toDestination();

let samplePgn =
    '[White "me"]\n[Black "you"]\n1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 (3. ...Nf6 {is the two knights}) 4. b4 Bxb4 5. c3 Ba5 6. d4 exd4 7. O-O Nge7 $1 *';


/* VARIABLES */

/* FUNCTIONS */

function getMoves(pgn) {
    let [result] = pgnParser.parse(pgn);
    let movesArr = [];
    result.moves.forEach((element) => {
        movesArr.push(element.move);
    });
    return movesArr;
}

// function movesToNotes(moves) {}
// synth.triggerAttackRelease("E4", "8n");

console.log(getMoves(dalbyPgn));
