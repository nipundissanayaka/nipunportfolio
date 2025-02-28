// Typing Animation
const typingText = ["Web Designer", "Front-End Developer", "Freelancer"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeText() {
    if (charIndex < typingText[textIndex].length) {
        typingElement.textContent += typingText[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingElement.textContent = typingText[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % typingText.length;
        setTimeout(typeText, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeText();
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️"; // Change to sun icon
    } else {
        themeToggle.textContent = "🌙"; // Change to moon icon
    }
});

// Smooth Scrolling
document.querySelectorAll(".nav-links a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});
