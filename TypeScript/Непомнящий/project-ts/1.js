var interpret = function (command) {
    const result = []
    const map = new Map()

    for (let i = 0; i < command.length; i++) {
        map.set('G', 'G')
        map.set('()', 'o')
        map.set('(al)', 'al')
    }

    for (let [key, value] of map) {
        if (key === 'G') {
            result.push(value)
        } else if (key === '()') {
            result.push(value)
        } else if (key === '(al)') {
            result.push(value)
        }
    }

    return result.join('')
};

interpret('G()(al)')

// decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")

// var decodeMessage = function (key, message) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     const removeSpaceKey = key.replaceAll(' ', '')
//     const map = new Map()
//     const uniqueKey = []
//     const result = []

//     // Уникальные значения
//     for (let i = 0; i < removeSpaceKey.length; i++) {
//         if (!uniqueKey.includes(removeSpaceKey[i])) {
//             uniqueKey.push(removeSpaceKey[i])
//         }
//     }
//     // Добавление в Map (Словарь)
//     for (let i = 0; i < alphabet.length; i++) {
//         map.set(uniqueKey[i], alphabet[i])
//     }
//     // Декодирование
//     for (let i = 0; i < message.length; i++) {
//         if (map.has(message[i])) {
//             result.push(map.get(message[i]))
//         }
//     }

//     return result
// };
// decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")

// var decodeMessage = function (key, message) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     const removeSpaceKey = key.replaceAll(' ', '')
//     const map = new Map()
//     const uniqueKey = []
//     const spaces = []
//     const result = []

//     // Уникальные значения
//     for (let i = 0; i < removeSpaceKey.length; i++) {
//         if (!uniqueKey.includes(removeSpaceKey[i])) {
//             uniqueKey.push(removeSpaceKey[i])
//         }
//     }
//     // Добавление в Map (Словарь)
//     for (let i = 0; i < alphabet.length; i++) {
//         map.set(uniqueKey[i], alphabet[i])
//     }
//     // Декодирование
//     for (let i = 0; i < message.length; i++) {
//         if (map.has(message[i])) {
//             result.push(map.get(message[i]))
//         }
//     }
//     // Добавление пробелов
//     for (let i = 0; i < message.length; i++) {
//         if (message[i] === ' ') {
//             let messsageArray = message.split('')
//             let indexSpace = messsageArray.indexOf(message[i])
//             spaces.push(indexSpace)
//         }
//     }

//     return spaces
// };
// decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")

// var decodeMessage = function (key, message) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     const removeSpaceKey = key.replaceAll(' ', '')
//     const map = new Map()
//     const uniqueKey = []
//     const indexSpaces = []

//     const result = []

//     // Уникальные значения
//     for (let i = 0; i < removeSpaceKey.length; i++) {
//         if (!uniqueKey.includes(removeSpaceKey[i])) {
//             uniqueKey.push(removeSpaceKey[i])
//         }
//     }
//     // Добавление в Map (Словарь)
//     for (let i = 0; i < alphabet.length; i++) {
//         map.set(uniqueKey[i], alphabet[i])
//     }
//     // Декодирование
//     for (let i = 0; i < message.length; i++) {
//         if (map.has(message[i])) {
//             result.push(map.get(message[i]))
//         }
//     }
//     // Поиск и добавление пробелов
//     let lastIndex = - 1

//     while ((lastIndex = message.indexOf(' ', lastIndex + 1)) !== -1) {
//         indexSpaces.push(lastIndex)
//     }

//     // let addSpace = [result.join('').slice(0, indexSpaces[0]), ' ', result.join('').slice(indexSpaces[1])].join('')
//     // Вроде бы делаеться через split()
//     return addSpace
// };
// decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")

var decodeMessage = function (key, message) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const removeSpaceKey = key.replaceAll(' ', '')
    const map = new Map()
    const uniqueKey = []
    const indexSpaces = []
    const space = []

    const result = []

    // Уникальные значения
    for (let i = 0; i < removeSpaceKey.length; i++) {
        if (!uniqueKey.includes(removeSpaceKey[i])) {
            uniqueKey.push(removeSpaceKey[i])
        }
    }
    // Добавление в Map (Словарь)
    for (let i = 0; i < alphabet.length; i++) {
        map.set(uniqueKey[i], alphabet[i])
    }
    // Декодирование
    for (let i = 0; i < message.length; i++) {
        if (map.has(message[i])) {
            result.push(map.get(message[i]))
        }
    }
    // Добавление в строку пробелов
    let lastIndex = - 1

    while ((lastIndex = message.indexOf(' ', lastIndex + 1)) !== -1) {
        indexSpaces.push(lastIndex)
    }

    for (let i = 0; i < message.length; i++) {
        result.splice(indexSpaces[i], 0, ' ')
    }

    let resultStr = result.replace(/^\s+|\s+$|\s+(?=\s)/g, "")

    return resultStr
};
// decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")
decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb')