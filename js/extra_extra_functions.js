/**
 * Created by rubenvarela on 11/9/16.
 */

// returns a string with a message that contains the name of the person shopping, and
// the total amount they will pay
// ex. 'Zach\'s total is $225, he will pay $200' // if a discount is applied
function calculateHEBDiscount(shopperName, groceryTotal, discountPercent) {
    var discountPrice = groceryTotal * discountPercent;
    var message;
    if (groceryTotal > 200) {
        message = (shopperName + "'s total is $" + groceryTotal + ", he will pay $" + discountPrice)
    } else {
        message = (shopperName + "'s total is $" + groceryTotal)
    }
    return message;
}

var HebResult = calculateHEBDiscount("Ryan", 500, 0.3);
console.log(HebResult);









// will take in two strings, and randomly pick one of the two strings to return

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function decideBetweenOptions(theFirstOption, theSecondOption) {
    var rand = getRandomInt(0, 2);
    if (rand) {
        return theFirstOption;
    } else {
        return theSecondOption;
    }
}

var selectedOption = decideBetweenOptions("a different string", "something else");

console.log(selectedOption);












// will take in a lucky number and a total, and return the new total
// applying a discount based on the lucky number (possibly none at all)
function applyLuckyNumberDiscount(luckyNumber, totalBeforeDiscount) {
    var totalAfterDiscount = totalBeforeDiscount * 0.9;
    var message;
    if(luckyNumber % 2 == 1) {
        message = ("Your total before discount is: $" + totalBeforeDiscount + ", your lucky number is: " + luckyNumber + " You apply for a 10% discount! Your discounted price is $" + totalAfterDiscount)
    } else {
        message = ("Nope you don't apply for discount your total is $" + totalBeforeDiscount)
    }
    return message;
}

var luckyNumber = Math.floor(Math.random() * 100) + 1;
var luckyNumberResult = applyLuckyNumberDiscount(luckyNumber, 70);
console.log(luckyNumberResult);



// will take in a number and return a string that is the corresponding month name
function convertMonthNumberToName(monthNumber) {
    var message;
    switch (monthNumber) {
        case 1:
            message = ("January");
            break;
        case 2:
            message = ("February");
            break;
        case 3:
            message = ("March");
            break;
        case 4:
            message = ("April");
            break;
        case 5:
            message = ("May");
            break;
        case 6:
            message = ("June");
            break;
        case 7:
            message = ("July");
            break;
        case 8:
            message = ("August");
            break;
        case 9:
            message = ("September");
            break;
        case 10:
            message = ("October");
            break;
        case 11:
            message = ("November");
            break;
        case 12:
            message = ("December");
            break;

    }
    return message;
}

var monthNumberResult = convertMonthNumberToName(10);
console.log(monthNumberResult);






// will take in a starting number of cones and simulate customers coming and buying cones
// it's okay to console.log here

// todo: while all of the cones have not been sold
// generate a random number to sell
// ...

function sellCones(allCones) {
    // while (allCones > 0) {
    //     console.log("Selling " + cones + "...")
    // }
}

var cones = Math.floor(Math.random() * 5) + 1;
var allCones = Math.floor(Math.random() * 50) + 50;
sellCones(allCones);

// skip the last one with the powers of two