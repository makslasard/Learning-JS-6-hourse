/*
Технология AJAX
    - используеться для запросов определенных данных без перезагрузки всего приложения
        Подгружаеться только то, что запросил пользователь 
        Тем самым оптимизация, сохранение трафика улучшаеться


Promise (ES6)

    CallBack Hell - большая вложенность callback в другие callback

*/

// Promise. 
console.log('Запрос данных...')

const request = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...')

        const product = {
            name: 'TV',
            price: 2000
        }

        resolve(product)
    }, 2000)
})

request.then((product) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            product.status = 'order'
            resolve(product)
        }, 2000)
    })
}).then((data) => {
    console.log(data)
})

