let guests: string[] = ["Albert Einstein", "Marie Curie", "Stephen Hawking"];
const cantMakeIt = "Marie Curie";
const newGuest = "Nikola Tesla";

console.log(`${cantMakeIt} can't make it to the dinner.`);


guests.splice(1, 1, "Nikola Tesla"); 

for (let i = 0; i < guests.length; i++) {
  console.log(`Dear ${guests[i]}, you are cordially invited to dinner at my place on Saturday. I would be honored if you could join me.`);
}