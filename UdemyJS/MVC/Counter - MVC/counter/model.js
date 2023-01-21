export default class Model {
    constructor() {
        this.counter = 0
        this.loadFromLocalStorage()
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('counter')
        if (data) this.counter = JSON.parse(data)
    }

    saveToLocalStorage() {
        localStorage.setItem('counter', JSON.stringify(this.counter));
    }

    increase() {
        ++this.counter;
        this.saveToLocalStorage();
    }

    decrease() {
        --this.counter;
        this.saveToLocalStorage();
    }

    reset() {
        this.counter = 0;
        this.saveToLocalStorage();
    }
}
