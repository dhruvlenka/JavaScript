const obj = {
    name: "Jack",
    age: 25,
    country: "India",

    deleteKey: "abcdef"
}
console.log("Printing the Object (Key and Values):--------------");
console.log(obj);
console.log();


//insertion in the objects
console.log("Adding a key and value in the object:--------------");
//key: city, value: html
obj.city = "html";
console.log(obj)    
console.log();


//inseting array of skills
console.log("Adding a element of array in the object-------------");
obj.skills = ["java","sql","advance java","front-end"]
console.log(obj)
console.log();


//updation
console.log("Updating a key's value:---------------");
obj.country = obj.country + "United States of America"
console.log(obj);
console.log();


//deletion a object
console.log("Deleting a key in the object:-------------");
delete obj.deleteKey
console.log(obj);
console.log();

//checking the key is present in the object or not
console.log("Checking a key exist or not:-------------")
let response = "city" in obj
console.log(obj);
console.log(response);