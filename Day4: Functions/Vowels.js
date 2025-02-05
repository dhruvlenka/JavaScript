//using normal function 
function countVowels(str){
    let count  = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}

countVowels("aeiou");


function countVowels2(str){
    let count  = 0;
    for(const char of str){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            count++;
        }
    }
    console.log(count);
}

countVowels2("aeiou");

//using arrow function
const countingVowels = (str) => {
    let count  = 0;
    for(const char of str){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            count++;
        }
    }
    console.log(count);
}

countingVowels("dhruvlenka");