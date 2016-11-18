(function(){

    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    var names = ["Ruben", "Natalia", "Carolina", "Carlos"];

    // TODO: Create a log statement that will log the number of elements in the names array.

    console.log("There are " + names.length + " elements in the array");

    // TODO: Create log statements that will print each of the names array elements individually.


    // using no loop
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    //using for loop
    for(var i = 0; i < names.length; i += 1) {
        console.log("name " + (i+1) + " " + names[i])
    }

    //using forEach
    names.forEach(function(number) {
       console.log(number);
    });


})();