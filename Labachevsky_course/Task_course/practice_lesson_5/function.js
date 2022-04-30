// Задание 1:
function squareNumber(n) {
    return n ** 2
}
squareNumber(5)

const squareNumberArrow = n => {
    return n ** 2
}
squareNumberArrow(5)

const num = Math.pow(5, 2) 
console.log(num)

// Задача 2: 

const sumNumber = (n, i) => {
    return n + i
}
sumNumber(5, 5)

// Задача 3: 

const calcNumber = (a, b, c) => {
    return (a - b) / c
}
calcNumber(10, 2, 4)

// Задача 4: Нужно switch case - ХЗ Короче.

const calcFunc = () => {

        const calculate = (min, max) => {
            return Math.floor(Math.random() * (max - min) + min)
        }

        switch (calculate) {
            case 0:
                return 'Введите число от 1 до 7!!'
            case 1:
                return 'Понедельник!'
            case 2:
                return 'Вторник!'
            case 3:
                return 'Среда!'
            case 4:
                return 'Четверг!'
            case 5:
                return 'Пятница!'
            case 6:
                return 'Суббота!'
            case 7:
                return 'Воскресенье!'
            default:
                return 'Введены неверные данные!!!'
        }
        calculate(1, 7)
        
}
calcFunc()

/*
if (calculate <= 0) {
            console.log('Введите число от 1 до 7!!')
        }else if(calculate === 1) {
            console.log('Понедельник!')
        }else if(calculate === 2) {
            console.log('Вторник!')
        }else if(calculate === 3) {
            console.log('Среда!')
        }else if(calculate === 4) {
            console.log('Четверг!')
        }else if(calculate === 5) {
            console.log('Пятница!')
        }else if(calculate === 6) {
            console.log('Суббота!')
        }else if(calculate === 7) {
            console.log('Воскресенье!')
        } else {
            console.log('Введены не правельные данные!!')
        }
*/

// Задача 5:

const func = (n, i) => {
    if (n === i) {
        console.log(true)
    } else {
        console.log(false)
    }
}
func(1, 3)

// Задача 6: 

const funcOne = (n, i) => {
    const num = n + i

    if (num > 10) {
        console.log(true)
    } else {
        console.log(false)
    }
}
funcOne(10, 3)

// Задача  7:

const negativeNumber = (n) => {
    if (n < 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
negativeNumber(1)


// Задача 8: 

const isNumberInRange = (n) => {
    if (n > 0 && n < 10) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isNumberInRange(1)

// Задача 9: 

const arrNum = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,]
const newArray = []

const arrOne = (arr) => {
    for (let i of arr) {
        if (i > 0 && i < 10) {
            newArray.push(i)
        }
        continue
    }
}
arrOne(arrNum)

console.log(newArray)

// Задача 10: 

const getDigitsSum = (n) => {
    const transformArr = n
        .toString()
        .split('')
        .map(Number)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    
    return transformArr

}
console.log(getDigitsSum(1299921131231236))
// split - можно использовать разделитель не строку а запятую

// Задача 11: Всего года сумма цифр которых равна 13

const arr = []

const calc = (n, arr) => {
    for (let i = 1; n <= 2020; i++) {
        if (i+i === 13) {
            arr.push[i]
        } else {
            console.log(false)
        }
    }
}
calc(getDigitsSum())


// Задча 12:

const isEven = (n) => {
    if (n / 2) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isEven(123456789)