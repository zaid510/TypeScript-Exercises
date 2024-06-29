"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Cities: Write a function called describe_city() that accepts the name of a city and its country.
function describe_city(name, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(name, " is in ").concat(country));
}
describe_city('Lahore');
describe_city('Karachi');
describe_city('Delhi');
