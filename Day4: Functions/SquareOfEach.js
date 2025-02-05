//for a given array of numbers, print the square of each value using the forEach
let arr = [1,2,3,4,5,67];
arr.forEach(function square(val){
    console.log(`Square of ${val} = ` + val*val);
})

console.log("------------------------------");

//making it more clean
let nums = [50,100,250,500,1000];
let calculateSquare = (nums) => {
    console.log(`Square of ${nums} = ` + nums*nums);
}
nums.forEach(calculateSquare);