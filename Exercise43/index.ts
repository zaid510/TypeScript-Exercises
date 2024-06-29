//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
let magician_name = ['Jack', 'Alex', 'Mike'];
function printMagician(magician_name: string[]): void{
    for (let magician of magician_name) {
        console.log(magician);
    }
}
function make_great(magician_name: string[]): string[]{
    for (let i = 0; i < magician_name.length; i++) {
        magician_name[i] = 'Great ' + magician_name[i];        
    }
    return magician_name;
}
let greatmagician_name = make_great([...magician_name]);
printMagician(greatmagician_name);
printMagician(magician_name);
export{};