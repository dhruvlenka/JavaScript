//Promises
//ASYNC: asynchronous  AND AWAIT:  it simplifies the then,catch
async function fetchUsers() {
  try {
    let respo = await fetch("https://fakestoreapi.com/products");
    let users = await respo.json();
    displayUsers(users);
  } catch(error) {
    console.log(error);
  }

}

fetchUsers();

// function displayUsers(allusers){
//     allusers.map((user) => {
//         let  { login, avatar_url } = user;
//         console.log(login);
//         document.write(`
//             <h1> ${login} </h1>
//             <img src='${avatar_url}'/>
//             `);
//     });
// }

function displayUsers(allusers){
    console.log(allusers);
    
    allusers.map(({ title, image }) => {
        document.write(`
            <h1> ${title} </h1>
            <img src='${image} '/>
            `);
    });
}