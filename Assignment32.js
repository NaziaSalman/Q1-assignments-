"use strict";
// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that
// everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames
// are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a
// message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["john", "Jane", "Tim", "Jack", "Sparrow"];
let new_users = ["Jane", "John", "Tom", "Jerry", "Panther"];
for (let new_user of new_users) {
    let lower_new_user = new_user.toLowerCase();
    let is_username_taken = false;
    for (let current_user of current_users) {
        let lower_current_user = current_user.toLowerCase();
        if (lower_new_user === lower_current_user) {
            is_username_taken = true;
            break;
        }
    }
    if (is_username_taken) {
        console.log(`The username ${new_user} is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username ${new_user} is available.`);
    }
}
