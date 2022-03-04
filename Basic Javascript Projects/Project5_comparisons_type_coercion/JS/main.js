//Displays the data type of 3.2
document.write("Data type of 3.2: ");
document.write(typeof 3.2);

//Function that displays infinity and -infinity
function firstFunction() {
    document.getElementById("negInfinite").innerHTML = -3E310;
    document.getElementById("posInfinite").innerHTML = 100E1000000;
}

//Function that displays true and false using boolean logic
function booleanFunction() {
    document.getElementById("x").innerHTML = 10>2;
    document.getElementById("y").innerHTML = 20<1;
}

//Displays number 4
console.log(2+2);

//Function utilizing type coercion (combining a string and a number!)
function coercion() {
    document.getElementById("z").innerHTML = ("20" + 3);
}

//Displays false in the console
console.log(3<1);

//Function that displays true and false using double equal signs
function doubleEqualSign() {
    document.getElementById("a").innerHTML = ("a"=="a");
    document.getElementById("b").innerHTML = ("b"=="a");
}

//Function that displays true or false using === operator
function tripleEqual() {
    document.getElementById("c").innerHTML = '4= = =4: '+(4===4);
    document.getElementById("d").innerHTML = '2= = ="two": '+(2==="two");
    document.getElementById("e").innerHTML = '1= = ="1": ' +(1==="1");
    document.getElementById("f").innerHTML = '5 = = =6: ' +(5===6);
}

//Function that displays true or false using && and || operator
function andOr() {
    document.getElementById("q").innerHTML = '"a"= ="a" && 10 < 2 is ' + ("a"=="a" && 10<2);
    document.getElementById("r").innerHTML = '"a"= ="a" && 2 > 1 is ' +("a"=="a" && 2>1);
    document.getElementById("s").innerHTML = '1 = = = 1 | | 2 < 1 is ' +(1===1)||2<1;
    document.getElementById("t").innerHTML = '"you" = = "u" | | 3 > 100 is ' +("you"=="u" || 3>100);
}

//Function that displays true or false using ! operator
function notFunction() {
    document.getElementById("not").innerHTML = '! (20 > 10) is ' +!(20>10);
    document.getElementById("not2").innerHTML = '! (5 > 10) is ' +!(5>10);
}