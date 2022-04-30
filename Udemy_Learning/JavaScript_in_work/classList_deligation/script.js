const btns = document.querySelectorAll('button')
      wrapper = document.querySelector('.btn-block')

// console.log(btns[0].classList.length) - // Показывает сколько классов у первого элемента
// console.log(btns[0].classList.item(1)) - // Позволяет получить класс который распологается под определенным индексом
// console.log(btns[1].classList.add('red')) - // Позволяет добавлять новые классы к элементу
// console.log(btns[0].classList.remove('red')) - // Позволяет удалять ненужные классы
// console.log(btns[0].classList.toggle('red')) - // Проверяет есть ли класс, то удаляет. Если класса нет, то добавляет
// console.log(btns[0].classList.contains('red')) // Позволяет проверять наличие какого-то определенного класса true/false

// if (btns[1].classList.contains('red')) {
//     console.log('red')
// }

// btns[0].addEventListener('click', () => {
//     if(!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red')
//     } else {
//         btns[1].classList.remove('red')
//     }
// })

// Делегирование
// Мы берем элемент который является родителем для всех кнопок и работаем с родителем. Т.е назначаем событие на родителя
// В делегировании если элемент подходит под условие, то на нем будет срабатывать та функция которую мы написали или передали
// Мы делегируем событие с родителя на его потомков


// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.classList.contains('blue')) { maches()
//         console.log('Hello')
//     }
// })

// wrapper.addEventListener('click', () => {
//     const btn = document.createElement('button')
//     btn.classList.add('red')
//     wrapper.append(btn)
// })

// Делегирование позволяет автоматически добавлять обработчик события к новому элементу
