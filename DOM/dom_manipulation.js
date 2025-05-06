//how to create elements
let divTag = document.createElement("div");
let sectionTag = document.createElement("section");

//adding text content
divTag.textContent = "I am div, created by using <mark> Javascript. </mark> "; //fist way to adding text content 
sectionTag.innerHTML = "I am section, created using <mark> Javascript. </mark>" //second way to adding text content 

console.log(divTag);
console.log(sectionTag);

//we have two method to append in the body
//appendChild: it accepts only one element as arguments
//document.body.appendChild(divTag); //creating body's child using appendChild method.
//document.body.appendChild(sectionTag)

//append(): it accepts multiple elements as argument
document.body.append(divTag, sectionTag); //creating body's child using append() method


//when we use inner html and we also use a html under them, then we will get as tag.