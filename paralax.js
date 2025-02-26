window.addEventListener("scroll", function () {
    const scrolled = window.scrollY;
    document.querySelector(".parallax-container").style.backgroundPosition = `center ${scrolled * 0.5}px`;
});
