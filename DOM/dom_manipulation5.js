let section = document.querySelector("section")
let article = document.querySelector("article")
let div = document.querySelector("div")

console.log(section)
console.log(article)
console.log(div)

section.addEventListener("click", () => {
    console.log("section")
    section.style.backgroundColor = "red"
});

article.addEventListener("click", () => {
    console.log("article")
    article.style.backgroundColor = "blue"
})

div.addEventListener("click", (e) => {
    e.stopPropagation() //blockage: now it will not execute article and section simulataneously
    console.log("div")
    div.style.backgroundColor = "green"
})