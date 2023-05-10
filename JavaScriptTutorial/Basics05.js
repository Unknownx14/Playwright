let day = "Tuesday ";
console.log(day.length); //day.length;

let subDay = day.slice(0,4);
console.log(subDay);

console.log(day[3]); //day[3];

//Tue day to split
let splitDay = day.split("s");
splitDay[0];
console.log(splitDay[0]);
splitDay[1];
console.log(splitDay[1]);
console.log(splitDay[1].length);

splitDay[1].trim();
console.log(splitDay[1].trim());
console.log(splitDay[1].trim().length);


//Convert a string into an intiger; and an integer to a String
let date = '23';
let nextDate = '29';

let difference = parseInt(nextDate) - parseInt(date);
console.log(difference);

difference.toString();


//Concatinate
let newQuote = day+"is a funday" +" day";
console.log(newQuote);
//Give me an index of the word "day", so it will give an index where this word starts
console.log(newQuote.indexOf("day")); //newQuote.indexOf("day") 

console.log(newQuote.indexOf("day",5)); //Start finding from the 5th index


//Give a number of the word "day" in a sentence
let count = 0;
let something = newQuote.indexOf("day");
while(something !== -1)
{
    count++;
    something = newQuote.indexOf("day", something+1);
}
console.log(count);