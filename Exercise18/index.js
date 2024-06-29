var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ['Maldives', 'Paris', 'Dubai', 'New York', 'Turkey'];
//Print your array in its original order.
console.log(placesToVisit);
//Print your array in alphabetical order without modifying the actual list.
var sortedPlaces = __spreadArray([], placesToVisit, true).sort();
console.log(sortedPlaces);
//Show that your array is still in its original order by printing it.
console.log(placesToVisit);
//Print your array in reverse alphabetical order without changing the order of the original list.
sortedPlaces.reverse();
console.log(sortedPlaces);
//Show that your array is still in its original order by printing it.
console.log(placesToVisit);
//Reverse the order of your list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log(placesToVisit);
//Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log(placesToVisit);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit.sort();
console.log(placesToVisit);
