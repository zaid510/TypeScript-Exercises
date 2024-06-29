//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestList: string[] = ["Naseer", "Abdullah", "Waqas"];
let guestWhoCantMakeIt: string = "Naseer";
console.log(`Guys ${guestWhoCantMakeIt} is unfortunately not coiming.`);
let newGuest: string = "Ahmed";
let index = guestList.indexOf(guestWhoCantMakeIt);
if (index !== -1) {
    // Replace the name at the identified index
    guestList[index] = newGuest;
} else {
    console.log("Friend not found in the list.");
}
console.log("Hello, guys just wanted to inform you that i found a bigger dinner table.");
guestList.unshift("Mehmood")//Add Element at start
guestList.push("Hariss");//Add Element at the end
let middleIndex: number = guestList.length/2;
guestList.splice(middleIndex, 0, "Imran");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello, ${guestList[i]} I'm inviting you for a dinner`);
}
export{};