"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(items) {
    console.log("Sandwich with the following items:");
    for (var i = 0; i < items.length; i++) {
        console.log("- " + items[i]);
    }
}
// Call the function with different number of items each time
makeSandwich(["lettuce", "tomato", "cheese"]);
makeSandwich(["lettuce", "tomato", "cheese", "mayo"]);
makeSandwich(["lettuce", "tomato", "cheese", "mayo", "mustard"]);
