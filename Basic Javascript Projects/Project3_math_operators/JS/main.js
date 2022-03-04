//This is an addition function that adds 3 + 3 and displays it as 3 + 3 = 6//

function additionFunction() {                                                  
    var addition = 3 + 3;
    document.getElementById("Math").innerHTML = "3 + 3 = " + addition;
}

//This is a subtraction function that subtracts 10 from 20 and displays it as 20 - 10 = 10//

function subtractionFunction() {
    var subtraction = 20 - 10;
    document.getElementById("Minus").innerHTML = "20 - 10 = " + subtraction;
}

//Function that multiplies 8 times 8 and displays it as 6 x 6 = 36//
function multiplyFunction() {
    var multiplication = 8*8;
    document.getElementById("multiply").innerHTML = "6 x 6 = " + multiplication;
}

//Function that divides 100 by 25 and displays it as 100 / 25 = 4//
function divisionFunction() {
    var division = 100/25;
    document.getElementById("divide").innerHTML = "100 / 25 = " + division;
}

//Function that uses multiple mathematical operations and displays the result//
function moreMath() {
    var someMath = (4*4)/1 + (3-1);
    document.getElementById("math").innerHTML = "( (4 x 4) / 1 ) + (3 - 1) = " + someMath;
}

//Function that uses the modulus operator and displays the result 100 / 25 has a remainder of: //
function modulusFunction() {
    var x = 25%6;
    document.getElementById("mod").innerHTML = "25 / 6 has a remainder of: " + x;
}

//Function that uses the negation operator and displays the result -4//
function negationOperator(){
    var y = 3;
    document.getElementById("negate").innerHTML = -y;
}

//Increment and Decrement Function that increases 12 by one and decreases 100 by one //
function inc_dec() {
    var z = 50;
    z++;
    var t = 100;
    t--;
    document.getElementById("number").innerHTML= "50 is now "+ z + " and 100 is now "+ t;
}

//Random number function between 0 and 100 dispalyed in a window alert//
window.alert(Math.random() * 100);

//Math object method function displaying//
function maxNum(){
    var m = Math.max(2, 3, 8, 22, 22.2);
    document.getElementById("max").innerHTML = "Between these numbers [2,3,8,22] the highest value is: " + m;
}