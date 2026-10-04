const name = "disha soni";
const target = document.getElementById("typing-name");
let index = 0;

function typeEffect() {
    if (index < name.length) {
        target.textContent += name.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

typeEffect();