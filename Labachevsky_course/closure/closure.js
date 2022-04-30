/*
Замыкания в JavaScript
1. Функции как результат свой работы возвращают новые функции
2. Возвращаемые функции помнять контекст в котором были созданы


Вся область видмости(Scoupe) - он так или иначе идет в связке с возвращаемой фукнцией 
Любая функция предстовляет из себя функцию + объект. У нее есть свои методы, и свойства. И одно из скрытых свойств наызвается scoup
В этом скрытом свойстве как раз хранятся данные которые идут в связке

*/

// function createGreeating() {
//     const message = 'Hello World!'

//     function greeting(str) {
//         console.log(message, str)
//     }

//     return greeting
// }
// const helloWorld = createGreeating()
// console.log(typeof(helloWorld))

// helloWorld('Sten')
// helloWorld('Paulo')


// function addByX(num) {
//     return function(x) {
//         return num + x
//     }
// }

// const addByTwo = addByX(2)
// const addByFive = addByX(5)


function once(fn) {
    let hasBeenCalled = false
    let cachedResult

    return function(...args) {
        if (hasBeenCalled) return cachedResult

        hasBeenCalled = true
        cachedResult = fn(...args)

        return cachedResult
    }
}
const addByTwoOnce = once(num => num + 2)