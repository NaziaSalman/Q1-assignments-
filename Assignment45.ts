// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature.
// Print the Object that’s returned to make sure all the information was
// stored correctly.

function carInfo(manufacturer, model, ...options) {
    let car = {
      manufacturer: manufacturer,
      model: model,
    };
  
    for (let i = 0; i < options.length; i += 2) {
      car[options[i]] = options[i + 1];
    }
  
    return car;
  }
  
  let car1 = carInfo("Toyota", "Mark-X", "color", "grey", "feature", "sunroof");
  let car2 = carInfo("Honda", "Civic", "color", "black", "feature", "GPS");
  let car3 = carInfo("Porsche", "Model 911", "color", "white");
  
  console.log(car1);
  console.log(car2);
  console.log(car3);
