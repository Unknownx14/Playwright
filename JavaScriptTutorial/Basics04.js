// Functions with a name

function add(a,b)
{
   return a+b;
}

let sum = add(1,4); //Call this function
console.log(sum);


//Annonymous functions - do not have a name and can be assinged only to variables
let sumOfIntegers = function(c,d)
{
    return c+d;
}


//Annonymous functions - do not have a name and can be assinged only to variables
let sumOfNumbers = (c,d)=> c+d;
sumOfNumbers(14,15);
console.log(sumOfNumbers(14,15));



//var vs let
// var on global level/function
// let global level / block {}
let greet = "Morning";

if(1==1)
{
    let greet = "Noon";
}

console.log(greet);