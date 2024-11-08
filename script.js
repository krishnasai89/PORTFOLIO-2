// menubar
let myMenuFunction = () => {
  var menuBtn = document.getElementById("mynavMenu");

  if (menuBtn.className === "navbar-links") {
      menuBtn.className += " active";
  } else {
      menuBtn.className = "navbar-links";
  }
};

// Ensure the function is attached to an event listener
document.getElementById("menuToggle").addEventListener("click", myMenuFunction);

// typing effect
var typingEffect = new Typed(".typedText",{
  strings:["Designer","Coder","Developer"],

  loop: true,
  typeSpeed: 100,
  backSpeed:80,
  backDelay: 2000,
});

// scroll animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-name",{delay : 100});
sr.reveal(".text-info",{delay : 200});
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

let scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.offAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll",scrollActive)

// dark mode
function dark() {
  var element = document.body;
  element.classList.toggle("dark");
}
// loader
var myVar;

function loader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}