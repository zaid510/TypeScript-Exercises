//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
let current_users = ['zaid', 'admin', 'ali', 'imran', 'zia'];
let new_users = ['ahmed', 'umer', 'usman', 'mehmood', 'zia', 'zaid'];
let lowerCaseCurrentUsers = current_users.map(user => user.toLowerCase());
for (let i = 0; i < new_users.length; i++) {
    let newUserLower = new_users[i].toLowerCase();
    // Use indexOf instead of includes
    if (lowerCaseCurrentUsers.indexOf(newUserLower) !== -1) {
        console.log(`The username "${new_users[i]}" is already taken. Please enter a new username.`);
    } else {
        console.log(`The username "${new_users[i]}" is available.`);
    }
}
export{};