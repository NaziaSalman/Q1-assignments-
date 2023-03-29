// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to
// make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.

let myArray = [1, 2, 3, 4, 5];

// Intentionally causing an array index error
console.log(myArray[10]);

// Correcting the error by checking if the index is within the bounds of the array
if (myArray.length > 10) {
  console.log(myArray[10]);
} else {
  console.log("Array index error: Index 10 is out of bounds.");
}