"use strict";
// Set the alien_color variable to either 'green', 'yellow', or 'red'
let alien_color = 'green';
// If the alien's color is green, print a message that the player earned 5 points, otherwise print a message that the player earned 10 points
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien!");
}
else {
    console.log("The player just earned 10 points!");
}
// A version of the program that runs the else block
alien_color = 'red'; // change the value to 'red'
if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien!");
}
else {
    console.log("The player just earned 10 points!"); // This line will be executed since the condition is false
}
