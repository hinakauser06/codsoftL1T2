const text = `Hello! My name is Hina Kauser, With a passion for web development.
I am a software engineer specializing in developing scalable applications
using HTML, CSS, JavaScript, Bootstrap, ReactJs, Java, MongoDB and MySql 
and other corner edge technology.

I'm committed to delivering high-quality software solutions that drive 
business success.`;


const speed = 100; 
let i = 0;

function typeWriter() {
    if (i < text.length) {
        if (text.charAt(i) === '\n') {
            document.getElementById('typewriter-text').innerHTML += '<br/>'; // Add line break
        } else {
            document.getElementById('typewriter-text').innerHTML += text.charAt(i);
        }        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter;

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Function to handle click event
    function handleClick(event) {
        menuItems.forEach(item => item.classList.remove('active'));
        event.target.classList.add('active');
    }

    // Add click event listeners to each menu item
    menuItems.forEach(item => {
        item.addEventListener('click', handleClick);
    });
    function highlightMenuItem() {
        const sections = document.querySelectorAll('.section');
        let scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            if (scrollPos >= section.offsetTop - 60 && scrollPos < section.offsetTop + section.offsetHeight - 60) {
                let currentId = section.getAttribute('id');
                document.querySelector('.menu-item.active').classList.remove('active');
                document.querySelector(`.menu a[href="#${currentId}"]`).classList.add('active');
            }
        });
    }

    // Add scroll event listener to highlight menu item based on scroll position
    window.addEventListener('scroll', highlightMenuItem);
});

