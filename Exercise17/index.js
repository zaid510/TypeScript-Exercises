"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestList = ["Naseer", "Abdullah", "Waqas"];
var guestWhoCantMakeIt = "Naseer";
console.log("Guys ".concat(guestWhoCantMakeIt, " is unfortunately not coiming."));
var newGuest = "Ahmed";
var index = guestList.indexOf(guestWhoCantMakeIt);
if (index !== -1) {
    // Replace the name at the identified index
    guestList[index] = newGuest;
}
else {
    console.log("Friend not found in the list.");
}
console.log("Hello, guys just wanted to inform you that i found a bigger dinner table.");
guestList.unshift("Mehmood"); //Add Element at start
guestList.push("Hariss"); //Add Element at the end
var middleIndex = guestList.length / 2;
guestList.splice(middleIndex, 0, "Imran");
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello, ".concat(guestList[i], " I'm inviting you for dinner."));
}
console.log("Guys, unfortunately new dinner table won’t arrive in time for the dinner, and I have space for only two guests.");
while (guestList.length > 2) {
    var guestRemoved = guestList.pop();
    console.log("As new dinner table won't arrive so I'm sorry ".concat(guestRemoved, " I can\u2019t invite you to dinner."));
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Hello, ".concat(guestList[i], " I'm inviting you for dinner."));
}
guestList.pop();
guestList.pop();
console.log("Now list is empty", guestList);
