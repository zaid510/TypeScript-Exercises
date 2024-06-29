"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    var suffix = '';
    if (num == 1) {
        suffix = 'st';
    }
    else if (num == 2) {
        suffix = 'nd';
    }
    else if (num == 3) {
        suffix = 'rd';
    }
    else {
        suffix = 'th';
    }
    console.log("".concat(num).concat(suffix));
}
