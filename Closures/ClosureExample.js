function Outer(){
    var count  = 0;

    function Inner(){
        count++;
        console.log("Count: " + count);
    }
    return Inner;
}

const counter = Outer();
counter()
counter()
counter()
counter()
counter()