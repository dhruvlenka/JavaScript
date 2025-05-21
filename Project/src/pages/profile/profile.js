// fetching auth user id from local storage
let authuserid = localStorage.getItem("authuserid")
console.log(authuserid);

const closemodelbtn = document.querySelector("#closemodelbtn")


if (authuserid) {
    getSingleUser();
    getProducts()
}

async function getSingleUser(){
    let resp = await fetch(`http://localhost:6060/users/${authuserid}`)
    let user = await resp.json();
    console.log(user);
    displayLoginUser(user)
};

function displayLoginUser(user){
    const headercontainer  = document.querySelector("#headercontainer");
    // const fullNameH1 = document.createElement("h1")
    // fullNameH1.textContent = ⁠ Welcome ${user.username} ⁠;
    // console.log(fullNameH1);
    // headercontainer.append(fullNameH1);

    headercontainer.innerHTML = `
    <h1 class = 'p-5 font-semibold text-4xl text-center capitalize bg-gray-100 mx-10 my-5 rounded-2xl'>
    Welcome ${user.username}
    </h1>
    `;
};

async function getProducts() {
    try {
    let resp = await fetch("https://fakestoreapi.in/api/products")
    let data = await resp.json();
    displayProducts(data);
    } catch (error) {
        console.log("error while fetching all products",error);
        displayProducts({status:"FAILED"})
    };
};

function displayProducts(dbData){
    console.log(dbData);
    const productscontainer = document.querySelector("#productscontainer")

    if(dbData.status === "FAILED"){
        productscontainer.innerHTML = 
        "<h1 class='text-red-600 text-center'> Oops !! Something went wrong. Please refresh</h1>";
    } else {
        dbData.products.map(
            ({ id, image, title, category, price, brand, discount=0 }) => {
            const cardDiv = document.createElement("div")
            cardDiv.setAttribute("id","card");

            cardDiv.innerHTML = `
            <img src='${image}' alt='${title}' class='h-52 block mx-auto'/>
            <h1>${title.slice(0,40)}...</h1>
            <p>${category} ${brand}</p>
            <p>Rs. ${price} <span class = 'text-green-500 ms-2'>${discount}%</span></p>
            <button onclick='showSingleProduct(${id})' class = 'bg-amber-400 hover:bg-amber-500 block w-full p-2 rounded font-semibold'>View</button>
            `;
            productscontainer.append(cardDiv)
        }
    );
    };
};

async function showSingleProduct(productID) {
    const productdetailcontainer = document.querySelector("#productdetailcontainer")

    const overlay = document.querySelector("#overlay")
    overlay.style.display = "block";

    let resp = await fetch(`https://fakestoreapi.in/api/products/${productID}`)
    let productData = await resp.json()
    console.log(productData);

    let { product } = productData

    productdetailcontainer.innerHTML = `
    <figure class='w-[40%] h-full'>
    <img src='${product.image}' class = 'h-full w-full object-contain'/>
    </figure>
    
    <div class= 'w-[60%] h-full'>
    <h1>${product.title.slice(0,50)}...</h1>
    <p>${product.brand} ${product.category}</p>
    <p>${product.description}</p>
    <p>Rs. ${product.price}</p>
    <button>Buy Now</button>
    </div>
    
    `;
};


closemodelbtn.addEventListener("click",()=>{
    const overlay = document.querySelector("#overlay")
    overlay.style.display ="none"
});