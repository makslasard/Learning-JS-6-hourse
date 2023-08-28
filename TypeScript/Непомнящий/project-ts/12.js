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

    let resultStr = result.join('').replace(/^\s+|\s+$|\s+(?=\s)/g, "").trimEnd()

    return resultStr
};
// decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")
decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb')

var uniqueMorseRepresentations = function (words) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    const map = new Map()

    // Декодер
    for (let i = 0; i < alphabet.length; i++) {
        map.set(morseCode[i], alphabet[i])
    }

    // Декодирование слов в морзе
    for (let i = 0; i < words.length; i++) {
        if (map.has(words[i])) {
            
        }
    }

    return map
};
uniqueMorseRepresentations('')