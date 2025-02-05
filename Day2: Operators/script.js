const user = prompt("Enter your name: ");
console.log(user);

const res = (user && user!= " ") ? `welcome ${user}`: "Invalid User Name";
console.log(res);