const obj = {
    //key: value
    name:"Tinku",
    age:24,
    //key: value (function)
    wishBirthday: function(){
        console.log("Happy Birthday!")
    },
    //key: value(arrowFunction)
    greet:()=>{
        console.log("Good Morning.")
    }
}

obj.wishBirthday();
obj.greet();

