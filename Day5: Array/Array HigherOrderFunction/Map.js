let hof = [10,20,30,40,50];

//map method: return a new array, we will get boolean value: true and false
let y = hof.map((ele, i, hof) => {
    console.log(ele, i, hof);
    return "I am Map."
})
