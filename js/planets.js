/**
 * Created by rubenvarela on 11/10/16.
 */

(function(){
    "use strict";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomElement(array) {
    //define our boundaries
    var min = 0;
    var max = array.length - 1;

    //get a random index
    var randomIndex = getRandomInt(min, max + 1);

    var randomElement = array[randomIndex];

    //return the item at that index
    return randomElement;
}






    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.

    var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();









    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.unshift("Sun");

    logPlanets();









    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.push("Pluto");

    logPlanets();







    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    var shiftSun = planets.shift();

    logPlanets();







    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    var popPluto = planets.pop();

    logPlanets();







    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    var indexEarth = planets.indexOf("Earth");


    indexEarth++;






    console.log('Using splice to remove the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.splice(indexEarth, 1);

    logPlanets();







    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    var indexJupiter = planets.indexOf("Jupiter");

    planets.splice(indexJupiter, 0, "Mars");

    logPlanets();







    console.log("Reversing the order of the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.reverse();

    logPlanets();







    console.log("Sorting the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    planets.sort();

    logPlanets();






})();