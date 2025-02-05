let numbers = [1, 3, 4, 9, 8];

function isEven(element){
    return element % 2 == 0;
}

//first even number
let evenNumber = numbers.find(isEven);
console.log(evenNumber);

//first odd number : using arrow operator
let odd = numbers.find((element) => element % 2 == 1);
console.log(odd);

