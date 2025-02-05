let hof = [10,20,30,40,50];
let val2 = hof.filter((ele, i, hof) => {
//    console.log(ele, i);
    return ele == 50;
})
console.log(val2);