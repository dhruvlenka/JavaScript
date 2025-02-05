let obj = {
    id:1,
    title: "Laptop",
    brand: "Apple",
    model: "Macbook Pro 14inches M1",
    price: 180000,
    category: "Electronics",
    rating: {
        battery: 5.4,
        display: 5.5
    },
};
                        //sequence not matters
let { title, category, rating:{display,battery}} = obj;
console.log(display);
console.log(battery)