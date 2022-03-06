//Global Variable function//
var x=2
function subtraction_function_1() {
    var total = 10 - x;
    document.getElementById("sub_1").innerHTML=total;
}

//Local Variable//
function subtraction_function_2() {
    var y=2
    var total = 10 - y;
    document.getElementById("sub_2").innerHTML=total;
}

//Intentional function with error 
// Can't call the var y because it is a local variable in another function
function subtraction_function_3() {
    var total = 10 - y;
    document.getElementById("sub_3").innerHTML=total;
}

//If statement function using Date Method//
function get_Date() {
    //Conditional statement//
    if(new Date().getHours() < 12) {
        document.getElementById("eat").innerHTML = "Don't forget to eat breakfast!";
    }
}

//If statement that checks to see if the two string variables are the same//
function same_word() {
    if("car"=="car") {
        document.getElementById("vroom").innerHTML = "The two words are the same.";
    }
}

//If else statement//
function eat_function() {
    eat = document.getElementById("eat").value;
    if (eat == "yes") {
        hungry = "Good job! You deserve some dessert.";
    }
    else if (eat == "no") {
        hungry = "You must be hungry. Eat a big meal!";
    }
    else {
        hungry = "Please enter yes or no."
    }
    document.getElementById("stay_fed").innerHTML = hungry;
}

//Function that tells you the time of day based on your current time//
function Time_function() {
    var Time = new Date().getHours(); //gets current time from user//
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the morning!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is the evening.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}