let array = ["Harshit", "Gaurav", "Ayush", "Dhruv", "Jayesh"];
console.log(array.sort()); //returning the sorted array

console.log(array); //modifying the array in place

/*
Sorting a number:
Since all non-undefined elements are converted to strings before sorting them, 
the Number data types are sorted in that order.
*/

let age = [58,100,20,24,65,12,5];
//Number is converted to string and then it will sorted
console.log(age.sort());

//sorting using custom function
let names = ["Kaya","Rishav", "Bhavika", "Deshmukh", "Gaurav", "Lucky", "Animesh Vastrakar"];

function lengthCompare(a,b){
    return a.length - b.length;
}
       //compare function
names.sort(lengthCompare);
console.log(names);

//sorting number numerically/asceding using function expression
let numbers = [100,500,10,5,50,20,30,80];
             //call back function
numbers.sort(function(a,b){
    return a - b;
})
console.log("Ascending Order: " + numbers);

//sorting number in ascending order using arrow funciton expression
/*
	If the result is negative, a comes before b.
	•	If the result is zero, the order of a and b stays the same.
	•	If the result is positive, b comes before a.
*/
            //call back function: arrow function
numbers.sort((a,b)=> a - b);
console.log("Ascending Order 2: " + numbers);


//sorting number in descending order using arrow function expression
numbers.sort((a,b)=> b - a);
console.log("Descending Order: " + numbers);
