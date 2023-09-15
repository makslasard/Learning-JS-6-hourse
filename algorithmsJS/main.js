// var countGoodSubstrings = function (s) {
//     const result = []
//     let count = 0

//     for (let i = 0; i < s.length; i++) {
//         result.push(s.substring(i, i + 3))
//     }

//     debugger

//     for (let i = 0; i < result.length; i++) {
//         const set = new Set(...result)

//         if (set.size === 3) {
//             count++
//         }
//     }

//     return count
// };
// countGoodSubstrings("aababcabc")

// substing
// array.splice(array.length - 2, 2);

class LinkedList {
    constructor() {
        this.size = 0
        this.root = null

        add(value) {
            
        }

        getSize() {
            return this.size
        }

        print() {

        }
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}