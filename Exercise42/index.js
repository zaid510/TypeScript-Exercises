"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magician_name = ['Jack', 'Alex', 'Mike'];
function printMagician(magician_name) {
    for (var _i = 0, magician_name_1 = magician_name; _i < magician_name_1.length; _i++) {
        var magician = magician_name_1[_i];
        console.log(magician);
    }
}
function make_great(magician_name) {
    for (var i = 0; i < magician_name.length; i++) {
        magician_name[i] = 'Great ' + magician_name[i];
    }
    return magician_name;
}
var greatmagician_name = make_great(magician_name);
printMagician(greatmagician_name);
