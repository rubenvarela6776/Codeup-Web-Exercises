/**
 * Created by rubenvarela on 11/15/16.
 */

// python example
// write a function that generates a range of numbers as an array
// ex
// > range(1,5)
//   [1, 2, 3, 4]
// modify the function such that you can pass in a third parameter
// for the step
// ex
// > range(2, 11, 2)
//   [2, 4, 6, 8, 10]
// can the third parameter be optional (default to 1)?
// can you create a range in reverse order? i.e. `range(5,2)


(function() {

"use strict";


    function range(firstNumber, secondNumber) {
        var array = [];
        var i;
        array.unshift(firstNumber);
        array.push(secondNumber);
        var indexFirst = array.indexOf(firstNumber);

        // for(i = firstNumber; i < secondNumber; i++) {
        //
        // }

        indexFirst.push();


        return array;
    }

    var result = range(1, 5);

    console.log(result)




})();
