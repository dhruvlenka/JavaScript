let a = [100,200,300];
let b = [400,500,600];

//concat method
console.log(a.concat(b)); //here a value comes first then b will come
console.log(b.concat(a)); //here b value comes first then a will come
console.log(a,["hello", 500, 5000]);

console.log("-------Newww Arrrayyyy---------")
//concating nested array
let array = [1,2,3];
let array2 = [
      [4,5],
      [6,7]
];
console.log(array.concat(array2));
array2[0].push(6); //adding a element in the nested array
console.log(array.concat(array2));
array2[1].push(10);
console.log(array.concat(array2));
