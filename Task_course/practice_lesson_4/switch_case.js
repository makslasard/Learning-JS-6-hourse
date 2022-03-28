// Задача 1:
const num = '2'
let result = ''

switch (+num) {
    case 1:
        result = 'Зима'
        break;
    case 2:
        result = 'Весна'
        break;
    case 3:
        result = 'Лето'
        break;
    case 4:
        result = 'Осень'
        break;
    default:
        console.log('Введено неверное значение!')
}

console.log(result)