console.log("signup.js loaded");
//DOM elements
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const signupButton = document.getElementById("signupbtn");
signupButton.addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent default form submission behavior, stops refreshing the page

    // Perform signup logic here
    console.log("Form Submitted")
    console.log("Username:", usernameInput.value); //javascript treats htmls tag as objects so we can access the value property
    console.log("Email:", emailInput.value);
    console.log("Password:", passwordInput.value);
    
    let newSignupUser = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    }
    console.log(newSignupUser);

    // Clear input fields after signup
    // usernameInput.value = "";
    // emailInput.value = "";
    // passwordInput.value = "";

    // Example: Send data to server or perform validation
    //payload = sending and retriving the data from the server
    let payload = JSON.stringify(newSignupUser);
    console.log(payload);

    try {
        //fetch is a built-in function in javascript that allows us to make network requests
    //fetch method returns a promise, so we can use .then() to handle the response
    let response = await fetch("http://localhost:6060/users", {
        method: "POST", //specifying the type of request we are making
        headers: {
            "Content-Type": "application/json" //specifying the type of data we are sending to the server
        },
        body: payload //sending the data to the server
    })
    console.log(response);
    alert("Signup successful!"); // Show success message
    } catch (error) {
        console.error("Error:", error); // Log any errors
        alert("Signup failed!"); // Show error message
    }

    
})