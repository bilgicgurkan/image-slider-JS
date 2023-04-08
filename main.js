const image = document.querySelectorAll(".image");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

eventListener();
nextPhoto();

function eventListener() {
    next.addEventListener("click", nextImage);
    prev.addEventListener("click", prevImage);
}

function nextImage() {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    if (activeSlide.nextElementSibling) {
        activeSlide.nextElementSibling.classList.add("active");
    }
    else {
        image[0].classList.add("active");
    }
}

function prevImage() {
    const activeSlide = document.querySelector(".active");
    activeSlide.classList.remove("active");
    if (activeSlide.previousElementSibling) {
        activeSlide.previousElementSibling.classList.add("active");
    }
    else {
        image[image.length - 1].classList.add("active");
    }
}

function nextPhoto() {
    setInterval("nextImage()", 5000)
}

