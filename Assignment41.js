"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ['Phuppo', 'Khala', 'Rishty wali Aunty'];
function show_magicians(magicians_array) {
    for (let magician of magicians_array) {
        console.log(magician);
    }
}
show_magicians(magicians);
