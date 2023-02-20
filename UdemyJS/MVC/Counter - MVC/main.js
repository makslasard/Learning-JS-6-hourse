/*
Интенсив по JavaScript. Паттерн MVC. JSON и LocalStorage

MVC - это модель разделения кода по принципу Modal, View, Controller
    Это разделение кода когда мы делим его на отдельные модули и каждый модуль четко отвечает за
    свою конкретную часть. За свою конкретную работу

    Могут быть немного разные реализации, но смысл всегда один

    Model - отвечает только за данные приложения
    View - отвечает только за внешний вид, за шаблон, за представление
    Controller - контролирует взаимодействие

    В случае если у нас в приложении происходят изменения, например пользователь нажимает на кнопку
    Controller считывает эти изменения, нажатие на кнопку, обращается к Model говорит что нужно
    обновитиь какие-то данные. Model обновляет данные. Далее controller обращается с обновленными данными
    к view и говорит что измененные данные нужно отобразить на странице чтобы пользователь видел
    какие-то изменения

Из input мы всегда получаем строку и чтобы перевести строку в число используем метод parseInt()


Урок: Храним данные в скрипте, а не в разметке

1. Вынесение данных в отдельную переменную
    В данном случае хранилищем данных является разметка, т.е значение счетчика всегда храниться в input
    Мы берем данные из input изменяем и снова записываем в input

    Создадим отдельную переменную для данных let counter = 0

    И теперь мы будем сначала изменять counter, а затем записывать значение в input
    И ставим в начальное значение в начале приложения input.value = counter

    И теперь мы можем написать ++counter
    И далее мы обновляем input.value = counter


Функции в Model и View

    Мы нажали на кнопку + Controller обратился к Model, данные счетчика увеличелись на 1
    Потом controller обратился к View и сказал что нужно обновить данные на странице т.к они изменились

    Порядок подключения файлов важен т.к мы сначало должны считать всю model, все view
    И только в конце подлючить controller потому-что он будет управлять на основе функций и данных
        которые есть в данных файлах

    В model должны быть данне и все что связано с изменениями этих данных

Подключить все данные блоки как модули
    - делаем для того чтобы можно было не соблюдать порядок подключения скриптов
    - чтобы четко в controller указать с какими модулями он работает

Каждый из подключенных скриптов мы подключим как module 
    type='module'

Далее из model и view мы будем export данные объекты
    import view from "./view.js"


Хранилище localStorage и формат JSON
    - это локальное хранилище в браузере которое будет помнить значения которые записала данная страница
        находящаяся по данному адресу и при обновлении считать сохраненные данные

Чтобы увидеть локальное хранилище данных этой страницы мы переходи в DevTools -> Application -> LocalStorage

window.localStorage()

localStorage.setItem('key', 'value')

Получение значения элемента из localStorage
    const inputEl = document.querySelector('#input')
    inputEl.value = localStorage.getItem('counter')

Метод removeItem - удалит элемент из localStorage
Метод clear - полностью очистит localStorage

LocalStorage - сохраняет только строки

Формат JSON:
    - это способ записи данных объектов, массивов, переменных в виде строки

    Часто используется чтобы передавать данные внутри приложения и между разными приложениями

    JSON - не описывает функции и методы в объектах

    Т.е мы приобразуем объект к строке и записываем ее в формате строки в localStorage


    // Данный объект мы хотим записать в localStorage

    const person = {
        name: 'Bob', 
        age: 24,
        gender: 'male'
    }

    localStorage.setItem('person', person)
        [object, Object]

    С такими данными уже нельзя работать

    const getDataCouter = localStorage.getItem('counter')

    const person = {
        name: 'Bob', 
        age: 24,
        gender: 'male'
    }

    const parseDataPerson = JSON.stringify(person)
    const setData = localStorage.setItem('person', parseDataPerson)


    const date = localStorage.getItem('person')
    const parseDate = JSON.parse(date)
    console.log(parseDate)

    Переменные с localStorage можно называть dataFromLS 

    const person = JSON.parse(localStorage.getItem('person'))


ООП. Классы
    - само понятие ООП отношения к MVC не имеет поэтому мы можем использовать ООП или нет

    MVC - это про разделение кода Model, View, Controller
    
    ООП - это способ упаковки кода



*/ 