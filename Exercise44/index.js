//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("".concat(item));
    }
    console.log("Your sandwich is ready.");
}
makeSandwich('Egg', 'Salad', 'Bread', 'Chilli Sauce');
makeSandwich('Egg', 'Chicken', 'Bread', 'Mayo', 'Onions');
makeSandwich('Bread', 'Egg', 'Salad');
