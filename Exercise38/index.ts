//Cities: Write a function called describe_city() that accepts the name of a city and its country.
function describe_city(name:string, country: string = 'Pakistan') {
    console.log(`${name} is in ${country}`);
}
describe_city('Lahore');
describe_city('Karachi');
describe_city('Delhi');
export{};