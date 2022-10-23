fs = require('fs');

const data = fs.readFileSync('./data.txt');
// Блокирует поток
console.log(data.toString());

/*
CommonJS Modules
    - синтаксис подключения модулей NodeJS














*/
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    data.forEach((i) => {
        if (i.typeof === Number) {
            i * 2
        }

        if (i.typeof === String) {
            i + ' - done'
        }
    })

    // Не трогаем
    return data;
}

async function main() {
    try {
        const { characters, greet } = await import('./characters.mjs')

        for (const c of characters) {
            greet(c)
        }
    } catch (e) {
        console.log('Ошибка')
    }
}
main()