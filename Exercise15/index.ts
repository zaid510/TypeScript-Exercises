//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guestList: string[] = ["Naseer", "Abdullah", "Waqas"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello, ${guestList[i]} I'm inviting you to a dinner party`);
}
let guestWhoCantMakeIt: string = "Naseer";
console.log(`Guys ${guestWhoCantMakeIt} is unfortunately not coiming.`);
let newGuest: string = "Ahmed";
let index = guestList.indexOf(guestWhoCantMakeIt);
if (index !== -1) {
    // Replace the name at the identified index
    guestList[index] = newGuest;
    for (let i = 0; i < guestList.length; i++) {
        console.log(`Here is updated list: Hello, ${guestList[i]} I'm inviting you to a dinner party`);
    }
} else {
    console.log("Friend not found in the list.");
}
export{};