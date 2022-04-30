class People {
    constructor(props) {
        this.name = props.name
        this.age = props.age
    }
    getFullName() {
        return `Имя человека ${this.name}: Возраст человека ${this.age} `
    }
}

class Worker extends People {
    constructor(props) {
        super(props);
        this.rate = props.rate // 150руб/час
        this.date = props.date // 26 дней
        this.workingTime = props.workingTime // Рабочих часов
    }
    getSalary() {
        return (this.rate * this.workingTime) * this.date
    }
}

const worker = new People({name: 'Alex', age: 25})
const myWorker = new Worker({rate: 150, date: 26, workingTime: 8})

console.log(myWorker)
myWorker.getFullName()
myWorker.getSalary()