// script.js
// Программа мероприятия
const programData = [{
    title: 'Встреча',
    img: 'images/img1.jpg',
    info: [['Дата', '08 августа 2025 года'],
        ['Время', '14:15 - 14:30'],
        ['Место проведения', 'Центр семьи «Казан»'],
        ['Адрес', 'ул. Сибгата Хакима, 4']]
}, {
    title: 'Регистрация',
    img: 'images/img2.jpeg',
    info: [['Дата', '08 августа 2025 года'],
        ['Время', '14:45 - 15:00'],
        ['Место проведения', 'Центр семьи «Казан», Золотой зал'],
        ['Адрес', 'ул. Сибгата Хакима, 4']]
}, {
    title: 'Сбор у банкетного зала',
    img: 'images/img3.webp',
    info: [['Дата', '08 августа 2025 года'],
        ['Время', '16:30 - 16:45'],
        ['Место проведения', 'Love Story'],
        ['Адрес', 'просп. Ямашева, 36, корп. 2']]
}, {
    title: 'Банкет',
    img: 'images/img4.jpeg',
    info: [['Дата', '08 августа 2025 года'],
        ['Время', '17:00 - 23:00'],
        ['Место проведения', 'Love Story'],
        ['Адрес', 'просп. Ямашева, 36, корп. 2']]
}];

const programList = document.querySelector('.program__list');
const template = document.getElementById('program-card-template').content;
programData.forEach(item => {
    const clone = document.importNode(template, true);
    clone.querySelector('.program-card__image').src = item.img;
    clone.querySelector('.program-card__title').textContent = item.title;
    const ul = clone.querySelector('.program-card__info');
    item.info.forEach(([label, value]) => {
        const li = document.createElement('li');
        li.className = 'program-card__info-item block';
        li.innerHTML = `<h4>${label}</h4><h4>${value}</h4>`;
        ul.appendChild(li);
    });
    programList.appendChild(clone);
});

document.addEventListener('DOMContentLoaded', () => {
    // Анимация появления секций
    const sections = document.querySelectorAll('.block');
    const onScroll = () => {
        const windowH = window.innerHeight;
        sections.forEach(sec => {
            if (sec.getBoundingClientRect().top < windowH - 100) {
                sec.classList.add('_visible');
            }
        });
    };
    onScroll();
    window.addEventListener('scroll', onScroll);

    // Цветовые блоки
    const colors = ['#F4DCDC', '#D3C8AA', '#D3E0A8', '#A8E0C0', '#A8DDE0', '#B5C7E3', '#B59AB5'];
    const colorsContainer = document.getElementById('colors-container');
    colors.forEach(color => {
        const colors = document.createElement('div');
        colors.className = 'colors__item__box';

        const halfUp = document.createElement('div');
        halfUp.className = 'colors__item__up';
        halfUp.style.backgroundColor = color;
        halfUp.style.border = `1px solid ${adjustColor(color, -50)}`;

        const halfDown = document.createElement('div');
        halfDown.className = 'colors__item__down';
        halfDown.style.backgroundColor = adjustColor(color, -150);
        halfDown.style.border = `1px solid ${adjustColor(color, -150)}`;
        colors.appendChild(halfUp);
        colors.appendChild(halfDown);


        colorsContainer.appendChild(colors);
    });

    function adjustColor(hex, amount) {
        // Преобразуем HEX в число.
        let color = parseInt(hex.startsWith("#") ? hex.slice(1) : hex, 16);
        // Регулируем каждый компонент RGB в пределах 0-255.
        let r = Math.min(255, Math.max(0, (color >> 16) + amount));
        let g = Math.min(255, Math.max(0, ((color & 0x00FF00) >> 8) + amount));
        let b = Math.min(255, Math.max(0, (color & 0x0000FF) + amount));
        // Возвращаем исправленный цвет в HEX-формате.
        return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
    }
});
