let arr = [10,20,30,40,[100,200,300]];
        //arr index, the inner arr index
console.log(arr[4][2]);

let arr2 = [100,200,3000,[10,40, ["Hello", ["Hello World"], 4000]]];
let z = arr2[3][2][1][0];
console.log(z);

//array destructuring: sequence matters
let arr3 = [10,20,30,40];
let[a,b,c,d] = arr3;
console.log(a,b,c,d);
console.log(c);

//skipping values
let arr4 = [10,20,30,50];
let [x, , , y] = arr4; //memory 
console.log(x,y);