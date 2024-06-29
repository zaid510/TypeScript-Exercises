//Stages of Life: Write an if-else chain that determines a person’s stage of life.
let age = 65;
if (age < 2) {
    console.log("Person is a baby.");
} else if (2 <= age && age < 4) {
    console.log("The person is a toddler.");
} else if (4 <= age && age < 13) {
    console.log("The person is a kid.");
} else if (13 <= age && age < 20) {
    console.log("The person is a teenager.");
} else if (20 <= age && age < 65) {
    console.log("The person is a adult.");
} else if (age >= 65) {
    console.log("The person is a elder.");
}