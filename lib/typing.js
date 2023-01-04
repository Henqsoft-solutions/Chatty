// Reference id's of the element that will be manipulated to achieve the typing effect
// Well, i am not supposed to reference the id's because they are usually referenced automatically

const introHeader = document.querySelector("#introHeader");
const introText = document.querySelector("#introText");

// Define variables that will be used logically in the typing animation

const headerArray = [`Talk Easily, Impress, Entertain Loved Ones`,
                     ` Impress your Friends and Fans with <span class="emphasis">Great</span> contents`,
                     `Create and Upload your own <span class="emphasis">Unique</span> chat assets`,
                     `React to great <span class="emphasis">Trendy</span> stickers and Memes`,
                     `Welcome to the abode of <span class="emphasis">Interesting</span> chat assets`
];

const bodyArray = ["Chatty affords you the opportunity to organize and deliver your thoughts in an easy way using chat assets like GIF pictures, stickers, icons, images, cartoon text, preset audio etc in an impressive and entertaining manner.",
                   "Chatty makes content creators define their style amd earn followers and likes in the process. Great contents can also be downloaded from chatty",
                   "Chatty is a chat asset hub and therefore allows you to create chat assets like stickers, GIFs, audio, upload images, reels, memes etc on the Go.",
                   "Get trending stickers and memes on the Go with chatty as you get to see updated contents and assets from amazing content creators all over the world.", 
                   "Let's get chatty with chatty as you get to connect with other great chat assets and memes creators  to learn from their expertise."
];

// Define variables for the timing function used in the typing animation

const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 100;

// Create dynamic variables that will be used to manipulate text Characters

let  textArrayIndex = 0;
let charIndex = 0;

// Create the function to implement the typing aspect of the type and erase animation

function type() {
    if (charIndex < headerArray[textArrayIndex].length) {
        introHeader.innerHTML += headerArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        // Erase
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        introHeader.
    } else {
        // type
    }
}

// Create an onload Event listener to initiate the typing animation

addEventListener("load", function () {
    setTimeout(type, newTextDelay);
});
