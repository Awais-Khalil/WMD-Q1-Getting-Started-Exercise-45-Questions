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
// make a copy of the magicians array
const magicians_copy = magicians.slice();
// call make_great() function with the copy of the list
const great_magicians = make_great(magicians_copy);
// print the original array of magicians
console.log("Original magician names:");
console.log(magicians);
// print the array of great magicians
console.log("\nGreat magician names:");
console.log(great_magicians);
