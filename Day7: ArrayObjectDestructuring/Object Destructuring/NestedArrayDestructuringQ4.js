let arr = [10,["hello",60,["hi", [700,590,["Byeee"]]]]];
//let [a,[b,c,[d,[e,f,[g]]]]] = arr; //using extra var
let [, [b, ,[d,[ , ,[g]]]]] = arr; //using skip value
console.log(b,d,g);