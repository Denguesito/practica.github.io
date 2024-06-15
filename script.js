document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    function showCarouselItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        showCarouselItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        showCarouselItem(currentIndex);
    });

    showCarouselItem(currentIndex);
});
