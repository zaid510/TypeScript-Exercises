//Cars: Write a function that stores information about a car in a Object. 
function carInfo(manufacturer: string, model: string, options: { [key: string]: any } = {}): void{
    let myObj = {
        manufacturer,
        model,
        ...options,
    }
    return console.log(myObj);
    
}
carInfo('Honda', 'Corolla', { color: "blue", year: 2020});
carInfo('Honda', 'Corolla', { color: "red", damaged: true});