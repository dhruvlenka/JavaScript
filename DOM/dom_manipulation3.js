let btn = document.createElement("button")

btn.textContent = "click me"

// addEventListener(event,callbackfunction,use_capture)
btn.addEventListener("click",() => {
    console.log("btn clicked");
  alert("btn clicked")
});

document.body.append(btn)
