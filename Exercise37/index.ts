//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
function make_shirt(size:string = 'Large', msg: string = 'I love TypeScript') {
    console.log(`Size of t-shirt is: ${size} and message is: ${msg}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('XLarge', 'Hello World!');
export{};