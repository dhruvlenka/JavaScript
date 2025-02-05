let amount = 50000;
let message = "";
switch(amount){
    case 65000:
        message = "Macbook Air M1";
        break;
    case 90000:
        message = "Macbook Air M2";
        break;
    case 120000:
        message = "Macbook Pro";
        break;
    case 180000:
        message = "Macbook Pro 14 inches";
        break;
        default:
            message = "Product don't exist at the given price."
}
console.log(message);