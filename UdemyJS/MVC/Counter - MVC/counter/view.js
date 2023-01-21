export default class View {
    constructor(value) {
        this.input = document.querySelector('#input')
        this.updateCounter(value)
    }

    elements = {
        btnMinus: document.querySelector('#btnMinus'),
        btnReset: document.querySelector('#btnReset'),
        btnPlus: document.querySelector('#btnPlus')
    }

    updateCounter(data) {
        this.input.value = data
    }
}
