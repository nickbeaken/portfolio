//typing animation

const p = document.querySelector(".typeText");
const text = "I love creating beautiful websites!";

const textTypingEffect = (element, text, i = 0) => {
    
    if (i === 0) {
        element.textContent = "";
    }
    
    element.textContent += text[i];
     
//if we reached the end of the string
    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 200)
}

textTypingEffect(p, text);

//drop down menu

const showList = () => {
    let sections = document.getElementById("navId");

    if (sections.style.display == "block") {
        sections.style.display = "none";
    } else {
        sections.style.display = "block";
    }
    window.onclick = function (event) {
        if (!event.target.matches('.dropdown_button')) {
            document.getElementById(navId).style.display = "none";
        }
    }
}

const img = document.getElementById("dropdown_img");

function rotateImage() {
    img.style.transform = "rotate(180deg)";
}