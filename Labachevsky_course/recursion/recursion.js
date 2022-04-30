/*
Что такое рекурсия? 
    - когда функция вызывает сама себя

2 состовляющих:
    - базовое условие
    - правило как мы будем двигаться по рекурсии

*/
let count = 0

function recurse() {
    if (count === 5) return 'done'

    count++
    return recurse()
}
recurse()