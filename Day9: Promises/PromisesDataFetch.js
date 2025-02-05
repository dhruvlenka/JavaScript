let data = [{id:1, ename:"Jack"}, {id:2, ename:"Sparrow"}]; //suppose it's from mongoDB, data from backend
let error = {message: "Failed to fetch."};

//API Calling to UI
let p1 = fetch("https://api.github.com/users");
console.log(p1);

p1.then((response) => {
    console.log(response);

    let p2 = response.json();
    console.log(p2);

    p2.then((data) => {
        console.log(data);
    });

    p2.catch((error) => {
        console.log(error);
    });
});

p1.catch((error) => {
    console.log(error);
});