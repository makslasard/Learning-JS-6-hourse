//Приложение 2: CommonJS Modules

// const a = require('./app.js');
// console.log('Загружено characters.js')

/*let characters = [
    { name: 'Фродо', hasRing: false },
    { name: 'Бильбо', hasRing: false },
];

function stealRing(characters, owner) {
    return characters.map(c => { // Функция должна возвращать модифицированный объект , а не модифицировать объект внутри
        if(c.name == owner){
            c.hasRing = true
        } else {
            c.hasRing = false
        }
    })
}
*/
 /* module.exports = function log() {
    console.log('log'); 
 };*/

//Приложение 3: ES Modules

export const characters = [
    'Фродо',
    'Бильбо'
];

export function greet(character) {
    console.log('Поздравляю ' + character);
}