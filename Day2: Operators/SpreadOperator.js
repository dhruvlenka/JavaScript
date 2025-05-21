//... : helps us to iterate over the array, string objects
var array = [122,121,321,123,456,189]
const copyArray = [...array] //copying array into copyarray

console.log("Original Array: " + array) 
console.log("Copy Array: " + copyArray)

//push(): adding a element in the array
copyArray.push(879);
console.log("Adding element in the copy array: " + copyArray)

//merging arrays
const arr1 = ["Dhruv", "Devraj"];
const arr2 = ["Harsh", "Meet"];

const merged = [...arr1, ...arr2]
console.log("Merged Array: "+ merged)

//spreading elements in function calls: 
const num = [1,2,3];
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(...num));

const multiplication = [8,78,2];
function multiply(x,y,z){
    return x*y*z;
}
console.log(multiply(...multiplication))

//copying objects
var obj = {name: "Jack Ryan", age: 35};
var copyObj = { ...obj };
console.log(obj);
console.log(copyObj)

//merging objects
let obj1 = { user: "Jack Sparrow", jobrole: "Pirate" }
let obj2 = { user: "Jack Reacher", jobrole: "Army Veterain" }
let mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);
console.log()

let object1 = { user1: "Jack Sparrow", jobRole1: "Pirate" }
let object2 = { user2: "Jack Reacher", jobRole2: "Army Veterain" }
let mergedObject2 = { ...object1, ...object2 };
console.log(mergedObject2);

//spreading strings: 
const str = "hello"
const chars = [...str]
console.log(chars)

var name = "DHRUV";
console.log([...name])