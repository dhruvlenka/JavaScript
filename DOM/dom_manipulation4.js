let divs = document.querySelectorAll("div") //we will get all divs
console.log(divs)

divs.forEach((ele) => {
    console.log(ele);

    ele.addEventListener("mouseenter", () => {
        //console.log(ele.textContent);
        ele.style.backgroundColor = ele.textContent
    })

    ele.addEventListener("mouseleave", () => {
        ele.style.backgroundColor="white"
    })
})