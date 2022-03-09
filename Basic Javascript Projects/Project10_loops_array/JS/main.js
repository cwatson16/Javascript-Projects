//while loop//
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while(X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//String length function//
//I saw a couple of different examples of the string length function online. I used this as opposed to: let length = text.length; //
function stringLength() {
    var a = "Ford Fiesta St";
    var n = a.length; 
    document.getElementById("length").innerHTML = n;
}

var Instruments = ["Guitar", "Piano", "Drums", "Violin", "Harmonica", "Harp"];
var content = "";
var y;
//For loop function that runs for a certain number of times based on the
//string length of the variable Instruments array//
function for_Loop() {
    for(y=0; y < Instruments.length; y++) {
        content += Instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

//Function that creates an array and object
//and displays the value of the array at index 2
function array_Function() {
    var studentAge = [];
    studentAge[0] = 18;
    studentAge[1] = 17;
    studentAge[2] = 16;
    document.getElementById("Array").innerHTML = "This student is " + studentAge[2] + " years old.";
}

//Create an object with const keyword//
function constant_function() {
    const dog = {breed:"shitzu", cost:"$250", age:"8 years old"};
    dog.sex = "male";
    dog.name = "Chin";
    dog.name = "Abby";
    document.getElementById("Constant").innerHTML = "The name of the " + dog.breed + " was " + dog.name + ".";
}

//Function that utilizes the let keyword//
function let_function() {
    var num1 = 3;
    document.getElementById("randomNumber1").innerHTML = num1;
    {
        let num1 = 2;
        document.getElementById("randomNumber2").innerHTML = num1;
    }
    document.getElementById("randomNumber3").innerHTML = num1;
}

//Function that utilizes the return statement//
function my_function(name) {
    return "Hello " + name;
}
document.getElementById("hello_message").innerHTML = my_function("Christian");

//Creates an object using the let keyword//
let car = {
    make: "Ford",
    model: "Fiesta",
    trim: "ST",
    year: "2016",
    description: function() {
        return "This is a " + this.year + " " +this.make + " " +this.model + " " + this.trim + ".";
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
