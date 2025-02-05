const username = prompt("Enter usename: ");
const age = +prompt("Enter age: ");
const isWorking = Boolean(prompt("Are you working anywhere: "));

const userDetails = {
    username,
    age,
    isWorking
}
console.log(userDetails)