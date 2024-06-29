//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
let numbers = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let suffix= '';
    if (num == 1) {
        suffix = 'st';
    } else if (num == 2) {
        suffix = 'nd';
    } else if (num == 3) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }
    console.log(`${num}${suffix}`);
}
export{};