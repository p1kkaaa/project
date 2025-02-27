document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([42.85179, 74.59328], 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);
    L.marker([42.85179, 74.59328]).addTo(map).bindPopup('Наш офис');
});
