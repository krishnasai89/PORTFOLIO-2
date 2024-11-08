// menubar
let myMenuFunction=()=>{
    var menuBth = document.getElementById("mynavMenu")

    if (menuBth.className ==  "navMenu") {
      menuBth.className = "responsive";
    }
    else{
      menuBth.className = "nav-Menu";
    }
};

// darkmode
const body = document.querySelector("body"),
toggleSwitch = document.querySelector("toggle-switch");

toggleSwitch.addEventListener("click",()=>{
  body.classList.toggle("dark");
})

// typing effect
var typingEffect = new Typed(".typedText",{
  strings:["Designer","Coder","Developer"],

  loop: true,
  typeSpeed: 100,
  backSpeed:80,
  backDelay: 2000,
});

// scrool animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-name",{delay : 100});
// sr.reveal(".text-info",{delay : 200});
sr.reveal(".text-btn",{delay : 200});
sr.reveal(".socical-icons",{delay : 200});
sr.reveal(".featured-image",{delay : 320});

sr.reveal(".project-box",{interval: 200});

sr.reveal(".top-header",{});

const srLeft = ScroolReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true
});

srLeft.reveal(".about-info",{delay: 100})
srLeft.reveal(".contact-info",{delay: 100})

const srRight = ScroolReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true
});

srRight.reveal(".skill",{delay: 100})
srRight.reveal(".skill-box",{delay: 100})

// active link

const sections = document.querySelectorAll(".section[id]")

let scrollActive=()=>{
  const scrollY = window.scrollY;

  sections.forEach((current)=>{
    const sectionHeight = current.offsetHeight;
  })
}