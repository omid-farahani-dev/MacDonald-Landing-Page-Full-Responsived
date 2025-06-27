const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

navOpenBtn.addEventListener("click",() => {
    nav.classList.remove("-left-64");
    nav.classList.add("left-0");
    overlay.classList.add("overlay--visible");
    overlay.addEventListener("click", closeNav)
})
function closeNav() {
    nav.classList.remove("left-0");
    nav.classList.add("-left-64");
    overlay.classList.remove("overlay--visible");
}
navCloseBtn.addEventListener("click", closeNav);