const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginButton = document.querySelector("#loginbtn");

loginButton.addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent default form submission behavior, stops refreshing the page

    // Perform login logic here
    console.log("Form Submitted")
    console.log("Email:", email.value); //javascript treats htmls tag as objects so we can access the value property
    console.log("Password:", password.value);

    let loginUser = {
        email: email.value,
        password: password.value
    }
    console.log(loginUser);

    //clearning the input fields after login
    email.value = "";
    password.value = "";

    // Example: Send data to server or perform validation
    try {
        //fetch is a built-in function in javascript that allows us to make network requests
        //fetch method returns a promise, so we can use .then() to handle the response

        let response = await fetch("http://localhost:6060/users");
        let allUsers = await response.json();
        console.log(allUsers)
        
        let authUser = allUsers.find((user) => {
            return (
                user.email.toLowerCase() === loginUser.email.toLowerCase() &&  user.password.toLowerCase() === loginUser.password.toLowerCase()
            )
        });

         console.log(authUser);
         if(authUser) {
            alert("Login successful!"); // Show success message
         } else {
            alert("Invalid email or password!"); // Show error message
         }
    } catch (error) {
        alert("Login failed!"); // Show error message
    }
})