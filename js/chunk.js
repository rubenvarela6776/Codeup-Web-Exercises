/** Created by rubenvarela on 11/15/16. ...*/
// write a function `chunk` that splits an array into chunks
// of 3
// ex
// > chunk([1,2,3,4,5,6,7])
//   [[1,2,3], [4,5,6], [7]]
// modify the function to take in a parameter for chunk size

(function () {

"use strict";

    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function chunk(array, chunkSize) {

        var chunks = [];
        var i;

        for(i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;

    }

    var result = chunk(array, 3);

    console.log(result)


})();