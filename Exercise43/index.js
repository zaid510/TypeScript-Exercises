"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
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
var greatmagician_name = make_great(__spreadArray([], magician_name, true));
printMagician(greatmagician_name);
printMagician(magician_name);
