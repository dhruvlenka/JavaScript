class student {
    constructor(name, age, enrollement, branch, year){
        this.name = name;
        this.age = age;
        this.enrollement = enrollement;
        this.branch = branch;
        this.year = year;
    }

    studentInfo() {
        console.log(`Name: ${this.name}
                     age: ${this.age} \n 
                     enrollement: ${this.enrollement} \n
                     branch n${this.branch} \n
                     year: ${this.year}`);
    };
};

let student1 = new student("Dhruv", 24, "LNAIBTAI024", "AIML", 2024);
let student2 = new student("Ayush", 1, "LNAIBTAI0001", "AIML", 2024);
student1.studentInfo();
student2.studentInfo();