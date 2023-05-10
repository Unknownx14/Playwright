const Person = require("./Basics07");


class Pet extends Person
{
    //Constructor is a method that is executed first, it has instance variables (firstName, lastName)
    constructor(firstNamePet, lastNamePet)
    {
        //When there is an inheritance (extends) we need to call a Parent class constructor first
        super(firstNamePet, lastNamePet);
    }


    //This location() will overrride location() from the Parent class, it will show from the child class
    get location()
    {
        return "USA";
    }

}

let objectPet = new Pet("Donkey", "Kong");
objectPet.fullName();
console.log(objectPet.location);