let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


let x = arr.flat(1) //here 1: to down the level to 1D Array
console.log(x)

let resp = arr.map(row => {
    let x = row.map(element => element*2)
    return x;
}).flat(1)
console.log(resp)

let fil = arr.map(ele => {
    let x = ele.filter(ele => ele % 2 === 0)
    return x;
}).flat(1)
console.log(fil)
