

window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items')

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none'
        })
    }

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block'
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent(0) // 0 - это начальный элемент массива

    tabParent.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (event.target === item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })

    // Timer

    const deadline = '2020-05-11'

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            days = 0,
                hours = 0,
                minutes = 0,
                seconds = 0
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)), // Получение кол-во миллесекунд в дне
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);
        }



        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }
    // t - техническая переменная поэтому короткое название
    // Т.к дата типом строка для работы нужно ее преобразовать в число с помощью .parse()

    function getZero(num) {
        if (num <= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    // Функция для помещения элементов на странице
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock()

        function updateClock() {
            const t = getTimeRemaining(endtime)

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }
    setClock('.timer', deadline)


    // Modal

    // [] - получение элемента по data - атрибуту
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]')

    function openModal() {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
        clearInterval(modalTimerId)
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal)
    })

    function closeModal() {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    modalCloseBtn.addEventListener('click', closeModal)

    // Сокращение повторяющегося функционала
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal()
        }
    })

    // Обработка событий нажатия на клавиатуру
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal()
        }
    })

    // const modalTimerId = setTimeout(openModal, 3000)

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal()
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    // Пользователь долистал до конца страницы
    window.addEventListener('scroll', showModalByScroll)
})

// Создание карточек через классы
class MainCard {
    constructor(img, alt, title, text, price, parentSelector) {
        this.img = img
        this.alt = alt
        this.title = title
        this.parent = document.querySelector(parentSelector)
        this.text = text
        this.price = price
        this.transfer = 27
        this.changeToUAH()
    }

    changeToUAH() {
        this.price = this.price * this.transfer
    }

    render() {
        const element = document.createElement('div')
        element.innerHTML = `
        <div class="menu__item">
            <img src=${this.img} alt=${this.alt}>
            <h3 class="menu__item-subtitle">Меню "${this.title}"</h3>
            <div class="menu__item-descr">Меню “${this.title}” - ${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        </div>
        `
        this.parent.append(element)
    }
}

/*
forEach(item, i) - по синтаксису 2 элемент отвечает за номер по порядку i - это индекс
render() - метод используется для формирования верстки

*/