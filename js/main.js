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





/* Scroll Animation */

// Smooth Scrolling function
const links = document.getElementsByClassName("smooth-scroll");

for (const link of links) {
  link.addEventListener("click", whipScroll);
}

function whipScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);

  const start = window.pageYOffset;
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startTime = performance.now();
  const duration = 1600; // Duration in ms (adjust as needed)

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3); // Ease out cubic for "whip" effect
  }

  function animateScroll(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Ensure progress is between 0 and 1
    const easedProgress = easeOutCubic(progress);

    window.scrollTo(0, start + targetPosition * easedProgress);

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll); // Continue the animation
    }
  }

  requestAnimationFrame(animateScroll);
}
