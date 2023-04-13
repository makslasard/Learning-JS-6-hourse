

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


    const getResource = async (url) => {
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
            }

            return await response.json()
        } catch (e) {
            console.error('Произошла ошибка!')
        }
    }

    getResource('https://localhost:3000/menu').then(data => {
        data.forEach(({ img, altimg, title, description, price }) => {
            new MainCard(img, altimg, title, description, price, '.menu .container').render()
        })
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
    const div = new MainCard(
        '../img/tabs/vegy.jpg',
        'vegy',
        'Вегетерианское',
        'это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.',
        230,
        '.menu .container'
    ).render()
})

// axios - автоматически конвертирует json в объект. Объект настроек
axios.get('https://localhost:3000/menu')
    .then(data => {
        data.data.forEach(({ img, altimg, title, description, price }) => {
            new MainCard(img, altimg, title, description, price, '.menu .container').render()
        })
    })

// Form

const form = document.querySelector('form')

const message = {
    loading: 'Загрузка',
    success: 'Спасибо, скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
}

form.forEach(item => {
    bindPostData(item)
})

const postData = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        })
        return await response.json()
    } catch (e) {
        console.error('Произошла ошибка!')
    }
}


function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const statusMessage = document.createElement('div')
        statusMessage.classList.add('status')
        statusMessage.textContent = message.loading
        form.append(statusMessage)

        // const request = new XMLHttpRequest()
        // request.open('POST', 'server.php') // Метод, и локальный сервер на который мы будем ссылаться

        // request.setRequestHeader('Content-type', 'multipart/form-data')
        const formData = new FormData(form)

        const object = {}
        formData.forEach(function (value, key) {
            object[key] = value
        })

        request.send(formData)

        postData('server.php', JSON.stringify(object))
            .then(data => {
                data.text()
            }).then(data => {
                console.log(data)
                showThinkModal(message.success)
                form.reset()
                statusMessage.remove()
            }).catch(() => {
                showThinkModal(message.failure)
            }).finally(() => {
                form.reset()
            })





    })
    // Slider
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slide-inner'),
        width = window.getComputedStyle(slidesWrapper).width

    let slideIndex = 1
    let offset = 0

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
        current.textContent = `0${slideIndex}`
    } else {
        total.textContent = slides.length
        current.textContent = slideIndex
    }

    slidesField.style.width = 100 * slides.length + '%'
    slidesField.style.display = 'flex'
    slidesField.style.transition = '0.5s all'

    slidesWrapper.style.overflow = 'hidden'

    slides.forEach(slide => {
        slide.style.width = width
    })

    next.addEventListener('click', () => {
        if (offset === +width.slice(0, width.length - 2) * (slides - 1)) {
            offset = 0
        } else {
            offset += +width.slice(0, width.length - 2)
        }

        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == slides.length) {
            slideIndex = 1
        } else {
            slideIndex++
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }
    })

    prev.addEventListener('click', () => {
        if (offset = 0) {
            offset = +width.slice(0, width.length - 2) * (slides - 1)
        } else {
            offset -= +width.slice(0, width.length - 2)
        }

        slidesField.style.transform = `translateX(-${offset}px)`
    })

    // showSlides(slideIndex)

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`
    // } else {
    //     total.textContent = slides.length
    // }

    // const showSlides = (n) => {
    //     if (n > slides.length) slideIndex = 1
    //     if (n < 1) slideIndex = slides.length

    //     slides.forEach(item => {
    //         item.style.display = 'none'
    //     })

    //     slides[slideIndex - 1].style.display = 'block'

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`
    //     } else {
    //         current.textContent = slideIndex
    //     }
    // }

    // const plusSlides = (n) => {
    //     showSlides(slideIndex += n)
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1)
    // })

    // next.addEventListener('click', () => {
    //     plusSlides(+1)
    // })
}



/*
forEach(item, i) - по синтаксису 2 элемент отвечает за номер по порядку i - это индекс
render() - метод используется для формирования верстки

*/