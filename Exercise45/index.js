var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Cars: Write a function that stores information about a car in a Object. 
function carInfo(manufacturer, model, options) {
    if (options === void 0) { options = {}; }
    var myObj = __assign({ manufacturer: manufacturer, model: model }, options);
    return console.log(myObj);
}
carInfo('Honda', 'Corolla', { color: "blue", year: 2020 });
carInfo('Honda', 'Corolla', { color: "red", damaged: true });
