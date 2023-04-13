/*
Технология AJAX
    - используеться для запросов определенных данных без перезагрузки всего приложения
        Подгружаеться только то, что запросил пользователь
        Тем самым оптимизация, сохранение трафика улучшаеться


Promise (ES6)

    CallBack Hell - большая вложенность callback в другие callback

*/

// Promise.

/*
catch() - обработка ошибки всегда ставиться в конце

*/

/*
    Запрос данных...
    Подготовка данных...
    { name: 'TV', price: 2000, status: 'order', modify: true }
*/
// console.log('Запрос данных...')

// const request = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...')

//         const product = {
//             name: 'TV',
//             price: 2000
//         }

//         resolve(product)
//     }, 2000)
// })

// request.then((product) => {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             product.status = 'order'
//             resolve(product)
//         }, 2000)
//     })
// }).then((data) => {
//     data.modify = true
//     return data
// }).then((data) => {
//     console.log(data)
// }).catch(() => {
//     console.error('Произошла ошибка...')
// }).finally(() => {
//     console.log('finally')
// })

// const test = (time) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), time)
//     })
// }
// test(1000).then(() => console.log('1000 ms'))
// test(2000).then(() => console.log('2000 ms'))

/*
Promise.all()
    - принимает в себя массив с Promises. Ждет пока выполнятся все Promises выполнятся и что-то сделает

    Служит для того чтобы мы точно убедились что все наши promises уже выполнились
    Т.к мы можем делать несколько разных запросов на разные сервера и эти сервера могут отвечать
        с разной скоростью. И для задачи необходимо использовать данные когда они все загрузяться

        Т.е мы должны подождать загрузки всех наших Promises и только потом что-то делать

Promise.race() - выполняется когда уже первый promise отработал

*/

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All')
// })

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('All')
// })


/*
Fetch API

API - это набор данных и возможностей которые предостовляет какое-то готовое решение которое мы можем использовать
        Наприме DOM API

DOM API - это различные методы которые позволяют нам работать с различными элементами на странице

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        name: 'Alex',
    }),
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(response => response.json())
    .then(json => console.log(json))
*/

// filter
const names = ['Anna', 'Ivan', 'Ksenia', 'Voldemar']
const filterNames = names.filter(name => name.length < 5)
console.log(filterNames)

// map
const answers = ['IvAn', 'AnnA', 'Hello']
const mapAnswers = answers.map(name => name.toLowerCase())
console.log(mapAnswers)

//every / some -возвращают boolean если условие верно

// Проверка на наличие числа в массиве
const some = [1, 'dsaf', 'wqeqw']
const someNumber = some.some(item => typeof (item) === 'number')
console.log(someNumber)

// every - если все элементы в массиве походят под условие иначе false

// reduce - служит чтобы собирать массив в одно единое целое
const arr = [1, 3, 4, 5, 6, 7, 9]
const res = arr.reduce((sum, current) => sum + current, 3)
// Складывает предыдущее значение с следующим первая иттерация sum - 0, current - 1, sum - 1 , current - 3, sum - 4 , current - 5
// 3 - это доп аргумент начальное значение. Т.е отсчет будет не с нуля, а с 3

// async / await