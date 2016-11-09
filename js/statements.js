/**
 * Created by rubenvarela on 11/4/16.
 */

"use strict";

// var luckyNumber = Math.floor(Math.random()* 6);
//
// switch (luckyNumber) {
//     case 0:
//         console.log("Sorry no discount for you! You're total is $60");
//         break;
//     case 1:
//         console.log("Your number is 1, your total is $" + 60 * .9);
//         break;
//     case 2:
//         console.log("Your number is 2, your total is $" + 60 * .75);
//         break;
//     case 4:
//         console.log("Your number is 4, your total is $" + 60 * .5);
//         break;
//     case 5:
//         console.log("Your number is 5, you get everything for free!");
//         break;
//     default:
//         console.log("You don't apply")
// }
//
// var month = 10;
//
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//
//     case 7:
//         console.log("July");
//         break;
//     case 8:
//         console.log("August");
//         break;
//     case 9:
//         console.log("September");
//         break;
//     case 10:
//         console.log("October");
//         break;
//     case 11:
//         console.log("November");
//         break;
//     case 12:
//         console.log("December");
//         break;
// }








            // start with a random number of cones

            // until all the cones have been sold...
            //   - generate a random number between 1 and 5
            //   - subtract that number from the total if there
            //     are enough cones left
            //   - console log the relevant information

// var coneInventory = Math.floor(Math.random() * 50) + 50;
// var conesToSell;
//
// while (coneInventory > 0) {
//     conesToSell = Math.floor(Math.random() * 5) + 1;
//     if (conesToSell <= coneInventory) {
//         console.log('Selling ' + conesToSell + ' cones...');
//         coneInventory -= conesToSell;
//     } else {
//         console.log('I can\'t sell you ' + conesToSell + ', I only have ' + coneInventory);
//     }
// }
//
// console.log("I sold all the cones!!!");

            // desired output
            // 2
            // 4
            // 8
            // 16
            // 32
            // 64
            // 128
            // 256
            // 512
            // 1024
            // 2048
            // 4096
            // 8192
            // 16384
            // 32768
            // 65536

// var i = 0;
// while (i <= 65536) {
//     console.log(i);
//     i *= 2;
// }



// var i = 0;
// while (i < 5) {
//     console.log(i);
//     i += 1;
// }


// for (var i = 0; i < 5; i += 1) {
//     console.log(i)
// }


// for(var i = 2; i <= 65536; i *= 2) {
//     console.log(i)
// }





            // for - special case of while
            // syntax
            // for (/*initial*/; /*condition*/; /*expression*/) { /* statements */ }

            // var i = 0;
            // while (i < 5) {
            //     console.log(i);
            //     i += 1;
            // }
            //
            // for (var i = 0; i < 5; i += 1) {
            //     console.log(i);
            // }




// // rewrite this with a for loop
// var i = 2;
// while (i <= 65536) {
//     console.log(i);
//     i *= 2;
// }







