/*
Реализация связного списка через class

O(1) - вставка / удаление в начало / конец / если  знаем место
O(n) - вставка в произвольное место, если не знаем место
O(n) - поиск

Особенности: 
    - Каждый взяты отдельный элемент списка занимает отдельное место в памяти
    - Связывание списка происходит за счет ссылок на следующий узел 


    Плюсы:
        - Можем мгновенно добавлять элементы в начало и конец списка

    Минус:
        - Чтобы получить какой-то элемент нам нужно с самого начала списка иттерироваться и сравнивать

    Массив подходит больше в случаях где не часто приходиться изменять размер массива
        и часто обращаться к данным 

    Список лучше подходит в случаях когда мы редко обращаемся к данным и часто его дополняем    

    План реализации:
    
        - Создаем 2 класса linkedlist и node
            node будет хранить в себе значение и ссылку на следующий узе

            class LinkedList {

            }

            class Node {
                constructor(value) {
                    this.value = value
                    this.next = null
                }
            }

            class Node будет использоваться внутри class linkedlist

            Мы создаем объект который будет хранить в себе значение value и ссылку на следующий элемент next 

        - В linkedlist создадим переменную this.size = 0 которая будет в себе хранить размер нашего списка
            и корневой элемент this.root = null это стартовая точка 

        - Реализуем метод который будет добавлять в список значение (Отдельный метод)



*/

// class LinkedList {
//     constructor() {
//         this.size = 0
//         this.root = null
//     }

//     add(value) {
//         if (this.size === 0) {
//             this.root = new Node(value)
//             this.size += 1
//             return true
//         }

//         let node = this.root

//         while (node.next) {
//             node = node.next
//         }

//         let newNode = new Node(value)
//         node.next = newNode
//         this.size += 1
//     }

//     getSize() {
//         return this.size
//     }

//     print() {
//         let result = []
//         let node = this.root
//         while (node) {
//             result.push(node.value)
//             node = node.next
//         }
//         console.log(result)
//     }
// }

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// let list = new LinkedList()

// list.add(1)
// list.add(7)
// list.add(3)
// list.add(4)
// list.add(5)
// list.add(1)
// list.add(9)

// list.print()




class LinkedList {
    constructor() {
        this.size = 0
        this.root = null
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value)
            this.size += 1
            return true
        }

        let node = this.root

        while (node.next) {
            node = node.next
        }

        let newNode = new Node(value)
        node.next = newNode
        this.size += 1
    }

    getSize() {
        return this.size
    }

    print() {
        let result = []
        let node = this.root
        while (node) {
            result.push(node.value)
            node = node.next
        }
        console.log(result)
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let list = new LinkedList()

list.add(1)
list.add(7)
list.add(3)
list.add(4)
list.add(5)
list.add(1)
list.add(9)
list.add(9)
list.add(9)
list.add(9)

list.print()




const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const binarySearch = (array, item) => {
    let start = 0
    let end = array.length
    let middle
    let found = false
    let position = -1

    while (found === true && start === end) {
        middle = Math.floor((start - end) / 2)

        if (array[middle] === item) {
            found = true
            position = array[middle]
            return position
        }

        if (item < array[middle]) {
            end = array[middle] - 1
        } else {
            start = array[middle] + 1
        }
    }
}
binarySearch(arr, 12)
































