"use strict";
let string1 = "hello";
let string2 = "world";
let string3 = "HELLO";
let number1 = 10;
let number2 = 20;
let number3 = 10;
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
// Tests for equality and inequality with strings
console.log(string1 == string2); // false
console.log(string1 != string2); // true
console.log(string1 == string3); // false
console.log(string1 != string3); // true
// Tests using the lower case function
console.log(string1.toLowerCase() == string3.toLowerCase()); // true
console.log(string1.toLowerCase() != string2.toLowerCase()); // true
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(number1 == number2); // false
console.log(number1 != number2); // true
console.log(number1 > number2); // false
console.log(number1 < number2); // true
console.log(number1 >= number2); // false
console.log(number1 <= number2); // true
console.log(number1 == number3); // true
console.log(number1 != number3); // false
console.log(number1 > number3); // false
console.log(number1 < number3); // false
console.log(number1 >= number3); // true
console.log(number1 <= number3); // true
// Tests using "and" and "or" operators
console.log(number1 < number2 && string1 == "hello"); // true
console.log(number1 > number2 || string2 == "world"); // true
console.log(number1 == number2 && string2 == "world"); // false
console.log(number1 != number2 || string1 == "world"); // true
// Test whether an item is in an array
console.log(array1.includes(1));
console.log(array1.includes(4));
