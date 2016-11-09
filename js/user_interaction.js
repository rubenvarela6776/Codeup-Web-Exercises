"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var username = prompt("What is your name?");
var userLikesPizza;

while (!username) {
    username = prompt("Give me your name. NOW!!")
}

// TODO: Show an alert message that welcomes the user based on their input.

alert("Welcome, " + username);

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

userLikesPizza = confirm("Do you like pizza?");

if (userLikesPizza) {
    alert("Yay me too!!!");
} else {
    alert("How dare you...")
}