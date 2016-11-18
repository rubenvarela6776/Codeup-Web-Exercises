/**
 * Created by rubenvarela on 11/15/16.
 */

//write a function that takes an array, and returns an object
// whose keys are each value in the array, and whose values
// are the number of occurrences of each key
// ex
// > getCount([6, 7, 4, 4])
// {6: 1, 7: 1, 4: 2}

(function() {

"use strict";

    function uniqueWithCount(array) {
        var counts = {};

        //set the proper keys
        array.forEach(function(item) {
            counts[item] = 0;
        });

        //set the proper values for each key
        array.forEach(function(item) {
            counts[item] += 1;
        });

        return counts;
    }

    console.log(uniqueWithCount([1, 2, 3, 2, 1]));



})();