"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. 
var username = ['admin', 'zaid', 'imran', 'ali'];
for (var i = 0; i < username.length; i++) {
    if (username[i] == 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username[i], ", thank you for logging in again."));
    }
}
