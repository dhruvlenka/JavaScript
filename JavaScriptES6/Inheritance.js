//parent class
class Car {
    constructor(brand, model, price, hp, fuelSystem){
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.hp = hp;
        this.fuelSystem = fuelSystem;
    }
}

//child class which inherits parent class
class Audi extends Car {
    constructor(brand, model, price, hp, fuelSystem, vipService) {
        super(brand, model, price, hp, fuelSystem)
        this.vipService = vipService;
    };
    audiInfoDesk() {
        console.log(`Brand: ${this.brand} \n
                     Model: ${this.model} \n
                     Price: ${this.price} \n
                     Horse Power: ${this.hp} \n 
                     Fuel System: ${this.fuelSystem}\n
                     Vip Service: ${this.vipService}
                     `);
                     
    };
};

class BMW extends Car {
    constructor(brand, model, price, hp, fuelSystem, smartUnlock) {
        super(brand, model, price, hp, fuelSystem)
        this.smartUnlock = smartUnlock;
    };
    bmwInfoDesk() {
        console.log(`Brand: ${this.brand} \n
                     Model: ${this.model} \n
                     Price: ${this.price} \n
                     Horse Power: ${this.hp} \n 
                     Fuel System: ${this.fuelSystem}\n
                     Apple Smart Unlock System: ${this.smartUnlock}
                     `);
                     
    };
}

class mcLaren extends Car {
    constructor(brand, model, price, hp, fuelSystem, carbonFibre) {
        super(brand, model, price, hp, fuelSystem)
        this.carbonFibre = carbonFibre;
    };
    mcLarenInfoDesk() {
        console.log(`Brand: ${this.brand} \n
                     Model: ${this.model} \n
                     Price: ${this.price} \n
                     Horse Power: ${this.hp} \n 
                     Fuel System: ${this.fuelSystem}\n
                     Carbon Fibre: ${this.carbonFibre}
                     `);
                     
    };
}

let audi1 = new Audi("Audi","A6", 5000000, 750, "Petrol", "Yes");
audi1.audiInfoDesk();

let bmw1 = new BMW("BMW", "BM2 M2", 10300000, 650, "Petrol", "Available");
bmw1.bmwInfoDesk();

let mcLaren1 = new mcLaren("mcLaren", "mcLaren 765LT", 45000000, 800, "Petrol", "Yes, Pure Carbon Fibre");
mcLaren1.mcLarenInfoDesk();