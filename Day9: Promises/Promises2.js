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