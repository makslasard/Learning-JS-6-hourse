/*
RTK Query - это часть RTK которая предостовляет решения для обработки запроса на сервер,
    кэширование, управление состоянием серверных данных

    RTK Query позволяет избежать написания большого кол-ва кода, дает готовые хуки для 
        того чтобы делать запросы к серверу

    export type RootState = ReturnType<typeof store.getState>
    
    Типизация redux store чтобы были подсказки и было понимание что находится в глобальном 
        состоянии


    createAsyncThunk 
        - может использоваться для любых ассинхронных операций (Promise, WebSocket)
        - ручная обработка состояний загрузки, ошибки, успеха

    RTK Query
        - автоматически генерирует actions, reducers, hooks 
        - встроенные инструменты для кэширования и обновления данных
        - включает интеграцию с React
    

    export const getUserById = createAsyncThunk('users/by-id', async (userId, thunkApi) => {
        const responce = await fetchUserById(userId)

        return responce
    })

        1. Первым аргументом мы описываем как будет называться Thunk
        2. Вторым аргументом принимает в себя ассинхронную функцию 
            1 в аргументах указываем что будем получать в action в качестве аргумента
            2 аргументом передаем thunkApi
        3. Внутри выполняем запрос

        Наша функция описана теперь нам нужно описать ExtraReducer


    Redux Middleware
        - это функция которая получает данные после отправки экшена. Далее она может их проверить
            или сделать что-то с ними, а затем передать дальше по цепочке в редюсер

            Благодаря middleware имееться замечательная возможность производить нужные 
                промежуточные действия в момент, когда пользователь взаимойствует с интерфейсом

    План типизации проекта:
        1. Создаем папку types
        2. Внутри папки создаем типизацию для компонента
        3. 



*/









/*
1. Отсчет с 1, а не с 0
2. index числ, value значение числа
3. Понять какое число отличается по четности от других

*/

const iqTest = (stringNumbers) => {
    const separatorString = stringNumbers.replace(/ /g, ',')

    const evenInteger = [] // 2, 4, 8, 10
    const addInteger = [] // 7

    let number = ''

    debugger

    for (let i = 0; i < separatorString.length; i++) {
        if (separatorString[i] % 2 === 0) {
            evenInteger.push(separatorString[i])
            number = separatorString[i]
        } else {
            addInteger.push(separatorString[i])
            number = separatorString[i]
        }
    }

    const doubleArray = [...evenInteger, ...addInteger].sort()

    return doubleArray.indexOf(number)
}
iqTest("2 4 7 8 10")


/*

indexOf(item => item % 2 === 0)

cosnt evenInteger = [] // 2, 4, 8, 10
const addInteger = [] // 7

const number = ''

for (let i = 0; i < separatorString.length; i++) {
    if(separatorString[i] % 2 === 0) {
        evenInteger.push(separatorString[i])
        number = separatorString[i]
    } else {
        addInteger.push(separatorString[i])
        number = separatorString[i]
    }
}

const doubleArray = [...eventInteger, ...addInteger].sort()

retrun doubleArray.indexOf(number)



const separatorString = stringNumbers.replace(/ /g, ',').indexOf(item => item % 2 !== 0)


const iqTest = (stringNumbers) => {
    const separatorString = stringNumbers.replace(/ /g, ',')
    const arrayNumbers = [...separatorString]

    // for () { }
    console.log(arrayNumbers)
    // return `${index}, ${value} `
}
iqTest("2 4 7 8 10")
*/

// Задача: Понять что все скобки корректно расставлены

function validateparenthesis(text) {
    const textArray = [...text]

    const filterLeft = textArray.filter(item => item === '(')
    const filterRight = textArray.filter(item => item === ')')

    if (textArray.length === 2) return false

    if (filterLeft.length === filterRight.length) {
        return true
    } else {
        return false
    }
}

// validateparenthesis('(((())()))')
// validateparenthesis('())')
validateparenthesis(')(')


// 



function count(input) {
    
}

//   test(count([]), 0)
//   test(count([[1, 5], [5, 10]]), 1)
//   test(count([[1, 5], [0, 1], [4, 5]]), 2)
//   test(count([[1, 10], [5, 6], [2, 3], [7, 8]]), 2)
count([[1, 2], [1, 10], [4, 9], [8, 15], [5, 6], [8, 16]])