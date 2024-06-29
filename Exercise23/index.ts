//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
let myCar: string = "HAVAL";
let myNumber: number = 10;
let myObj: { name: string; age: number; bloodGroup: string } = {
  name: "Zaid",
  age: 23,
  bloodGroup: "B+",
};
let myCity: string = "Lahore";
let languages = ["Urdu", "English", "Punjabi"];
let studentStatus: boolean = false;

console.log("Is car == 'HAVAL'? I predict True.");
console.log(myCar == "HAVAL");

console.log("Is myNumber == '10'? I predict True.");
console.log(myNumber == 10);

console.log("Is name == 'Zaid'? I predict True.");
console.log(myObj.name == "Zaid");

console.log("Is age == '22'? I predict False.");
console.log(myObj.age == 22);

console.log("Is bloodGroup == 'B+'? I predict False.");
console.log(myObj.bloodGroup == "A+");

console.log("Is myCity == 'Lahore'? I predict True.");
console.log(myCity == "Lahore");

console.log("Is index of Urdu == 1? I predict False.");
console.log(languages.indexOf('Urdu')==1);

console.log("Is index of Englisg == 1? I predict True.");
console.log(languages.indexOf('English')==1);

console.log("Is index of Punjabi == 2? I predict True.");
console.log(languages.indexOf('Punjabi')==2);

console.log("Is studentStatus is False? I predict True.");
console.log(studentStatus == false);

export {};
