// Задача 1:
const day = 41;

if (day <= 10) {
    console.log('Первая декада!')
} else if (day >= 11 && day <= 20) {
    console.log('Вторая декада!')
} else if (day >= 21 && day <= 31) {
    console.log('Третья декада!')
} else {
    console.log('Введено не правильное чило!')
}

// Задача 2:

const month = 6

if (month >= 1 && month <= 3) {
    console.log('Наступила Зима!')
} else if (month >= 4 && month <= 6) {
    console.log('Наступила Весна!')
} else if (month >= 7 && month <= 9) {
    console.log('Наступило Лето!') 
} else if (month >= 10 && month <=12) {
    console.log('Наступила Осень!')
} else {
    console.log('Введено не верное значение! Введите число от 1 до 12!')
}

// Задача 3:

const str = 'abcde'

if (str[1] === 'b') {
    console.log('Все верно!')
} else {
    console.log('Нерно!')
}

// Задача 4: Нерешена

const num = '12345'

if (num[1] === '2') {
    console.log('Все верно!')
} else {
    console.log('Нерно!')
}

// Задача 5: Решил с подсказкой

const strNum = '123' 

console.log(Number(strNum[0]) + Number(strNum[1]) + Number(strNum[2]))

// Задача 6: Решил с подсказкой

const numOne = '123456'

const calcNumOne = Number(numOne[0]) + Number(numOne[1]) + Number(numOne[2])
const calcNumTwo = Number(numOne[0]) + Number(numOne[1]) + Number(numOne[2])

if (calcNumOne === calcNumTwo) {
    console.log('Сумма первых 3 чисел больше чем сумма вторых 3 чисел!')
} else {
    console.log('Сумма первых 3 чисел больше чем сумма вторых 3 чисел!')
}