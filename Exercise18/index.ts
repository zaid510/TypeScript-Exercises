let placesToVisit: string[] = ['Maldives', 'Paris', 'Dubai','New York','Turkey'];

//Print your array in its original order.
console.log(placesToVisit);

//Print your array in alphabetical order without modifying the actual list.
let sortedPlaces = [...placesToVisit].sort();
console.log(sortedPlaces);

//Show that your array is still in its original order by printing it.
console.log(placesToVisit);

//Print your array in reverse alphabetical order without changing the order of the original list.
sortedPlaces.reverse();
console.log(sortedPlaces);

//Show that your array is still in its original order by printing it.
console.log(placesToVisit);

//Reverse the order of your list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log(placesToVisit);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log(placesToVisit);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placesToVisit.sort();
console.log(placesToVisit);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placesToVisit.reverse();
console.log(placesToVisit);
export{};