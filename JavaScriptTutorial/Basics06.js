//JS Object is a collection of properties

//JS Object is person
let person = {

firstName: "Tim",
lastName: "Douglas",
age: 24,
fullName: function()
    {
        this.firstName+this.lastName;
        console.log(this.firstName+this.lastName);
    }      

}

console.log(person.fullName()); //For calling a function as a property, we need to include ()
console.log(person.lastName);
console.log(person['firstName']);

//Change some key:value pair property
person.firstName = "Michael";
console.log(person.firstName);


//Add one more property to an Object
person.gender = "male";
console.log(person);

//Delete a property
delete person.gender;
console.log(person);



//Check if a property exists in an object
'gender' in person;
console.log('gender' in person);


//Printout every property in an object
for(let key in person)
{
    console.log(person[key]);
}


//