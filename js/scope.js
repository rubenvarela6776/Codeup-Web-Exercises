

"use strict";

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

var myNameIs = 'Ruben';

function sayHello(name) {
    console.log("Hello " + name);
}

sayHello(myNameIs);

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

var random = Math.floor((Math.random()*100)+1);
console.log("Random number is: " + random);

function isOdd(numberToTest) {
(numberToTest % 2 == 1) ? console.log("Number is odd.") : console.log("Number is even.");
}

isOdd(random);

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.