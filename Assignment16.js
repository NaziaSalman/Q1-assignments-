"use strict";
// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing
// people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ['Sir Zia', 'Mam Hira', 'Sir Daniyal'];
console.log("Guests at the dinner table: " + guests);
console.log("Good news! We found a bigger dinner table and can invite more guests.");
guests.unshift("Sir Zeeshan");
let middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Sir Adil");
guests.push("Sir Jahanzaib");
for (let i = 0; i < guests.length; i++) {
    console.log("You are cordially invited to dinner, " + guests[i] + ".");
}
