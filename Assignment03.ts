// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

let name = "Nazia Salman";

// Lowercase
let lowercase = name.toLowerCase();
console.log(`Lowercase: ${lowercase}`);

// Uppercase
let uppercase = name.toUpperCase();
console.log(`Uppercase: ${uppercase}`);

// Title case
let titlecase = name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(`Title case: ${titlecase}`);