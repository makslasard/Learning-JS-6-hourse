// Promise - это объект(по факту это конструктор) представляющий результат успешного или неудачного завершения асинхронной операции

// const promise = new Promise((resolve, reject) => {
//     throw new Error('My Error')
// }).then((value) => {
//     console.log(value)
// }, (error) => {
//     console.log(error)
// })

// В качестве параметров promise принимает всегда состояние в качестве аргументов
// resolve(Решенный или Выполненный ) - То есть, что-то завершило свое выполнение(например, асинхронная операция) и все прошло хорошо.
// reject(Отклоненный) - Промиc отклонен, если произошла ошибка в процессе выполнения.
// pending(Нерешенный или Ожидающий) - Промис ожидает, если результат не готов. То есть, ожидает завершение чего-либо(например, завершения асинхронной операции)

//Promise - нужны для работы с ассинхронным кодом. Когда нам нужно загрузить какие-то данные мы используем промис
// Т.к JS он однопоточный для работы с большим объем данных чтобы не блокировать поток выполнения кода. Т.к promise не блокируют поток
// Когда у нас выполниться тяжелая операция в фоновом режиме мы сможем использовать результат не блолкируя код

// const promise = new Promise((resolve, reject) => {
//     throw new Error('My Error')
// }).then((value) => {
//     console.log(value)
//     return value
// })
// .then((value) => {
//     console.log(value)
// })
// .then((value) => {
//     console.log(value)
// })
// .then((value) => {
//     console.log(value)
// })
// В then у нас возвращается значение которое передается в следующий then, и тд по цепочке

// const promise = new Promise((resolve, reject) => {
//     throw new Error('My Error')
// }).then((value) => {
//     console.log(value)
//     return new Promise((resolve, reject) => {
//         resolve('success')
//     })
// })



// responose - некоторый ответ от сервера
// fetch - для запросов на сервер и получения данных
// .catch() - сценарий при ошибке. При reject
// .then() - сценарий при успешном запросе. При resolve
    
/*
fetch(...Некоторая ссылка куда будет делаться запрос)
 .then(response => response.json())
 .then(data => console.log(data))
*/