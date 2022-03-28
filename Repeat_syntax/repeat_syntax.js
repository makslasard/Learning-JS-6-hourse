/*
1. Learning JS 6 hourse

Методы массивов:

Array.push() - добавляет элемент в конец массива
Array.pop() - удаляет последний элемент массива
Array.shift() - удаляет элемент из начала массива
Array.unshift() - добавляет элемент в начало массива
Array.slice(1, 2) - удаляет элементы их массива. 1 аргумент - с какой позиции начать, 2 - аргумент сколько элементов удалить

Цикл for: 

for (let i = 0; i <= 10; i++) {
    ..........
}

Более сложная вариация цикла с несколькими условиями через запятую

for (let i = 0, let n = 0; i < 10; i++, n++) {
    ...........
}

Вариант прохождения по массиву

const arr = [1, 2, 3, 4, 5]

for (let i = 0; i <= arr.length; i++) {
    .........
}

for of:

const arr = [1, 2, 3, 4, 5]

for (let i of arr) {
    ........
}

const objOne = {
    name: 'Alex',
    age: 25
}

for (let i in objOne) {
    console.log(i)
}


*/ 

const objOne = {
    name: 'Alex',
    age: 25
}

for (let i in objOne) {
    console.log(objOne[i])
}