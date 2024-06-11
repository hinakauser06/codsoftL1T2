// // const text = document.getElementById("about-me-para");
// const text = "With this setup, the image will remain in a fixed position relativ";
// const txt = text.textContent;
// // console.log(text.textContent);
// const speed = 100;
// let i = 0;
// // console.log(txt);
// function typeWriter(){
//     if(i< txt)
//     {
//         document.getElementById("about-me-para").innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }
// window.onload = typeWriter;

const text = `Hello! My name is Hina Kauser, With a passion for web development.
I am a software engineer specializing in developing scalable applications
using HTML, CSS, JavaScript, Bootstrap, ReactJs, Java, MongoDB and MySql 
and other corner edge technology.

I'm committed to delivering high-quality software solutions that drive 
business success.`;


const speed = 10; // Speed of typing in milliseconds
let i = 0;

function typeWriter() {
//    const txt =  document.getElementById('typewriter-text');
    // txt.style.marginTop= '1000px';
    if (i < text.length) {
        if (text.charAt(i) === '\n') {
            document.getElementById('typewriter-text').innerHTML += '<br/>'; // Add line break
        } else {
            document.getElementById('typewriter-text').innerHTML += text.charAt(i);
        }        i++;
        setTimeout(typeWriter, speed);
    }
}

// Start the typewriter effect
window.onload = typeWriter;

window.onscroll = function() {
    const menu = document.getElementById('menu');
    if (window.scrollY > 50) {
        menu.style.top = '0';
    } else {
        menu.style.top = '-60px';
    }
};

console.log("jhcbkscj");






// const text = "Welcome to My Portfolio!";
// const speed = 100; // Speed of typing in milliseconds
// let i = 0;

// function typeWriter() {
//     if (i < text.length) {
//         document.getElementById('typewriter-text').innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }

// // Start the typewriter effect
// window.onload = typeWriter;

