//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
var personName = "Zaid mehmood";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));
function toTitleCase(str) {
    return str.split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}
