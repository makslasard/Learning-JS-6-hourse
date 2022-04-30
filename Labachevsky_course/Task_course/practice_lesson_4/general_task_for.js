// Задача 1: 
const array = [2, 5, 9, 15, 0, 4]

for (let i of array) {
    if (i >= 3 && i <= 10) {
        console.log(i)
    } else {
        continue
    }
}

// Задача 2: 

const arrayOne = [1, -2, 3, 4, -5]
let result = 0

for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] > 0) {
        result += arrayOne[i]
    } continue
}
console.log(result)

// Задача 3:

const arrayTwo = [1, 2, 5, 9, 4, 13, 4, 10]

for (let i of arrayTwo) {
    if (i === 4) {
        console.log('Есть!')
    }
}

// Задача 4: Нерешена

const arrayThree = [10, 20, 30, 50, 235, 3000]
let res = 0

for (let i = 0; i < arrayThree.length; i++) {
    if (i[0] === 1 || i[0] === 2 || i[0] === 5) {
        
    }
}

// Задача 5: Нерешена
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let str = ''

for (let i = 0; i < arr.length; i++) {
    console.log('-' + arr[i] + '-')
}

// Задача 6: 

const arrDayWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

for (let i = 0; i < arrDayWeek.length; i++) {
    if (arrDayWeek === 'Суббота' || arrDayWeek === 'Воскресенье') {
        console.log('<b>' + arrDayWeek[i] + '<b>')
    } else {
        console.log(arrDayWeek[i])
    }
}