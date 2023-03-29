// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the
// dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop
// a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you
// actually have an empty list at the end
// of your program.

// Store the guests in an array
var guests = ["Sir Zia", "Mam Hira", "Sir Daniyal", "Sir Zeeshan", "Sir Adil", "Sir Jahanzaib"];

// Print the message that you can invite only two people
console.log("Sorry, I can only invite two people for dinner today.");

// Remove guests from the list one by one
while (guests.length > 2) {
  var removedGuest = guests.pop();
  console.log("Sorry, " + removedGuest + ", I can't invite you for dinner.");
}

// Print the message to the remaining guests
console.log("You are still invited, " + guests[0] + " and " + guests[1] + ".");

// Remove the remaining guests from the list
guests.pop();
guests.pop();

// Print the final list
if (guests.length === 0)
  console.log("The list is now empty.");