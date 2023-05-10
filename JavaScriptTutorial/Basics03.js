var marks = Array(6);
 var marks = new Array(20,40,35,12,37,100);

 var marks = [20,40,35,12,37,100]; //The easyest way of declaring an array
 console.log(marks[2]); //35
 marks[3] = 14;
 console.log(marks); //[20,40,35,12,37,100]
 console.log(marks.length); //6

 marks.push(75); //For adding a new element into an array at the end
 console.log(marks); //[20,40,35,12,37,100,75]

 marks.pop(); //For removing the last element in an array

 marks.unshift(10); //For adding a new element into an array at the start
 console.log(marks);

 console.log(marks.indexOf(100)); //Returns the index of an element

 marks.includes(33); //Checks if an element is included in an array
 console.log(marks.includes(33));

 subMarks = marks.slice(2,5); //It starts from the index 2 and finishes on the index 4, so index 2, 3 and 4 are included
 console.log(subMarks); //For this subMarks there is no need for telling it is var because JS knows, based on the var marks

 for(let i=0;i<marks.length;i++)
 {
    console.log(marks[i]);
 }


 //Give me a sum of all numbers in the array
 var sum = 0;
 for(let i=0;i<marks.length;i++)
 {
    sum = sum + marks[i];
 }
 console.log("This is the sum of all element in the array");
 console.log(sum);



 //REDUCE method 01:07:00, this will do the same thing as the FOR loop above, so it will find a sum
 // sumReduce is an iterator and is set to 0, markReduce will go throught each and every element and sum them up
 let totalSumReduce = marks.reduce((sumReduce, markReduce) => sumReduce+markReduce, 0);
 console.log(totalSumReduce);



 //Find only even numbers and push them into a new array
 var scores = [12,13,14,16];
var evenScores = [];

 for(let i=0;i<scores.length;i++)
 {
    if(scores[i] %2== 0)
    {
        evenScores.push(scores[i]);
    }
 }
 console.log(evenScores);


 // FILTER method - Find only even numbers with FILTER method
 let newFilterEvenScores = scores.filter(score=> score%2==0);
 console.log(newFilterEvenScores);


 //MAP method - Find only even numbers with FILTER method and multiply each and every with 3 using MAP method
 let mappedArray = newFilterEvenScores.map(score => score*3);
 console.log(mappedArray);


 //REDUCE method - Find only even numbers with FILTER method and multiply each and every with 3 using MAP method and sum all of them using REDUCE method
 let sumMappedArray = mappedArray.reduce((initialSum, finalSum) => initialSum+finalSum, 0);
 console.log(sumMappedArray);



 // Do everyrhing using REDUCE, FILTER, MAP methods but chain everything
 var chaining = [12,13,14,16];

 let chainedArray = chaining.filter(score=> score%2==0).map(score => score*3).reduce((initialSum, finalSum) => initialSum+finalSum, 0);
 console.log(chainedArray);




 //Sorting of an array that has strings
 let fruits = ["Banana", "Mango", "Orange", "Apple"];
 fruits.sort();
 fruits.reverse();
 console.log(fruits.sort());
 console.log(fruits.reverse());

 //Sorting of an array that has numbers
 var brojevi = [101,13,14,33,1,21,5];
/* brojevi.sort(function(a,b)
 {
    return a-b
 })*/


 //Bubble sort
 console.log(brojevi.sort((a,b) => a-b)); //Accending order
 console.log(brojevi.sort((a,b) => b-a)); //Descending order