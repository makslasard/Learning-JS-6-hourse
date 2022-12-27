/*
Дополнительные основы JavaScript: 

1. Оператор нулевого слияния (Nullish, ??) - ES11
    - оператор выглядит как 2 вопросительных знака

Реагирует не на все false, а только на null и undefined

let userName;
console.log(userName ?? 'User')

Данный оператор похож на оператор или || , но он обращает свое внимание на то что находится
    внутри переменной userName. Работает не со всеми 5 значениями которые false в логическом контексте, а
    только с null и undefined

Если в первом аргументе будет null или undefined, то будет возвращен второй результат
Если мы подставим в переменную значение которое в логическом контексте будет false, то отобразиться значение 
    этой переменной. Т.к это не null или undefined

Это расширяет наши возможности и позволяет не писать кучу проверок

userName ?? userKey ?? 'User'


2. Оператор опциональной цепочки (?.)
    - проверяет выражение слева от себя и останавливает операции если оно имеет undefined или null

И просто возвращает undefined: block?.textContent
Позволяет избовляться от лишних условий, там где это не нужно

Работает только на чтение свойства. Если что-то записать будет ошибка
    Т.к в block мы получаем undefined и применяем метод к undefined. Поэтому ошибка
    С помощью одного символа мы можем избавиться от больших проверок
    Ставить только там где предпологаются проблемы. Потенциально не существующие фукнции


3. Живые коллекции и полезные методы

4. Тип данных Symbol
    - символы необходимы нам чтобы создовать уникальные id (идентификаторы). Они уникальны и 
        не изменяемые. Применяются к свойствам объектов

Кроме строк, свойствами объектов могут быть символы

let id = Symbol("id")
obj[id] = 1

Символы нужно создавать именно в таком синтаксисе
Символы всегда уникальны, даже если у них одинаковое описание

const obj = {
    'name': 'Test',
    [Symbol('id')]: 1 либо [id]: 1
}

Символы позволяют создавать скрытые при обычном доступе свойства, которые не показывается при 
    переборе объекта. Чтобы получить id можно написать метод () => return this[id]

Для нашей уверенности в том что это свойство никогда случайно не будет перезаписано


Дескрипторы свойств и полезные методы объектов:

writable - если этот параметр будет стоять в позиции true, то свойства в объекте можно будет изменить
    Или если стоит false оно будет только для чтения

enumerable - если стоит в true, то свойства будут перечислятся в циклах.
    Если false, то циклы его будут игнорировать

configurable - если стоит в true, то свойство можно будет удалить, а атрибуты его можно будет изменить
    Иначе делать этого нельзя


Скрипты и время их выполнения. setTimeout и setInterval

    - setTimeout: Метод позволяет выполнять функцию внутри себя через определенное время 1 раз
        Время измеряется в миллесекундах. Например 1000ms - 1сек и т.д


Работа с датами. 
    Date() - это специфический объект который содержит в себе различные методы и свойства
        для работы датами 


Параметры документа, окна и работа с ними

document - по факту это объект который содержит в себе все HTML структуру только в более сложном варианте

window - это окно в котором показывается документ

screen - в практике используется очень редко. 


Атрибут contenteditable
    Дает возможность пользователю происзовить изменение внутри элемента

    <div contenteditable class='text'></div>

Мы выбираем элемент за которым хотим следить, далее выбираем за какими конкретными изменениями мы 
    хотим следить и в функции обработчике указать какие действия мы будем предпринимать

Например
    Изменились такие-то узлы и мы будем делать такие-то действия

ResizeObserver - отслеживает изменения размеров элемента


Классы - это синтаксический сахар. Т.е красивая обертка функционала


Контекст this
    - это то что окружает функцию и те условия в которых она вызываеться

Функция может вызываться 4 - мя способами

    1. Обычная функция: this = window, но если use strict = undefined

    function showThis() {
        console.log(this)
    }
    showThis()

    2. Объект. 
        Если мы используем метод внутри объекта, то контекст вызова всегда будет ссылаться на этот объект

    const obj = {
        a: 20,
        b: 15,
        sum: function() {
            console.log(this)
            function shout() {
                console.log(this)
            }
            shout()
        }
    }

    Контекст у методов объекта - сам объект
    Вложенная функция это уже не метод объекта поэтому this - undefined

    3. this в конструкторах и классах - это новый экземпляр объекта
    4. Ручное присвоение this любой функции с помощью bind


























*/

// setTimeout
const timer = setTimeout(function() {
    console.log('Function compleated for 1 ms')
}, 1000)

clearTimeout(timer)


// Реализация анимации через setInterval
function myAnimate() {
    const element = document.querySelector('.box')
    let position = 0

    const id = setInterval(frame, 1000)

    function frame() {
        if(position === 300) {
            clearInterval(id)
        } else {
            element.style.top = position + 'px'
            element.style.left = position + 'px'
        }
    }
}

btn.addEventListener('click', myAnimate)


// Работа с Date
const now = new Date() // Показывает текущую дату и время. T - это разделитель
console.log(now.getFullYear())// У объект Date() множество встроенных методов через точку


// Параметры document
const box = document.querySelector('.box')

const width = box.clientWidth
// clientWidth - ширина без margin и scroll, но с padding 
const height = box.clientHeight
// clientHeight - высота без margin
const widthOffset = box.offsetWidth
// offsetWidth - ширина с margin и scroll
const heightOffset = box.offsetHeight
// offsetHeight - высота с margin
const scrollHeight = box.scrollHeight
// scrollHeight - высота с учетом всего контента доступного при scroll

// Раскрывает все содержимое которое скрыто в scroll
btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px'
})

console.log(box.scrollTop)
// Позволяет замерять кол-во px которые были прокручены в блоке и находятся в невидимой зоне
console.log(box.getBoundingClientRect)
// Позволяет получить координаты элемента на странице (все) или какие-то конкретно
const style = window.getComputedStyle(box)
// Позволяет посмотреть стили которые уже были применены к элементу


// MutationObserver

const boxMutation = document.querySelector('box')

// Объект который будет следит за чем-то
let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords)
})

// Метод observe - т.е следить за чем-то
observer.observe(box, {
    childList: true // будем следить что у нас добавляются текстовые узлы
})

// Перестань следить за чем-то
observer.disconnect()


// Фукнции - конструкторы
function User(name, id) {
    this.name = name
    this.id = id
    this.human = true
    this.hell0 = function() {
        console.log(`Hello ${this.name}`)
    }
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел!`)
}

// Возвращает объект 
const newUser = new User('Alex', 1) // User { name: 'Alex', id: 1, human: true }

// Пример работы с контекстом
function count(num) {
    return this * num
}
const double = count.bind(User)()

const btnBind = document.querySelector('button') 

btn.addEventListener('click', function() {
    console.log(this) // <button></button>
    // Контекстом вызова будет сама кнопка
})