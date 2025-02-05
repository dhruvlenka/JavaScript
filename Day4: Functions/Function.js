function greet(){
    console.log("Hello Jack!");
}
greet(); //calling the function

function grett(name){
    console.log(`Hello ${name}`);
}
grett("The Freelancer");

let water = function() {
    console.log("H20");
}
water();

function addition(a,b) {
    a+b; //it will give undefined because we are not returning anything.
}
console.log(addition(10,5));

function addition2(x,y){
    // return x+y;
    console.log("x" + "+" + "y = " + (x+y));
}
addition2(10,5);

//return statement
function findSquare(num){
    return num*num;
    console.log(`I am returning square of the ${num}`);
}

let square = findSquare(5);
console.log(square);

//multiplication
const multiply = function(a,b){
    return a*b;
};
console.log(multiply(15,5));
