let name = 'John';
let age = 30;
let isMarried = true;

// Tests that evaluate to true
console.log("Is name equal to 'John'? I predict True.");
console.log(name == 'John');

console.log("Is age greater than or equal to 30? I predict True.");
console.log(age >= 30);

console.log("Is name not equal to 'Jane'? I predict True.");
console.log(name != 'Jane');

console.log("Is age less than 50? I predict True.");
console.log(age < 50);

console.log("Is isMarried true? I predict True.");
console.log(isMarried);

// Tests that evaluate to false
console.log("Is name equal to 'john'? I predict False.");
console.log(name == 'john');

console.log("Is age less than or equal to 20? I predict False.");
console.log(age <= 20);

console.log("Is name not equal to 'John'? I predict False.");
console.log(name != 'John');

console.log("Is age greater than 40? I predict False.");
console.log(age > 40);

console.log("Is isMarried false? I predict False.");
console.log(!isMarried);
