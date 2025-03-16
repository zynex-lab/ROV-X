let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const sliderContainer = document.querySelector('.slider-container');
    const offset = -100 * currentIndex; // เลื่อนภาพไปทางซ้าย
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

setInterval(changeSlide, 3000); // เปลี่ยนภาพทุก 3 วินาที

function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}