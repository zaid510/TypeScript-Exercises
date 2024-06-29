"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
function make_shirt(size, msg) {
    if (size === void 0) { size = 'Large'; }
    if (msg === void 0) { msg = 'I love TypeScript'; }
    console.log("Size of t-shirt is: ".concat(size, " and message is: ").concat(msg));
}
make_shirt();
make_shirt('Medium');
make_shirt('XLarge', 'Hello World!');
