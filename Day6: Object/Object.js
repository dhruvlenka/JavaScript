//object literals
let userDetails = {
    id:1,
    name: "raj",
    company: "TCS",
    salary: 50000,
    phoneNo: 9876541222,
    aadhar:  5657378163474,
};

//read
console.log(userDetails);
console.log(userDetails.name);
console.log(userDetails.aadhar);

userDetails.salary=70000; //updating the value
console.log(userDetails.salary);

console.log(userDetails.panCard); //undefined 

userDetails.car="Audi" //adding new key and value
console.log(userDetails.car);
console.log();

//Delete
console.log("Before Delete");
console.log(userDetails);
delete userDetails.aadhar
console.log("After Delete")
console.log(userDetails);

//object constructor: way 1 to create


//way 2 to create
let obj = new Object()
obj.id = 1;
obj.ename = "Tauhid";
obj.stream = "B.Tech";
obj.branch ="AI/ML";

console.log(obj);