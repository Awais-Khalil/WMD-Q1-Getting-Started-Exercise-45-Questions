"use strict";
// Make an array of usernames
let usernames = [];
// Check if the array is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print a greeting to each user
    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
        }
    }
}
