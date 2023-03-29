"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to
// try more comparisons, write more tests. Have at least one True and one False result for each of the
// following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
Object.defineProperty(exports, "__esModule", { value: true });
let car = 'subaru';
let name = 'Ali';
let age = 30;
let countries = ['USA', 'Canada', 'London'];
// Tests for equality and inequality with strings
console.log("Is car equal to 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is name not equal to 'Ali'? I predict True.");
console.log(name != 'Ali');
// Tests using the lower case function
console.log("Is car equal to 'subaru' when compared case-insensitively? I predict True.");
console.log(car.toLowerCase() == 'subaru'.toLowerCase());
console.log("Is name equal to 'Hamza' when compared case-insensitively? I predict True.");
console.log(name.toLowerCase() == 'Hamza'.toLowerCase());
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age equal to 30? I predict True.");
console.log(age == 30);
console.log("Is age not equal to 20? I predict True.");
console.log(age != 20);
console.log("Is age greater than 20? I predict True.");
console.log(age > 20);
console.log("Is age less than 40? I predict True.");
console.log(age < 40);
console.log("Is age greater than or equal to 30? I predict True.");
console.log(age >= 30);
console.log("Is age less than or equal to 30? I predict True.");
console.log(age <= 30);
// Tests using "and" and "or" operators
console.log("Is name equal to 'Hamza' and age equal to 30? I predict True.");
console.log(name == 'Hamza' && age == 30);
console.log("Is name equal to 'Ali' or age equal to 20? I predict False.");
console.log(name == 'Ali' || age == 20);
// Test whether an item is in a array
console.log("Is 'USA' in the countries array? I predict True.");
console.log(countries.includes('USA'));
console.log("Is 'France' in the countries array? I predict False.");
console.log(countries.includes('France'));
// Test whether an item is not in a array
console.log("Is 'France' not in the countries array? I predict True.");
console.log(!countries.includes('France'));
console.log("Is 'USA' not in the countries array? I predict False.");
console.log(!countries.includes('USA'));
