// Variables
const navBtn = document.querySelector(".nav-btn");
let line = document.querySelector(".line");
let navOpen = false;
let navBarLeft = document.querySelector(".nav-bar-left");
let navBarRight = document.querySelector(".nav-bar-right");

const aboutTrigger = document.querySelector(".about-trigger");
const schoolTrigger = document.querySelector(".school-trigger");
const langTrigger = document.querySelector(".lang-trigger");
const workTrigger = document.querySelector(".work-trigger");
const refTrigger = document.querySelector(".ref-trigger");
const diplomaTrigger = document.querySelector(".diploma-trigger");

const backTop = document.querySelector(".back-wrapper");

let li = document.querySelectorAll(".diploma-left ul li");

let span = document.querySelectorAll("span");

let col = ["#4285F4", "#34A853", "#FBBC05", "#EA4335"]


// Events

// Animation für Navigation
navBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");

    if(!navOpen){
        line.classList.add("open");

        navBtn.classList.add("to-middle");

        navOpen = true;

        navBarLeft.classList.add("from-left");

        navBarRight.classList.add("from-right");

    }else{
        line.classList.remove("open");

        navBtn.classList.remove("to-middle")

        navOpen = false;

        navBarLeft.classList.remove("from-left");

        navBarRight.classList.remove("from-right");

    }
});

// Back-to-Top
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 50){
        backTop.style.display = "flex";
    }else{
        backTop.style.display = "none";
    }
});

// Scroll-To
aboutTrigger.addEventListener("click", () =>{
    selectSection("#about", "flex");
});

schoolTrigger.addEventListener("click", () => {
    selectSection("#school", "flex");
});

langTrigger.addEventListener("click", () => {
    selectSection("#lang", "flex");
});

workTrigger.addEventListener("click", () => {
    selectSection("#work", "flex");
});

refTrigger.addEventListener("click", () => {
    selectSection("#ref", "flex");
});

diplomaTrigger.addEventListener("click", () => {
    selectSection("#diploma", "flex");
});

backTop.addEventListener("click", () => {
    selectSection("header", "none");
});

// Diplom anzeigen
li.forEach(item => {
    item.addEventListener("click", () => {
        let quelle = item.getAttribute("value");
        let screen = document.querySelector(".screen");
        screen.setAttribute("src", quelle);
    });
});

// Functions

function selectSection(section, visibal){
    gsap.to(window, {
        duration: 2,
        scrollTo: section
    })
    
    backTop.style.display = visibal;
};


