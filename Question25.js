"use strict";
// Set the alien_color variable to either 'green', 'yellow', or 'red'
let alien_color = 'green';
// If the alien's color is green, print a message that the player earned 5 points
if (alien_color === 'green') {
    console.log("The player just earned 5 points!");
}
// A version of the program that fails the if test and has no output
alien_color = 'yellow'; // change the value to 'yellow'
if (alien_color === 'green') {
    console.log("The player just earned 5 points!"); // This line will not be executed since the condition is false
}
