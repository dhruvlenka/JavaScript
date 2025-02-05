//HOF
function Calculator(a,task,b){
    console.log("Inside Calculator Function")
    task(a,b)
    console.log("Calculation Done")
}

//callback
function sum(x,y){
    let total = x+yz
    console.log(`Sum: ${total}`)
}

Calculator(10,sum,20);