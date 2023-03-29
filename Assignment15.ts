// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.

var guests = ["Sir Zia", "Mam Hira", "Sir Daniyal"];

console.log(`Unfortunately, ${guests[0]} can't make it to dinner.`);

guests[0] = "Sir Jahanzaib";

for (var i = 0; i < guests.length; i++)
  console.log(`Dear ${guests[i]}, I would like to personally invite you to dinner.`);