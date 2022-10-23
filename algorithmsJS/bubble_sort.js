/*
Сортировка пузырьком. Bubble_sort
    - один из самых известных алгоритмов сортировки, и один из самых НЕ эффективных

Принцип:
    - Мы также в двойном цикле пробегаемся по всему массиву и сравниваем по парно лежащие элементы

Если следующий элемент массива меньше предыдущих мы меняем их местами. И получаеться своего рода всплытие
Самый большой элемент с каждой иттерацией потихоньку всплывает на верх. 

Именно поэтому сортировка называеться пузырьковой

Програмная реализация: 

    1. Создаем функцию bubbleSort и как параметр принимает массив
    2. Создаем 2 вложенных цикла
Оба цикла будут пробигаться по всей длинне массива как внешний так и внутренний

    3. Внутри вложенного цикла мы делаем проверку
Если элемент текущей иттерации большое чем тот который идет после него, то эти элементы
    необходимо поменять местами

    4. Меняем элементы также как в предыдущем алгоритме сортировки
Создаем временную переменную. В нее кладем элемент текущей иттерации
Потом в него помещаем элемент который идет следующим. За место того который шел следующим помещаем
    то что сохранили во временной переменной

    5. Проинкрементируем счетчик чтобы посмотреть сколько будет иттераций было выполнено
И выведем в логи результат выполнения этой функции

array[i + 1] - элемент текущей иттерации

*/

const arr = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7, -1, -5, 23, 6, 2,35,6,3,32] 
let count = 0

function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count+=1
        }
    }
    return array
}

console.log('count ', count)
console.log('length ', arr.length) // O(n*n) - алгоритм менее эффективный
console.log(bubbleSort(arr))