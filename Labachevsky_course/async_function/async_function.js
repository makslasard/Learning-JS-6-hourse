/*
Работа с ассинхронными функциями

Ассинхронная функция отличается от простой функции, что перед ней пишется ключевое слово async
Чтобы наша работа была ассинхронной, и не блокировала действия пользователя используется ключевое слово await
Которое означает что мы подождем пока он не выполниться. Используется только внутри ассинхронных функций
Вне фунций мы получим ошибку

Await внутри ассинхронных фунций используется только перед методами которые возвращают нам promise
Любая ассинхронная фунция возвращает нам promise

*/ 
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(console.log())
    .catch(console.error())


async function getPosts(url) {
    try{
        const response = await fetch(url)
        const posts = await response.json()
        return posts
    } catch(error) {
        console.warn(error)
        return error
    }
}
getPosts('https://jsonplaceholder.typicode.com/posts').catch(console.log)

const getComments = async () => {} // Альтернативный способ записи ассинхронной функции

class Articles {
    async methodName() {} // Будет работать как обычная ассинхронная функция
}
const article1 = new Articles()
article1.methodName().then()

/*
Итог:
    1. Ассинхронные фукнции позволяют нам сократить количество чейнинга .then
    2. Обработку ошибок мы решаем либо try/catch внутри ассинхроной функции или после вызова фукнции


*/ 