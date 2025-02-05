let hof = [10,20,30,40,50];
let val = hof.find((ele, i, hof) => {
    console.log(ele, i);
    return ele == 10;
})
console.log(val);


let users = [
    {name: "Harsh", age: 22},
    {name: "Dhruv", age: 24},
    {name: "Gaurav", age: 2},
    {name: "Aman", age: 24},
    {name: "Ayush", age: 24}
];

let x = users.find(element => element.name === "Dhruv");
console.log(x);
let x2 = users.findLast(ele => ele.name === "Ayush");
console.log(x2);

let y = users.findIndex(ele => ele.name === "Aman");
console.log(y);
let y2 = users.findLastIndex(ele => ele.name === "Ayush");

console.log(x2, y2);