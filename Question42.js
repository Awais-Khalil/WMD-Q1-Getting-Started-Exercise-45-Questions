"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_great(magicians) {
    const great_magicians = [];
    for (const magician of magicians) {
        const great_magician = magician + " the Great";
        great_magicians.push(great_magician);
    }
    return great_magicians;
}
const magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
const great_magicians = make_great(magicians);
console.log(great_magicians);
