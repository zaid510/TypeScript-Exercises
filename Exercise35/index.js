//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
var animals = ['Cat', 'Dog', 'Lion'];
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " is a beautiful creature."));
}
console.log("These animals ".concat(animals, " are carnivorse"));
