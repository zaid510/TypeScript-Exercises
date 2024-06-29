//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
let personName: string = "Zaid mehmood";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));

function toTitleCase(str: string): string{
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}
export{};

