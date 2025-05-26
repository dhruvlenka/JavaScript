let hof = [10,20,30,40,50];

let result = hof.reduce((acc, ele) => {
    //console.log(acc, ele);
    return acc+ele;
},0); //0: default value
console.log("Sum of all elements: " + result);  

let hof2 = [100,200,300,400,500,600]
let sum = hof2.reduce((acc, ele) => {
    console.log(acc, ele);
    return acc+ele ;

},500)  
console.log("Total Sum = "+ sum);
console.log();