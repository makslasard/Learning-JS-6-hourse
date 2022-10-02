/*
Методы Promise и когда их применять
    - Все есть 5 методов Promise
Использование методов происходит на прямую. Без конструктора. Promise.all()

Метод Promise.all(iterable) - ожидает массив который мы можем итерировать. 
Как результат работы ожидается исполнение этих Promise которые будут переданы в этот метод 
Принимает некий массив. В качестве элементов массива должны быть сущности которые будут возвращать Promise

Метод будет ожидать когда все эти Promise выполнятся, либо какой-то из них не выполниться. Тогда у нас сам Promise.all будет откланен
Также обрабатывается через then, catch, finally
На выходе как response мы получаем массив с вложенными массивами. В которых находятся наши ответы Promise

Когда нам нужно разом получить пачку данных, а потом уже по какой-то логике их связать, отправить в состояние и что-то 
конкретное отрисовать. Отменяет весь Promise.all если хотябы один Promise откланен


Метод Promise.allSettled(iterable) - по сути делает тоже самое, отличие что он не отклоняет весь Promise.all если,
хотябы один Promise будет откланен. Результат немного отличается, мы получаем массив объектов


Метод Promise.race() - данном случае он ожидает когда первый из Promise выполниться, либо будет откланен
Как результат получим одно конкретное значение, остальные будут проигнорированы. 
Получим Promise который быстрей ответил


*/
async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    return await response.json()
}

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    return await response.json()
}

async function getComments() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')

    return await response.json()
}

Promise.all([getPosts(), getUsers(), getComments()]).then(console.log)
Promise.allSettled([getPosts(), getUsers(), getComments()]).then(console.log)
Promise.race([getPosts(), getUsers(), getComments()]).then(console.log)

