/**
 * Created by rubenvarela on 11/3/16.
 */
"use strict";
    var average = 81;

    if (average > 80) {
        console.log("You're Awesome")
    } else {
        console.log("You need to practice more")
    }

    var cameron = 180;
    var ryan = 250;
    var george = 320;

    if (cameron >= 200) {
        console.log("Cameron - before discount: " + cameron + "," + " after discount: " + cameron * 0.9)
    } else {
        console.log("Cameron doesn't apply for discount, total is: " + cameron);
    }

    if (ryan >= 200) {
        console.log("Ryan - before discount: " + ryan + "," + " after discount: " + ryan * 0.9)
    } else {
        console.log("Ryan doesnt apply for discount, total is: " + ryan);
    }
    //
    if (george >= 200) {
        console.log("George - before discount: " + george + "," + " after discount: " + george * 0.9)
    } else {
        console.log("George doesnt apply for discount, total is: " + george)
    }

    var flipACoin = Math.floor(Math.random()* 2);

    if (flipACoin == 1) {
        console.log("buy a car");
    } else {
        console.log("buy a house");
    }