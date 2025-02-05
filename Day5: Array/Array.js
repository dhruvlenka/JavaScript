//way 1 to create an array
let arr = [10,20,30,40,50];

//printing index of the array
for(let i in arr){
    console.log(i);
}

console.log("==========================");

//priting elements of the array
for(let i in arr){
    console.log(arr[i]);
}

console.log("==========================");

//accessing and printing element without an loop
console.log("Element at 0:" + arr[0]);
console.log("Element at 1:" + arr[1]);
console.log("Element at 2:" + arr[2]);
console.log("Element at 3:" + arr[3]);
console.log("Element at 4:" + arr[4]);
console.log("Element at 5:" + arr[5]); //it will give undefined because we are trying to access a index greater than array length



console.log("----------------------")

//way 2 to create an array
let arr2 = new Array("Dhruv","Gaurav","Rohit","Chetan","Jatin")
for (let i in arr2){
    console.log(arr2[i]);
}

const arr3=[
    function(){console.log("First Function")},
    function(){console.log("Second Function")},
    (a,b) => a+b
]

console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2](5,10));