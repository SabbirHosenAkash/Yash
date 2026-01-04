// 1. Navigation & Mobile Menu Logic
function toggleMenu() {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('active');
}

// 2. Advanced Typing Animation
const typingText = document.getElementById('typing-text');
const roles = ["Bangladeshi Musician", "Creative Writer", "Web Developer", "SEO Expert", "Python Enthusiast", "Keyboardist"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const current = roles[roleIndex];
    if (isDeleting) {
        typingText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 50 : 150;
    if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        speed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }
    setTimeout(type, speed);
}

// 3. Particles.js Configuration
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00ff88" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00ff88", "opacity": 0.3, "width": 1 },
        "move": { "enable": true, "speed": 2, "out_mode": "out" }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
    }
});

// 4. Writarion AI Chatbot Logic
const aiBtn = document.getElementById('ai-btn');
const chatBox = document.getElementById('chat-box');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

aiBtn.onclick = () => chatBox.classList.toggle('hidden');

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const userMsg = chatInput.value;
        addMessage('User', userMsg);
        getAIResponse(userMsg);
        chatInput.value = '';
    }
});

function addMessage(sender, text) {
    const msg = document.createElement('p');
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    msg.style.padding = '5px 10px';
    msg.style.fontSize = '13px';
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(input) {
    const query = input.toLowerCase();
    let response = "I'm not sure about that. But Sabbir is a Musician and Developer from Sandwip!";
    
    if (query.includes('hello') || query.includes('hi')) response = "Hello! I am Writarion AI. How can I help you know more about Sabbir?";
    else if (query.includes('born') || query.includes('birth')) response = "Sabbir was born on January 3, 2002, in Sandwip, Chittagong.";
    else if (query.includes('education') || query.includes('college')) response = "Sabbir completed SSC from South Sandwip High School and HSC from Govt Hazi A. B. College.";
    else if (query.includes('band')) response = "He is the keyboardist and backing vocalist of the Oparok Band since 2021.";
    else if (query.includes('skill') || query.includes('expert')) response = "He is an expert in SEO, Web Development (Django/Python), and Music Production.";
    else if (query.includes('book')) response = "His famous books are 'Whispers of the Heart' and 'On the Edge of a Broken Bridge'.";

    setTimeout(() => addMessage('AI', response), 500);
}

// 5. Scroll Reveal Effect
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) el.classList.add('active');
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    type();
});
