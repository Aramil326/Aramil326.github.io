document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('loveStoryCarousel');
    const bsCarousel = new bootstrap.Carousel(carousel, {
        interval: 25000, // 25 секунд между слайдами
        ride: false // отключаем автозапуск
    });

    // Функция для проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Обработчик скролла
    let carouselStarted = false;
    window.addEventListener('scroll', function() {
        if (!carouselStarted && isElementInViewport(carousel)) {
            carouselStarted = true;
            bsCarousel.cycle(); // запускаем карусель
        } else if (carouselStarted && !isElementInViewport(carousel)) {
            carouselStarted = false;
            bsCarousel.pause(); // останавливаем карусель
        }
    });

    // Проверяем при загрузке страницы
    if (isElementInViewport(carousel)) {
        carouselStarted = true;
        bsCarousel.cycle();
    }
});