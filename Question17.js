"use strict";
let guests = ["Albert Einstein", "Marie Curie", "Stephen Hawking"];
const cantMakeIt = "Marie Curie";
const newGuest = "Nikola Tesla";
console.log(`${cantMakeIt} can't make it to the dinner.`);
guests.splice(1, 1, "Nikola Tesla");
guests.unshift("Isaac Newton");
guests.splice(Math.floor(guests.length / 2), 0, "Galileo Galilei");
guests.push("Richard Feynman");
console.log("Good news! I found a bigger dinner table.\n");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, you are cordially invited to dinner at my place on Saturday. I would be honored if you could join me.`);
}
console.log("Bad news! My new table is not going to be delivered and i can invite only two people.\n");
console.log(`${guests.pop()} sorry i had to cancel your invitation.`);
console.log(`${guests.pop()} sorry i had to cancel your invitation.`);
console.log(`${guests.pop()} sorry i had to cancel your invitation.`);
console.log(`${guests.pop()} sorry i had to cancel your invitation.`);
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, Remaining Guests.`);
}
