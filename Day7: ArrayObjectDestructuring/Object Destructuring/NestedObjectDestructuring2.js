let obj = {
    id:2,
    ename: "Raj",
    hobbies: ["cricket", "football"],
    skills: {
        frontend:["html","css","js","react"],
        backend: ["node","java","sql",",mongo","express"],
    },
};

let {ename, hobbies:[, ball], skills: {frontend:[, , , y],backend:[,j,,,]}} = obj;
console.log(ename,ball,y,j);

//parameter destructuring
function test({id, ename},x){
    console.log(id,ename,x);
}