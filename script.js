const reveals = document.querySelectorAll(".reveal");

function animateOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 80) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
animateOnScroll();
