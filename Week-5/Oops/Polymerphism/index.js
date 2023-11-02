// Create a class called Shape with a method calculateArea(). Then, create three subclasses called Rectangle, Triangle, and Circle, each of which extends Shape.

// Each subclass should override the calculateArea() method as follows:

// Rectangle should accept width and height parameters and calculate the area as width
// height.
// Triangle should accept base and height parameters and calculate the area as (base * height) / 2.
// Circle should accept radius parameter and calculate the area as Math.PI * radius * radius.
// Finally, create instances of each subclass and call the calculateArea() method on each instance, logging the result to the console.

class Shape{
    calculateArea(){
        console.log("Area calculation not implemented for the base class Shape.")
    } 
}
class Rectangle extends Shape{
    constructor(width,height){
        super()
        this.height = height;
        this.width = width;
    }
    calculateArea(){
        return this.width * this.height;
    }
}
class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return (this.base * this.height) / 2;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const rectangle = new Rectangle(5, 8);
const triangle = new Triangle(4, 6);
const circle = new Circle(3);

console.log('Rectangle Area:', rectangle.calculateArea());
console.log('Triangle Area:', triangle.calculateArea());
console.log('Circle Area:', circle.calculateArea());