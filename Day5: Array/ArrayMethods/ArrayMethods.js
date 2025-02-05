//adding element to an array
let strArr = ["Dhruv", "Jatin", "Chetan", "Karunesh", "Sachin", "Suraj"];
console.log(strArr)

//iterating the string array using for in loop
for(let i in strArr){
    console.log(strArr[i]);
}

console.log();

//adding an element in the array
strArr.push("Tauhid");
strArr.push("Anmol")
console.log(strArr);

//adding a element on the begining/top of the array
strArr.unshift("Gaurav");
console.log(strArr)

//changing the element of the array
strArr[1] = "Ayush";
console.log(strArr)

//removing element form the array
strArr.splice(4,1);
console.log(strArr)

console.log("--------New Array--------")
let arr = [10,20,30,40,50];
//includes method
console.log(arr.includes(20));
console.log(arr.includes(500));

//toString method
console.log(arr.toString()); //array to string

//join method
console.log(arr.join("iamjoin")); //array to string it will add additional characters

console.log("------New Array--------")

console.log() //for space

//indexOf() method: it's gives index of the element
console.log(arr.indexOf(50));

let arr2 = [80,20,50,10,90];
//sort() method
let sortedArray = arr2.sort();
console.log(sortedArray);

