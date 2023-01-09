// Reference id's of the element that will be manipulated to achieve the typing effect
// Well, i am not supposed to reference the id's because they are usually referenced automatically

const introHeader = document.querySelector("#introHeader");
const introText = document.querySelector("#introText");
const typedTextSpan = document.querySelector(".emphasis");
const typedTextSpanSec = document.querySelector(".typedText");

// Define variables that will be used logically in the typing animation

const headerArray = [`Talk Easily, Impress, Entertain <span class="emphasis">Loved</span> Ones`,
                     ` Impress your Friends and Fans with <span class="emphasis">Great</span> contents`,
                     `Create and Upload your own <span class="emphasis">Unique</span> chat assets`,
                     `React to great <span class="emphasis">Trendy</span> stickers and Memes`,
                     `Welcome to the abode of <span class="emphasis">Interesting</span> chat assets`
];

const bodyArray = ["Chatty affords you the opportunity to organize and deliver your thoughts in an easy way using chat assets like GIF pictures, stickers, icons, images, cartoon text, preset audio etc in an impressive and entertaining manner.",
                   "Chatty makes content creators define their style and earn followers and likes in the process. Great contents can also be downloaded from chatty",
                   "Chatty is a chat asset hub and therefore allows you to create chat assets like stickers, GIFs, audio, upload images, reels, memes etc on the Go.",
                   "Get trending stickers and memes on the Go with chatty as you get to see updated contents and assets from amazing content creators all over the world.", 
                   "Let's get chatty with chatty as you get to connect with other great chat assets and memes creators  to learn from their expertise."
];

const textArray = ["Loved", "Close", "Chosen"];

// Define variables for the timing function used in the typing animation

const typingDelay = 10000;
const erasingDelay = 20000;
const newTextDelay = 10000;

// Create dynamic variables that will be used to manipulate text Characters

let  textArrayIndex = 1;
let  sentenceArrayIndex = 1;
let charIndex = 0;
let timer = 0;
let interval = 60000;
let lastTime = 0;

// Create the function to implement the typing aspect of the type and erase animation

function contentChange(deltaTime) {
    if (timer > interval) {
        introHeader.innerHTML = headerArray[sentenceArrayIndex];
        introText.innerHTML = bodyArray[sentenceArrayIndex];
        if (sentenceArrayIndex >= headerArray.length - 1) {
            sentenceArrayIndex = 0;
        } else {
            sentenceArrayIndex++;
        }
        timer = 0;
    } else {
        timer += deltaTime;
    }
}

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        // erase
        setTimeout(erase, erasingDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, typingDelay);
    } else {
        // type
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1500);
    }
}

function animate(timeStamp) {
    //Calculate delta time so the game works at the same rate on all systems
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    contentChange(deltaTime);
    setTimeout(type, 500);
    requestAnimationFrame(animate);
}

// Create an onload Event listener to initiate the typing animation

addEventListener("load", function () {
    setTimeout(animate(0), 1000);
});
