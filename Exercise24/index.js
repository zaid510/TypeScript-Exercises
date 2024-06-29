"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
var myCar = "HAVAL";
var myNumber = 10;
var myObj = {
    name: "Zaid",
    age: 23,
    bloodGroup: "B+",
};
var myCity = "Lahore";
var languages = ["Urdu", "English", "Punjabi"];
var studentStatus = false;
//Tests for equality and inequality with strings
console.log(myCar == "HAVAL"); //True
console.log(myCity == "Karachi"); //False
console.log(myCar != "Honda"); //True
console.log(myCity != "Lahore"); //False
//Tests using the lower case function
console.log(myCar.toLowerCase() == "haval"); //True
console.log(myCity.toLowerCase() != "lahore"); //False
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(myNumber == 10); //True
console.log(myNumber == 11); //False
console.log(myNumber != myObj.age); //True
console.log(myNumber != 10); //False
console.log(myObj.age > 21); //True
console.log(myObj.age > 25); //False
console.log(myObj.age < 25); //True
console.log(myObj.age < 23); //False
console.log(myObj.age >= 20); //True
console.log(myObj.age >= 25); //False
console.log(myObj.age <= 25); //True
console.log(myObj.age <= 21); //False
