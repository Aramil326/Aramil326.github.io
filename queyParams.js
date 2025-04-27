document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const name1 = params.get('name1');
    const name2 = params.get('name2');

    // Находим заголовок
    const headingEl = document.querySelector('.wedding__heading_name');
    const wedding__text = document.querySelector('.wedding__text');

    // Вставляем правильный текст
    if (name1 && name2) {
        headingEl.textContent = `И приглашаем Вас на нашу свадьбу, дорогие ${name1} и ${name2}`;
        wedding__text.textContent = `Для нас очень важно,
        чтобы Вы смогли разделить с нами самое счастливое мгновение в нашей жизни. Порадуйте нас
        своим присутствием:`
    } else if (name1) {
        headingEl.textContent = `И приглашаем Тебя на нашу свадьбу, дорогой ${name1}`;
        wedding__text.textContent = `Для нас очень важно,
        чтобы Ты смог разделить с нами самое счастливое мгновение в нашей жизни. Порадуй нас
        своим присутствием:`
    } else {
        // Если параметров нет, можно скрыть блок или вставить какое-то дефолтное сообщение
        headingEl.textContent = 'Дорогие друзья, родные и близкие!';
        wedding__text.textContent = `Мы счастливы пригласить вас на нашу свадьбу. Для нас очень важно,
        чтобы вы смогли разделить с нами самое счастливое мгновение в нашей жизни. Порадуйте нас
        своим присутствием:`
    }


    // Заполнение списка гостей
    const guestsList = [
        "Папа Арамиля",
        "Мама Арамиля",
        "Ралина",
        "Ильяс",
        "Лия",
        "Бабан",
        "Неней",
        "Эндже Апа",
        "Ринат Абый",
        "Альфия Апа",
        "Гульфия Апа",
        "Марсель Абый",
        "Гузель Апа",
        "Искандер",
        "Мадина",
        "Анелия Апа",
        "Никита",
        "Рифкат Абый",
        "Софья Апа",
        "Алмаз Абый",
        "Папа Сабины",
        "Мама Сабины",
        "Айсель",
        "Алан",
        "Картэтэй",
        "Нэнэй Ляля",
        "Нэнэй Назифа",
        "Тётя Ирина",
        "Дядя Рушан",
        "Амина",
        "Салима",
        "Тётя Римма",
        "Дядя Ильфат",
        "Наташа",
        "Виктор",
        "Тётя Зиля",
        "Дядя Ренат Зиля",
        "Булат",
        "Карен",
        "Максим",
        "Влад",
        "Адель",
        "Азат",
        "Дима",
        "Рома",
        "Анвар",
        "Ислам",
        "Миша",
        "Алишер",
        "Рухшона",
        "Дана",
        "Даниил",
        "Дина",
        "Фанзиль",
        "Вика",
        "Алёна",
        "Таня",
        "Настя"];
    const columnsContainer = document.getElementById('columns');
    const maxPerColumn = 10;
    let col;
    guestsList.forEach((name, i) => {
        if (i % maxPerColumn === 0) {
            col = document.createElement('div');
            col.className = 'guests__column';
            columnsContainer.appendChild(col);
        }
        const item = document.createElement('div');
        item.className = 'guests__item';
        item.textContent = name;

        if (
            (name1 && name === name1) ||
            (name2 && name === name2)
        ) {
            item.classList.add('gold')
        }
        col.appendChild(item);
    });

})