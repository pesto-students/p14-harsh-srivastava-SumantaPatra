// Create a JavaScript object called Vehicle with properties make, model, and year. Implement the following:

// Add a method called getDetails() that returns a string with the vehicle's make, model, and year.
// Create a subclass called Car that extends Vehicle with an additional property numDoors.
// Override the getDetails() method in Car to include the number of doors in the string that is returned.
// Create an instance of Vehicle and an instance of Car, and call the getDetails() method on each instance, logging the result to the console.

// Define the Vehicle class
class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getDetails() {
      return `Vehicle Details: ${this.year} ${this.make} ${this.model}`;
    }
  }
  
  // Define the Car class that extends Vehicle
  class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    getDetails() {
      return `${super.getDetails()}, ${this.numDoors}-door`;
    }
  }
  
  // Create an instance of Vehicle
  let vehicle = new Vehicle('Toyota', 'Camry', 2022);
  
  // Create an instance of Car
  let car = new Car('Honda', 'Civic', 2023, 4);
  
  // Call getDetails() on each instance
  console.log(vehicle.getDetails()); // Vehicle Details: 2022 Toyota Camry
  console.log(car.getDetails());     // Vehicle Details: 2023 Honda Civic, 4-door
  