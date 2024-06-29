//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let myFriends: String[] = ["Abdullah", "Ahmed", "Naseer"];
let message: String = "How are you doing today?";
for (let i = 0; i < myFriends.length; i++) {
    console.log(`Hello! ${myFriends[i]}, ${message}`);
}