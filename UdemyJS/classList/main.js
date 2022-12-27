const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block')


// console.log(btns[0].classList.length)
// получение колличества классов у элемента

// console.log(btns[0].classList.item(0))
// item - позволяет получить класс который распологаеться под определенным индексом
// получение класса у элемента под индексом 0 - blue

// console.log(btns[0].classList.add('red'))
// add - добавляет нужный класс
// через запятую мы можем добавить второй класс выбранному элементу

// console.log(btns[0].classList.remove('blue'))
// remove - удаляет у элемента класс

// console.log(btns[0].classList.toggle('red'))
// toggle - позволяет добавить класс если его нет, и убрать класс если он есть


// if (btns[1].classList.contains('blue')) {
//     btns[1].classList.toggle('red')
// }
// contains - позволяет проверять наличие класса на определенном элементе return false or true

// btns[0].addEventListener('click', () => {
//      if (!btns[1].classList.contains('red')) {
//          btns[1].classList.add('red')
//      } else {
//          btns[1].classList.remove('red')
//      }

//     btns[1].classList.toggle('red')
// })

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('Click for buttons')
//     }
// })

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('blue')) { // matches('button.red')
        console.log('ClassList for blue')
    }
})

/*
Делегирование событий
    Если элемент подходит под условие, то на нем будет срабатывать функция которую мы написали или передали
    Мы делегируем событие с родителя на его потомков 

    Важно!!! Нужно вешать события на обертку т.к при добавлении новый элементов тоже будут отрабатывать события
    Если например проходиться по кнопкам forEach, то новые кнопки не будут работать т.к про них ничего неизвестно

*/ 

const btn = document.createElement('button')
btn.classList.add('red')
wrapper.append(btn)

/*
Делегирование событий отлично подходит если у нас есть много элементов с одинаковыми обработчиками
        причем при динамическом изменении они также будут применяться к новым элементам

*/ 