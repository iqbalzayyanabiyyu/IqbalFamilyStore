// Scripts
// NAVBAR
const currentLocation = location.href;
const navLink = document.querySelectorAll("[data-link]");
const navLength = navLink.length;

for (let i = 0; i < navLength; i++) {
    if (navLink[i].href === currentLocation) {
        navLink[i].classList = "active-link";
    }
}


// SLIDES
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block"
}

//