//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
printMagician(make_great(magician_name));
export{};