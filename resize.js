const img = document.querySelector('.hero-image');

function updateImageSrc() {
    if (window.matchMedia('(max-width: 599px)').matches) {
        img.src = 'images/img10.jpg';
    } else {
        img.src = 'images/first.jpg';
    }
}

updateImageSrc(); // обновить сразу при загрузке

window.addEventListener('resize', updateImageSrc); // обновлять при изменении размера