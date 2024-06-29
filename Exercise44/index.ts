//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
function makeSandwich(...items:string[]):void {
    for (const item of items) {
        console.log(`${item}`);
    }
    console.log("Your sandwich is ready.");
}
makeSandwich('Egg', 'Salad', 'Bread', 'Chilli Sauce');
makeSandwich('Egg', 'Chicken', 'Bread', 'Mayo', 'Onions');
makeSandwich('Bread', 'Egg', 'Salad');
