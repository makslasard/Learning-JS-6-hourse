// Задача 1:

const str = 'Преобразовать строку в массив слов'

const stringToarray = (str) => {
    return str.split(' ')
}
stringToarray(str)

// Задача 2:
const subStr = 'Преобразовать строку в массив слов'

const deleteСharacters = (str, length) => {
    return str.slice(0, length)
}
deleteСharacters(subStr,  10)

// Задача 3:
const strOne = 'Преобразовать строку в массив слов'

const insertDash = (str) => {
    return str
        .toUpperCase()
        .replace(/ /g, '-') 
}
insertDash(strOne)

// Задача 4:
const strUpperOne = 'преобразовать строку в массив слов'

const upperOneFunc = (str) => {
    return str
        .charAt(0)
        .toUpperCase()
        + str.slice(1)        
}
upperOneFunc(strUpperOne)

// Задача 5:
const strCapitalize = 'преобразовать строку в массив слов'

const capitalize = (str) => {
    return str.replace(/(^|\s)\S/g, (str) => {return str.toUpperCase() })
}
capitalize(strCapitalize)

// Задача 6: ?
const upStr = 'КаЖдЫй ОхОтНиК'

const changeRegister = (str) => {
   
}
changeRegister(upStr)

