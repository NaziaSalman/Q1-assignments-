"use strict";
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
// changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its
// order has changed.
Object.defineProperty(exports, "__esModule", { value: true });
// Create an array of 5 places you'd like to visit
let places = ["Beijing", "Sydney", "Toronto", "New York", "Rome"];
// Print the array in its original order
console.log("Original order of places:", places);
// Print the array in alphabetical order without modifying the actual list
let alphabeticalPlaces = places.slice().sort();
console.log("Alphabetical order of places:", alphabeticalPlaces);
// Show that the array is still in its original order
console.log("Original order of places:", places);
// Print the array in reverse alphabetical order without changing the order of the original list
let reverseAlphabeticalPlaces = places.slice().sort().reverse();
console.log("Reverse alphabetical order of places:", reverseAlphabeticalPlaces);
// Show that the array is still in its original order
console.log("Original order of places:", places);
// Reverse the order of the array
places.reverse();
console.log("Reversed order of places:", places);
// Reverse the order of the array again
places.reverse();
console.log("Original order of places:", places);
// Sort the array in alphabetical order
places.sort();
console.log("Alphabetically sorted order of places:", places);
// Sort the array in reverse alphabetical order
places.sort().reverse();
console.log("Reverse alphabetically sorted order of places:", places);
