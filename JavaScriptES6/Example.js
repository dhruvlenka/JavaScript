class JQSpiders {
               //initialize
    constructor(className, tutorName){
        this.className = className;
        this.tutorName = tutorName;
    }

    //method to display a message
    classInformation() {
        console.log(`Class name: ${this.className} and teacher name ${this.tutorName}.`);
    }
}

//creating instance for JQSpiders class
let class1 = new JQSpiders("JavaScript", "Srestha Sir");
let class2 = new JQSpiders("React","Sreevesh Sir");

class1.classInformation();
class2.classInformation();
