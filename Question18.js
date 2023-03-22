"use strict";
let placesToVisit = ["Japan", "Brazil", "Iceland", "Thailand", "Greece"];
// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());
// Show that the array is still in its original order
console.log("\nOriginal order (again):");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());
// Show that the array is still in its original order
console.log("\nOriginal order (again):");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed order:");
console.log(placesToVisit);
// Reverse the order of the list again
placesToVisit.reverse();
console.log("\nOriginal order (again):");
console.log(placesToVisit);
// Sort the array in alphabetical
