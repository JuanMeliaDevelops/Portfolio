/* Scroll Down a trabajos  Animacion */

const scrollDown = document.getElementById("scroll-down");

scrollDown.addEventListener('mouseenter', function (event) {
    scrollDown.classList.add("animate__animated", "animate__bounce");
});

scrollDown.addEventListener('mouseleave', function (event) {

    setTimeout(function () {
        scrollDown.classList.remove("animate__animated", "animate__bounce");
    }, 1200);
});


