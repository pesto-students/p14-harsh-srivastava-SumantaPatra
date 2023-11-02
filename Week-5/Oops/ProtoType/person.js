// Create a JavaScript object called person with properties name, age, and email. Implement the following:

// Make the name and email properties read-only.
// Make the age property write-only.
// Add a method called getAge() that returns the age property.
// Add a method called setAge() that accepts an age parameter and updates the age property.
const ageSymbol = Symbol('age');   // use symbols for preventing direct access
let person = {
    _name: "John Doe",  // read ony 
    [ageSymbol]: 25,  // write only
    _email: "john.doe@example.com", // read only
    getAge:function (){
        return this[ageSymbol]
    },
    setAge:function(age){
        this[ageSymbol] = age
    }
  };

  Object.defineProperty(person,'_name',{writable:false})
  Object.defineProperty(person,'_email',{writable:false})
 person.setAge(30)
 console.log(person.getAge())

