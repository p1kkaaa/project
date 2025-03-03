document.addEventListener('DOMContentLoaded', () => {
    if (typeof bootstrap !== 'undefined') {
        const servicesCarousel = new bootstrap.Carousel('#servicesCarousel', {
            interval: 3000, 
            ride: 'carousel' 
        });
        const projectCarousel = new bootstrap.Carousel('#projectCarousel', {
                    interval: 3000,
                    ride: 'carousel'
                })
    } else {
        console.error("Bootstrap JS не загружен!");
    }
});
