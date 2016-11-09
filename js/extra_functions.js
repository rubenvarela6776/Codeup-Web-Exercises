/**
 * Created by rubenvarela on 11/8/16.
 */

"use strict";

var firstNumber;
var secondNumber;
var res = 0;

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function multiply(a,b){
    var res = 0;
    for(var i = 0;i<b;i++){
        res += a;
    }
    return res;
}

function askForNumbers(){
    firstNumber = parseInt(prompt("Give me the first number"));
    secondNumber = parseInt(prompt("Give me the second number"));
//        if(firstNumber == NaN || secondNumber == NaN){
//            alert("Invalid input");
//            return false;
//        }
}

var oper = prompt("Choose between: sum, subtract, divide, multiply.");

switch(oper){
    case "sum":
        askForNumbers();
        res = add(firstNumber, secondNumber);
        break;
    case "subtract":
        askForNumbers();
        res = subtract(firstNumber, secondNumber);
        break;
    case "divide":
        askForNumbers();
        res = divide(firstNumber, secondNumber);
        break;
    case "multiply":
        askForNumbers();
        res = multiply(firstNumber, secondNumber);
        break;
    default:
        alert("Invalid function name");
}

alert("Answer = " + res);