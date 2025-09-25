//gets the menu icon and nav list
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");



//show nav bar on click
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

//scroll reveal codes
const screv = ScrollReveal ({
    distance: "65px",
    duration: 2600, //ms
    delay: 450, 
    reset: true
});

screv.reveal(".splash-text",{delay:200, origin:"top"});
screv.reveal(".splash-img",{delay:500, origin:"top"});
screv.reveal(".icons",{delay:450, origin:"left"});
screv.reveal(".scroll-down",{delay:500, origin:"right"});


//gets the button
let scrl2top = document.getElementById("scrollbtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrl2top.style.display = "block";
        screv.reveal(".scroll-up", {delay:500, origin:"top"});
    } else {
        scrl2top.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
  