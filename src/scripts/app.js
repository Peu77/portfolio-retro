import "./render"

const textElement = document.getElementById("text");
const textToAnimation = "Hello there!";
let i = 1;
textElement.innerHTML += textToAnimation[0];
const timer = setInterval(function () {
    textElement.innerHTML += textToAnimation[i];
    i++;
    if (i == textToAnimation.length) {
        clearInterval(timer);
    }
}, 300);
