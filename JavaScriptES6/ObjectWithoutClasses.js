 //creating an object without a formal class definition
 let pirate = {
    //properties
    name : "Jack Sparrow",
    age : 45,
    greet: function() {
        console.log(`I am Captain ${this.name}.`)
    }
 }

pirate.greet();