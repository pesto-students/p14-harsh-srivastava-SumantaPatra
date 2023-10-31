// Instructions:

// Write a program that demonstrates the use of "this" keyword in JavaScript.

// Create a class named "Person" with the following properties:
// Name: string
// Age: number
// Gender: string
// Nationality: string
// Create a method named "introduce" in the Person class that returns a string containing the person's name, age, gender, and nationality.
// Create three instances of the Person class and assign values to their properties.
// Call the introduce method on each instance and print the returned string to the console.
// Create a subclass named "Student" that inherits from the Person class.
// Add a new property to the Student class named "subject" of type string.
// Create a method named "study" in the Student class that returns a string containing the subject that the student is studying.
// Create an instance of the Student class and assign values to its properties.
// Call the introduce method on the Student instance and print the returned string to the console.
// Call the study method on the Student instance and print the returned string to the console.


class Person{
    constructor(Name,Age,Gender,Nationality){
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
        this.Nationality = Nationality
    }
    introduce(){
        return `My name is${this.Name},I am ${this.Age} years old, I am ${this.Gender} and I am ${this.Nationality}`
    }
}

class Student extends Person{
    constructor(Name,Age,Gender,Nationality,subject){
        super(Name,Age,Gender,Nationality)
        this.subject = subject
    }
    study(){
        return `I am studying ${this.subject}`
    }
}

const personOne = new Person("John",25,"male","American")
const personTwo = new Person("Jane",30,"female","Canadian")
const personThree = new Person("Bob",20,"male","Australian")

console.log(personOne.introduce())
console.log(personTwo.introduce())
console.log(personThree.introduce())

const studentInstance = new Student("Sarah",18,"female","British","Computer Science");
console.log(studentInstance.introduce())
console.log(studentInstance.study())


