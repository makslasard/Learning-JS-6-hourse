/*
- инициализация

##Фазы
- таймеры
- pendings callback
- idle, prepare
- poll
- check
- close callback

- проверка на окончание

Пример 1:
- Сначало наш обработчик просмотрит console.log. Залогирует
- Затем дойдет до setTimeout(). Запланирует наш timeout
- После дойдет до console.log() и выполнит его

Таймер запланирован на 0 секунд. Все равно он будет выполнен после того как мы завершим первичный обход
Нашего синхронного кода, зарегистрируем все callback, timeout
В результате выведем то, что у нас есть синхронно

*/

// Пример 1:
console.log('Init')

setTimeout(() => {
    console.log(performance.now(), 'Timer 0 seconds!')
}, 0)

console.log('Final')