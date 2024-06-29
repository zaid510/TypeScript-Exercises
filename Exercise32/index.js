"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
var current_users = ['zaid', 'admin', 'ali', 'imran', 'zia'];
var new_users = ['ahmed', 'umer', 'usman', 'mehmood', 'zia', 'zaid'];
var lowerCaseCurrentUsers = current_users.map(function (user) { return user.toLowerCase(); });
for (var i = 0; i < new_users.length; i++) {
    var newUserLower = new_users[i].toLowerCase();
    // Use indexOf instead of includes
    if (lowerCaseCurrentUsers.indexOf(newUserLower) !== -1) {
        console.log("The username \"".concat(new_users[i], "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(new_users[i], "\" is available."));
    }
}
