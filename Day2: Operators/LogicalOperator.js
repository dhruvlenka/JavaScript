x = 100;
console.log((x<200) && (x>200)); //false
console.log((x>200) && (x<200)); //false
console.log((x<200) && (x<200)); //true


console.log((x<200) || (x>200)); //true
console.log((x>200) || (x>200)); //false
console.log((x<200) || (x<200)); //true

console.log (!(x<200)); //false
console.log(!(x>200)); //true

console.log("------------------------------------")
console.log(10<5 && 20>30); //False, False, return false
console.log(3 && 4); // True, True, return 4
console.log(10 && 0); //False, return 0
console.log(null && 4); //False, return 4
console.log(0 && 0.1) //False, return 0