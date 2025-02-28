document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector(".parallax-title");
    const map = L.map('map').setView([42.85179, 74.59328], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);
    L.marker([42.85179, 74.59328]).addTo(map).bindPopup('Наш офис');
    
    let index = 0;
    const text = "Землеустройство и проектирование";
    function typeText() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(typeText, 100);
        }
    }

    textElement.textContent = "";
    typeText();
});

