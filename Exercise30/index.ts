//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. 
let username = ['admin', 'zaid', 'imran', 'ali']
for (let i = 0; i < username.length; i++) {
    if(username[i]=='admin'){
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username[i]}, thank you for logging in again.`);
    }
}
export{};