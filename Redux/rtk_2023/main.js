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



*/









/*
1. Отсчет с 1, а не с 0
2. index числ, value значение числа
3. Понять какое число отличается по четности от других

*/

const iqTest = (stringNumbers) => {
    const arrayNumbers = [...stringNumbers].filter((item) => item !== ' ').map(Number)

    const evenIntegers = []
    const oddIntegers = []

    for (let i = 0; i < arrayNumbers.length; i++) {
        if (arrayNumbers[i] / 2 === 0) {
            evenIntegers.push(arrayNumbers[i])
        } else {
            oddIntegers.push(arrayNumbers[i])
        }
    }

    console.log(evenIntegers, oddIntegers)
    // return `${index}, ${value} `
}
iqTest("2 4 7 8 10")


/*

const iqTest = (stringNumbers) => {
    const separatorString = stringNumbers.replace(/ /g, ',')
    const arrayNumbers = [...separatorString]

    // for () { }
    console.log(arrayNumbers)
    // return `${index}, ${value} `
}
iqTest("2 4 7 8 10")
*/