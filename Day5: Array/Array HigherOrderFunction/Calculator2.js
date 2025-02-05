//HOF
function Calculator(a,task,b){
    console.log("Inside Calculator Function")
    task(a,b)
    console.log("Calculation Done")
}


const sum  =(m,n) => m+n;
const sub  =(m,n) => m-n;
const prod =(m, n)=> m*n;
const div  =(m,n) => m/n;
const pow  =(m,n) => m**n;

//User Input
const input1 = +prompt("Enter the first number: ")
const operation = +prompt("Enter the operation you want to perform in symbol: +,-,*,/,**")
const input2 = +prompt("Enter the second number: ")

switch (operation) {
    case '+':
        Calculator(input1, sum, input2)
            break;
    case '-':
        Calculator(input1, sub, input2)
        break;
    case '*':
        Calculator(input1, prod, input2)
        break;
    case '/':
        Calculator(input1, div, input2)
        break;
    case '**':
        Calculator(input1, pow, input2)
        break;

    default:
        alert("Invalid Operation passed by the user.")
        break;

}
