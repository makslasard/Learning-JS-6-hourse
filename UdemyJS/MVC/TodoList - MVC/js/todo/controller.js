import Model from "./model.js";

const model = new Model()


model.addTask('Задача 5')
model.addTask('Задача 6')

model.doneTask(model.task[1])
console.log(model)

model.removeTask(model.task[1])



function reverseLetter(str) {
    const reverse = str.split('').reverse().join('')

    return reverse.replace(/[0-9]/g, '')
}
reverseLetter('krishan212')

function reverseLetter(str) {
    const reverse = str.split('').reverse().join('').replace(/[0-9!-@]/g, '')

}
reverseLetter('krishan21?2')

function reverseLetter(str) {
    const reverse = str.split('').reverse().join('').replace(/[0-9!-@#$^_:,.]/g, '')
    return reverse
}
reverseLetter('mnjlhyic,i7xr |{itf$.oyjx^uw|')

function reverseLetter(str) {
    const reverse = str.split('').reverse().join('').replace(/[^+\w]/g, '').replace(/[0-9]/)
    return reverse
}
reverseLetter('mnjlhyic,i7xr |{itf$.oyjx^uw|')

function reverseLetter(str) {
    const reverse = str.split('').reverse().join('').replace(/[0-9]/).replace(/[^+\w]/g, '')
    return reverse
}
reverseLetter('mnjlhyic,i7xr |{itf$.oyjx^uw|')

function reverseLetter(str) {
    const reverse = str.split('').reverse().join('').replace(/[^a-z]/g, '')
    return reverse
}
reverseLetter('mnjlhyic,i7xr |{itf$.oyjx^uw|')
