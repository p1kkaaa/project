document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let isAnimated = false;

    function startCounterAnimation() {
        counters.forEach(counter => {
            let target = +counter.getAttribute("data-value");
            let count = 0;
            let speed = target / 50; // Скорость анимации

            function updateCounter() {
                if (count < target) {
                    count += speed;
                    counter.textContent = Math.floor(count) + "+"; // Добавляем "+"
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target + "+"; // Финальное значение с "+"
                }
            }
            updateCounter();
        });
    }

    function checkScroll() {
        let block = document.querySelector(".achievement-block"); 
        let blockTop = block.getBoundingClientRect().top;  // Верхняя граница блока
        let blockBottom = block.getBoundingClientRect().bottom; // Нижняя граница блока
        let screenHeight = window.innerHeight; // Высота экрана

        // Проверяем, что блок полностью виден на экране
        if (blockTop >= 0 && blockBottom <= screenHeight && !isAnimated) {
            isAnimated = true;
            startCounterAnimation();
        }
    }

    window.addEventListener("scroll", checkScroll);
});
