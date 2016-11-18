/**
 * Created by rubenvarela on 11/16/16.
 */

(function() {
    "use strict";

    var numberButtons = function() {
        innerAlert.innerHTML = "";
        if(secondBox.value == "") {
            firstBox.value = firstBox.value += this.innerHTML;
        } else {
            thirdBox.value = thirdBox.value += this.innerHTML;
        }
        var string = firstBox.value.toString(firstBox.value);
        if(string.indexOf(".") >= 0) {

        }
    };

    var operationsButtons = function() {
        innerAlert.innerHTML = "";
        if(firstBox.value == "") {
            innerAlert.innerHTML = "Sorry you can't do that...";
        } else {
            secondBox.value = this.innerHTML
        }
    };

    var equalsBtn = function() {
        innerAlert.innerHTML = "";
        if(firstBox.value == "NaN" || thirdBox.value == "") {
            innerAlert.innerHTML = "Sorry you can't do that...";
            firstBox.value = "";
            secondBox.value = "";
            thirdBox.value = "";
        }
        if(secondBox.value == "+") {
            var result = parseFloat(firstBox.value) + parseFloat(thirdBox.value);
            firstBox.value = result;
            thirdBox.value = "";
        }
        if(secondBox.value == "-") {
            var result = parseFloat(firstBox.value) - parseFloat(thirdBox.value);
            firstBox.value = result;
            thirdBox.value = "";
        }
        if(secondBox.value == "x") {
            var result = parseFloat(firstBox.value) * parseFloat(thirdBox.value);
            firstBox.value = result;
            thirdBox.value = "";
        }
        if(secondBox.value == "/" && thirdBox.value == 0) {
            innerAlert.innerHTML = "Sorry you can't do that...";
            firstBox.value = "";
            secondBox.value = "";
            thirdBox.value = "";
        }
        if(secondBox.value == "/") {
            var result = parseFloat(firstBox.value) / parseFloat(thirdBox.value);
            firstBox.value = result;
            thirdBox.value = "";
        }
        // if(firstBox.value > firstBox.value.toFixed(4) ) {
        //     var result = firstBox.value.toFixed(4);
        //     firstBox.value = result
        // }
    };

    var powerBtn = function() {
        var result = parseFloat(firstBox.value) * parseFloat(firstBox.value);
        firstBox.value = result;
    };

    var clearBtn = function() {
        innerAlert.innerHTML = "";
        firstBox.value = "";
        secondBox.value = "";
        thirdBox.value = "";
    };


    var firstBox = document.getElementById('firstBox');
    var secondBox = document.getElementById('secondBox');
    var thirdBox = document.getElementById('thirdBox');

    var btnDecimal = document.getElementById('btnDecimal');
    var btnZero = document.getElementById('btnZero');
    var btnOne = document.getElementById('btnOne');
    var btnTwo = document.getElementById('btnTwo');
    var btnThree = document.getElementById('btnThree');
    var btnFour = document.getElementById('btnFour');
    var btnFive = document.getElementById('btnFive');
    var btnSix = document.getElementById('btnSix');
    var btnSeven = document.getElementById('btnSeven');
    var btnEight = document.getElementById('btnEight');
    var btnNine = document.getElementById('btnNine');
    var btnAdd = document.getElementById('btnAdd');
    var btnSubtract = document.getElementById('btnSubtract');
    var btnMultiply = document.getElementById('btnMultiply');
    var btnDivide = document.getElementById('btnDivide');
    var btnSum = document.getElementById('btnSum');
    var btnPower = document.getElementById('btnPower');
    var btnClear = document.getElementById('btnClear');

    var innerAlert = document.getElementById('innerAlert');

    btnDecimal.addEventListener('click', numberButtons);
    btnZero.addEventListener('click', numberButtons);
    btnOne.addEventListener('click', numberButtons);
    btnTwo.addEventListener('click', numberButtons);
    btnThree.addEventListener('click', numberButtons);
    btnFour.addEventListener('click', numberButtons);
    btnFive.addEventListener('click', numberButtons);
    btnSix.addEventListener('click', numberButtons);
    btnSeven.addEventListener('click', numberButtons);
    btnEight.addEventListener('click', numberButtons);
    btnNine.addEventListener('click', numberButtons);
    btnAdd.addEventListener('click', operationsButtons);
    btnSubtract.addEventListener('click', operationsButtons);
    btnMultiply.addEventListener('click', operationsButtons);
    btnDivide.addEventListener('click', operationsButtons);
    btnSum.addEventListener('click', equalsBtn);
    btnPower.addEventListener('click', powerBtn);
    btnClear.addEventListener('click', clearBtn);

})();
