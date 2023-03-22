"use strict";
const personName = '\t\n   John Doe   \n\t';
console.log(`Name with whitespace: "${personName}"`);
const strippedName = personName.trim();
console.log(`Name without whitespace:: "${strippedName}"`);
