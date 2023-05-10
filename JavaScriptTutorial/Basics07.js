//module.exports = with this a class is available for use in other files

module.exports = class Person
{
    age = 25; //Class property
    //Class Property with getters and setters
    get location()
    {
        return "Canada"
    }

    //Constructor is a method that is executed first, it has instance variables (firstName, lastName)
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //My method
    fullName()
    {
        console.log(this.firstName+this.lastName);
    }


}


//Create an object of a class
/*let myObject = new Person("Ray", "Allen");
myObject.age;
console.log(myObject.age);

console.log(myObject.location);

myObject.fullName();*/
