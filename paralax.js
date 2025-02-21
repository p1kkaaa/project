// window.addEventListener("scroll", function () {
//     const scrolled = window.scrollY;
//     document.querySelector(".parallax-container").style.backgroundPosition = `center ${scrolled * 0.5}px`;
// });


// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector(".parallax-container").style.backgroundImage = "url('/img/city.jpg')";
// });


window.addEventListener("scroll", function () {
    const scrolled = window.scrollY;
    document.querySelector(".parallax-container").style.backgroundPosition = `center ${scrolled * 0.5}px`;
});
