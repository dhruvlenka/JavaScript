//then, catch, finally
//creating PROMISE
let data = [{id:1, ename:"Jack"}, {id:2, ename:"Sparrow"}]; //suppose it's from mongoDB, data from backend
let error = {message: "Failed to fetch."};
                     //a        b
let p1 = new Promise((resolve, reject) => {
    if(10<2){
        resolve(data); //promise state will fulfill
    } else {
        reject(message);
    }
})

console.log(p1);
//promise handling: same as (try, catch0 but (try, catch) is for error handling and (then, catch) is for promise handling.
p1.then((data) => { //(same as try): in the case of fulfill 
    console.log("I am then." + data)
}); 

p1.catch((error) => { //in the case of reject 
    console.log("I am catch." + error);
}); 

p1.finally(() => { //in the case of fulfill and rejected
    console.log("I am finally.")
}); 