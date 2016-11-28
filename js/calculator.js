/**
 * Created by rubenvarela on 11/16/16.
 */

//if decimal pressed first, make value 0 before decimal
//set max amount of decimal placements allowed to result
//output result every time operator is clicked to not make it necessary to press equals
//be able to put decimal to third box after you've gotten result

(function() {
    "use strict";

    var decimalPressed = false;
    var result;

    var numberButtons = function() {
        innerAlert.innerHTML = "";
        if(secondBox.value == "") {
            firstBox.value += this.innerHTML;
        } else {
            thirdBox.value += this.innerHTML;
        }
    };

    var decimalBtn = function() {
        innerAlert.innerHTML = "";
        if(secondBox.value == "") {
            if(decimalPressed == false) {
                decimalPressed = true;
            } else {
                return;
            }
            firstBox.value += this.innerHTML;
        } else {
            if(decimalPressed == false) {
                decimalPressed = true;
            } else {
                return;
            }
            if(decimalPressed == true && firstBox.value != "") {
                decimalPressed = false;
            } else {
                return;
            }
            thirdBox.value += this.innerHTML;
        }
    };

    var operationsButtons = function() {
        innerAlert.innerHTML = "";
        if(firstBox.value == "") {
            innerAlert.innerHTML = "Input Number First";
        } else {
            secondBox.value = this.innerHTML
        }
    };

    var equalsBtn = function() {
        innerAlert.innerHTML = "";
        if(firstBox.value == "NaN" || thirdBox.value == "") {
            innerAlert.innerHTML = "Sorry You Can't Do That";
            firstBox.value = "";
            secondBox.value = "";
            thirdBox.value = "";
        }
        if(secondBox.value == "+") {
            firstBox.value = parseFloat(firstBox.value) + parseFloat(thirdBox.value);
            thirdBox.value = "";
        }
        if(secondBox.value == "-") {
            firstBox.value = parseFloat(firstBox.value) - parseFloat(thirdBox.value);
            thirdBox.value = "";
        }
        if(secondBox.value == "x") {
            firstBox.value = parseFloat(firstBox.value) * parseFloat(thirdBox.value);
            thirdBox.value = "";
        }
        if(secondBox.value == "/" && thirdBox.value == 0) {
            innerAlert.innerHTML = "You Can't Divide By Zero";
            firstBox.value = "";
            secondBox.value = "";
            thirdBox.value = "";
        }
        if(secondBox.value == "/") {
            firstBox.value = parseFloat(firstBox.value) / parseFloat(thirdBox.value);
            thirdBox.value = "";
        }
    };

    var powerBtn = function() {
        firstBox.value = parseFloat(firstBox.value) * parseFloat(firstBox.value);
        if(firstBox.value == "NaN") {
            innerAlert.innerHTML = "Input Number First";
            firstBox.value = "";
            secondBox.value = "";
            thirdBox.value = "";
        }
    };

    var squareRootBtn = function() {
        firstBox.value = Math.sqrt(parseFloat(firstBox.value));
        if(firstBox.value == "NaN") {
            innerAlert.innerHTML = "Input Number First";
            firstBox.value = "";
            secondBox.value = "";
            thirdBox.value = "";
        }
    };

    var clearBtn = function() {
        innerAlert.innerHTML = "";
        firstBox.value = "";
        secondBox.value = "";
        thirdBox.value = "";
        decimalPressed = false;
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
    var btnSquareRoot = document.getElementById('btnSquareRoot');
    var btnClear = document.getElementById('btnClear');

    var innerAlert = document.getElementById('innerAlert');

    btnDecimal.addEventListener('click', decimalBtn);
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
    btnSquareRoot.addEventListener('click', squareRootBtn);
    btnClear.addEventListener('click', clearBtn);

})();
