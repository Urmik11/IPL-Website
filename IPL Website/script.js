document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-target]").forEach(item => {
        item.addEventListener("click", function () {
            let target = document.querySelector(this.getAttribute("data-target"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            } else {
                console.error("Target element not found!");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu-container");
    const button = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-button");
    const menuOptions = document.querySelectorAll("#menu-container li");
    
    button.addEventListener("click", function (event) {
        event.stopPropagation();
        menu.classList.toggle("active");
    });

    closeButton.addEventListener("click", function () {
        menu.classList.remove("active");
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !button.contains(event.target)) {
            menu.classList.remove("active");
        }
    });

    menuOptions.forEach(option => {
        option.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});

let index = 0;
function moveSlide(step) {
    const slides = document.querySelectorAll('.slide1');
    const totalSlides = slides.length;
    const slider = document.querySelector('.slider');
    let visibleSlides = 3;                                          // Default for large screens

    if (window.matchMedia("(max-width: 1200px)").matches) {
        visibleSlides = 2;                                          // Medium screens
    }
    if (window.matchMedia("(max-width: 768px)").matches) {
        visibleSlides = 1;                                          // Small screens
    }

    if (index + step < 0 || index + step > totalSlides - visibleSlides) return;
    
    index += step;
    slider.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`;
}

window.addEventListener("resize", () => {
    index = 0;
    document.querySelector('.slider').style.transform = `translateX(0%)`;
});