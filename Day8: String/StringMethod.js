let str = "I am learning JavaScript.";
console.log(str);

//length() method
console.log(str.length);

//slice method
console.log(str.slice(0,4));
console.log(str.slice(4,10));

console.log() // space

//substring method
console.log(str.substring(0,4));
console.log(str.substring(-10,-6));

//substr(start index, length)
console.log(str.substr(5,10));

//replace() 
let str2 = "     Hi to me Hi to everyone, Welcome to Javascript!        ";
console.log(str2.replace("everyone", "Dhruv"));

//replaceAll()
console.log(str2.replaceAll("Hi", "Hola"));

console.log() 

//trim()
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());

//toUpperCase()
let str3 = "javascript";
console.log(str3.toUpperCase());

//toLowerCase();
let str4 = "JAVASCRIPT";
console.log(str4.toLowerCase());

//charCodeAt()
let str5 = "MongoDB";
console.log(str5.charCodeAt(0)); //77

//chatAt() method
console.log(str5.charAt(0));

//split()
console.log(str5.split());
console.log(str5.split("")); //will print each char in array.
console.log(str5.split("n"));

