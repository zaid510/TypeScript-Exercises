"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestList = ["Naseer", "Abdullah", "Waqas"];
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello, ".concat(guestList[i], " I'm inviting you to a dinner party"));
}
var guestWhoCantMakeIt = "Naseer";
console.log("Guys ".concat(guestWhoCantMakeIt, " is unfortunately not coiming."));
var newGuest = "Ahmed";
var index = guestList.indexOf(guestWhoCantMakeIt);
if (index !== -1) {
    // Replace the name at the identified index
    guestList[index] = newGuest;
    for (var i = 0; i < guestList.length; i++) {
        console.log("Here is updated list: Hello, ".concat(guestList[i], " I'm inviting you to a dinner party"));
    }
}
else {
    console.log("Friend not found in the list.");
}
