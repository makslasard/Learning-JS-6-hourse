// const upStr = 'КаЖдЫй ОхОтНиК'

// const changeRegister = (str) => {
//    const newArr = []
//    const convertToArray = str.split('') 

//    for (const i of convertToArray) {
//        if (convertToArray[i] === convertToArray[i].toUpperCase()) {
//             convertToArray[i].push(newArr.toLowerCase())
//        } else {
//             convertToArray[i]
//        }
//    }
//    return newArr
// }
// changeRegister(upStr)

// 1. Замена каждого символа на противоположный
// 2. Найти каждую букву

const upStr = 'КаЖдЫй ОхОтНиК'

const changeRegister = (str) => {
    return str
        .split('')
        .map((item) => {
            if (item === item.toUpperCase()) {
                item.toLowerCase()
            } else {
                item.toUpperCase()
            }
        })
        .join()
}
changeRegister(upStr)