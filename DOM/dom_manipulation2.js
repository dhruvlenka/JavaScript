//creating elements
let mainTag = document.createElement("main");
let sectionTag = document.createElement("section");
let h1Tag = document.createElement("h1");
let imgTag = document.createElement("img")
let buttonTag = document.createElement("button")

//setting attributes: accepts two arguments: argumentName, argumentValue
mainTag.setAttribute("id", "maincontainer")
sectionTag.setAttribute("class", "card")
h1Tag.setAttribute("class", "heading")
imgTag.setAttribute("src", "https://i.pinimg.com/736x/48/45/6d/48456dc4d685a7bd4f3a8b35fc403a6d.jpg")
imgTag.setAttribute("alt", "Jack Sparrow Pic")

//adding text content
h1Tag.textContent = "Jack Sparrow";
buttonTag.textContent = "View More"

//making child
mainTag.append(sectionTag, imgTag, buttonTag);//appending section as child of mainTag
sectionTag.append(h1Tag); //appending h1tag as child of section tag.


//appending mainTag as a child of body 
document.body.append(mainTag)
console.log(mainTag) 