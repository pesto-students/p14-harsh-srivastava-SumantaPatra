// Create a class called Vehicle with properties make, model, year, color, and a method drive().
// The drive() method should log "Driving {make} {model}." to the console.
// Create a subclass called Car that extends Vehicle and adds a property numSeats.
// Create a subclass called RideShareCar that extends Car and adds a property isAvailable.

class Vehicle{
    constructor(make,model,year,color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`Driving ${this.make} ${this.model}`)
    }
}
class Car extends Vehicle{
    constructor(make, model, year, color, numSeats){
        super(make, model, year, color);
        this.numSeats = numSeats
    }
}
class RideShareCar extends Car{
    constructor(make, model, year, color, numSeats, isAvailable) {
        super(make, model, year, color, numSeats);
        this.isAvailable = isAvailable;
    }
}