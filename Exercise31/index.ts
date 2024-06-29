//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
let username = ['admin', 'zaid', 'imran', 'ali']
while(username.length!=0){
    username.pop();
}
if (username.length===0) {
    console.log("We need to find some users!");
}
export{};