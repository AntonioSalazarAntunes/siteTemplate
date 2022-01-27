const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("left");


hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
   

});

window.addEventListener("scroll", function() {
    let header = document.querySelector(".navbar");
    let background = document.querySelector(".left");
    let windowPosition = window.scrollY > 650
    header.classList.toggle("scrolling-active", windowPosition);
    background.classList.toggle("scrolling-active", windowPosition);
})