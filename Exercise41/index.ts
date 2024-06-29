//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician_name = ['Jack', 'Alex', 'Mike'];
function printMagician(magician_name: string[]): void{
    for (let magician of magician_name) {
        console.log(magician);
    }
}
printMagician(magician_name);
export{};