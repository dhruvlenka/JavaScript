function abc() {
    console.log("Hello, I am Call Back Function.")
}

function callBack(abc){
    return abc;
}

let res = callBack();
console.log(res);

console.log("--------------------------")

let arr = [1,2,3,4,5];
//here forEach taking all the data from arr and giving it to val.
arr.forEach(function arrValues(val){
    console.log(val);
});

console.log("--------------------------")

//as arrow function;
let arr2 = [5,4,3,2,1];
//here forEach taking all the data from arr and giving it to val.
arr2.forEach((val) => {
    console.log(val);
});

console.log("--------------------------")

//three parameters of call back function
let marvels = ["Avengers", "Hulk", "Thor", "Iron Man", "Captain America"];
marvels.forEach((val, index, arr) =>  {
    console.log(val.toUpperCase(), index, arr);
})