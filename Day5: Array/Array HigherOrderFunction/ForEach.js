let hof = [10,20,30,40,50];
for(let i=0; i<hof.length; i++){
    console.log("Index: " + i + " Element: " + hof[i]);
}

                    //arrow function
let x = hof.forEach((ele, i, hof) => {
    //value,inde, array
    console.log(ele, i, hof[i] = ele*10);
  //  return "i am for each."
});