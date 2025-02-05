const obj1 = {
    name: "Jack",
    age: 25,
    isWorking: false,

    skills:["html", "css", "javascript","react"]
}
console.log("Name: "+obj1.name);
console.log("Age: "+obj1.age);
console.log("isWorking: "+obj1.isWorking);
console.log("Skills Array: "+obj1.skills)
console.log("Skills from the array index: "+obj1.skills[2])

console.log("---------------------------------")

const obj2 = {
    name: "Rakesh",
    age: 21,
    isWorking: false,

    address: {
        city: "noida",
        state: "up",
        pincode: 200101
    }
}
console.log("Name: " + obj2.name);
console.log("Age: " + obj2.age);
console.log("isWorking: " + obj2.isWorking);
console.log("City: " + obj2.address.city);
console.log("State: " + obj2.address.state);
console.log("PinCode: "+ obj2.address.pincode);