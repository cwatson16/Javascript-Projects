//Function that concatenates string variables//
function express() {
    var a = "Tears ";
    var b = "for ";
    var c = "Fears.";
    var feelings = a.concat(b, c);
    document.getElementById("best_band").innerHTML = feelings;
}

//Function that uses the slice method on a string variable//
function ramen() {
    var shio = "Tonkotsu";
    var section = shio.slice(0,3); //slices the first three characters//
    document.getElementById("broth").innerHTML = section;
}

//Function that uses the toUpperCase method//
function allCaps() {
    var y = document.getElementById("jamz").innerHTML; //setting the value in p in the variable y//
    var z = y.toUpperCase();
    document.getElementById("jamz").innerHTML = z;
}

//Function that converts a number value to a string value using the toString method//
function numStr() {
    var number_value = 716;
    var string_value = number_value.toString();
    document.getElementById("sevenOneSix").innerHTML = string_value;
}

//Function that formats a number to a specific length of 11 using the toPrecision method//
function edit_number() {
    var original_number = 12938.3012987376112;
    var new_number = original_number.toPrecision(11);
    document.getElementById("precise_number").innerHTML = new_number;
}

//Function that returns a number as a number using the valueOf method//
function value_of() {
    var number_1 = 716;
    var number_2 = number_1.valueOf();
    document.getElementById("some_numbers").innerHTML = number_2;
}