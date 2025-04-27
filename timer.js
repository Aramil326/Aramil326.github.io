    document.addEventListener('DOMContentLoaded', function () {
        const deadline = new Date(2025, 7, 8, 14, 45);
        let timerId = null;

        // склонение числительных
        function declensionNum(num, words) {
            return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
        }

        function updateTimer() {
            const now = new Date();
            // по умолчанию считаем оставшееся время
            let diff = deadline - now;
            let headingText = "До нашей свадьбы осталось:";

            // если время ушло — считаем, сколько прошло
            if (diff < 0) {
                diff = now - deadline;
                headingText = "С нашей свадьбы прошло:";
            }

            // обновляем заголовок
            document.querySelector(".timer__heading").textContent = headingText;

            // переводим миллисекунды в дни/часы/минуты/секунды
            const days = Math.floor(diff / 1000 / 60 / 60 / 24);
            const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
            const minutes = Math.floor(diff / 1000 / 60) % 60;
            const seconds = Math.floor(diff / 1000) % 60;

            // вывод с ведущими нулями
            $days.textContent = days < 10 ? '0' + days : days;
            $hours.textContent = hours < 10 ? '0' + hours : hours;
            $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
            $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;

            // обновляем подсказки (склонения)
            $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
            $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
            $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
            $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
        }

        // получаем элементы счетчика
        const $days = document.querySelector('.timer__days');
        const $hours = document.querySelector('.timer__hours');
        const $minutes = document.querySelector('.timer__minutes');
        const $seconds = document.querySelector('.timer__seconds');

        // запускаем сразу и потом каждую секунду
        updateTimer();
        timerId = setInterval(updateTimer, 1000);
    });