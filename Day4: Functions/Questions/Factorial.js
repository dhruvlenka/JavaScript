let input = [1,2,3,4,5];

let x = input.map((ele) => {
    let temp =1;
    for(let i=1; i<=ele; i++){
        temp = temp*i;
    }
    return temp;
})

console.log(x);