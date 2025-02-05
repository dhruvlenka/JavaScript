let obj = {
    id:1,
    productName: "Macbook Pro 14 M1 16GB 512GB",
    price: 180000,
    color: "space grey"
}

/*
Object Methods:
1. Keys(): it returns the keys of the objects
2. Values(): it returns the value of the objects
3. Entries(): it will give both key and value and it creates and array for each key and value.
*/

//creating a variable to key
let xx = "M1 Chip";

let obj3= {
    id:2,
    productName: "Macbook Air M1",
    price: 650000,
    color: "space grey"
    [xx] = "M4 Chip" //using the variable 
}
console.log(obj3); 
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

//object to array
let x = Object.entries(obj3);
console.log(Object.fromEntries(x));

//iterating the object
for(let i in obj){
    console.log(i); //we will get keys
}

//iterating the object
for(let i in obj){
    console.log(obj.i); //undefined
}