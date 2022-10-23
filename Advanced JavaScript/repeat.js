'use strict'
// Работа с prototype

// Расширение prototype
String.prototype.strConsl = () => {
    console.log('Расширение прототипа')
}
console.log(String.prototype)

// Наследование
const person = {
    name: 'Sergey',
    age: 25,
    work: 'Frontend',
    sayHello() {
        console.log(`Метод объекта ${this.name}`)
    }
}

const personAlex = Object.create(person)
const callFunc = personAlex.sayHello()
console.log(personAlex)

// Контекст .bind(), .apply(), .call()

const personOne = {
    name: 'Sergey',
    age: 25,
    work: 'Frontend',
    sayHello() {
        console.log(`Метод объекта ${this.name}`)
    },
    sayHey() {
        console.log(`Функция sayHey отработала...`)
    }

}

const obj = {
    name: 'Alex'
}
const prot = personOne.sayHello.bind(obj)()
console.log()

// Контекст с передачей параметров

const personTwo = {
    name: 'Oleg',
    age: 25,
    work: 'Frontend',
    sayHello(a, b) {
        console.log(`Метод объекта ${this.name}`)
        console.log(`Возраст человек ${a}`)
        console.log(`Работа человека ${b}`)
    }
}
const objOne = personOne.sayHey.bind(personTwo, 25, 'DevOps')
console.log(personTwo.sayHello())

const promise = new Promise((resolve, reject) => {
    const response = fetch('yandex.ru')

    response.then(

    ).then(

    )
})

