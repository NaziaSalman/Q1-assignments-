// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

function make_great(magicians) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push("The Great " + magicians[i]);
    }
    return greatMagicians;
  }
  
  let magicians = ["Phuppo", "Khala", "Rishty wali Aunty"];
  let greatMagicians = make_great(magicians.slice());
  
  function show_magicians(magicians) {
    console.log("Magicians: ");
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  console.log("Original Magicians: ")
  show_magicians(magicians);
  console.log("\nGreat Magicians: ")
  show_magicians(greatMagicians);