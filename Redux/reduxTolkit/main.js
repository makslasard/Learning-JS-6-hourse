/*
Redux Tolkit (RTK): Современная работа с Redux
    - это возможность использовать теже самые возможности что и с Redux только по современному и удобней

    1. Альтернативный рекомендованный подход использования Redux 
        - проще конфигурация store
        - меньше дополнительных зависимостей которые нужно устанавливать вручную
        - меньше кода для описания Redux логики 
    2. Понятие слайсов (срезов)
        - опциональная, но крайне рекомендуемая
    3. Альтернативная структрура приложения


Сущности в Redux Tolkit:

    1. Метод createAction() - позволяет нам создавать actionCreator в таком варианте где не требуются
        отдельные константы. 

    2. Метод createReducer() - метод для создания reducer. Опциональный
        Предоставляют другой подход написания reducers не используя switch/case 

        Идет с дополнительной библиотекой которая называется immer
        Immer позволяет писать иммутабельный код, но писать как будто в мутабельном стиле

        В store мы копировали данные, а не мутировали их

    3. Метод createSlice() - внутри состоит из createAction() и createReducer()
        Позволяет не использовать эти 2 метода, но внутри все равно будет использовать 
        Но внутри он все равно будет использовать всю мощь которую предоставляют эти 2 метода

    4. Метод configureStore() - конфигурация store


Метод createAction():
    import {createAction} from '@reduxjs/toolkit'

    - Дополнительно устанавливать Redux не нужно он идет из коробки как зависимость

    Пример использования:
    1. Принимает просто строку: const addTodo = createAction('ADD_TODO', () => ({})) которая соответствует action type

    console.log(addTodo) - f actionCreator()
    console.log(addTodo()) - {type: ADD_TODO, payload: undefined}
    console.log(addTodo('learn js')) - {type: ADD_TODO, payload: 'learn js'}

    Подход RTK подразумевает что мы всегда работаем с ключом payload
    Все данные которые мы хотим передать по умолчанию попадают в payload

    2. Метод может принимать 2 параметра
        2 параметр предстовляет собой фунцию подготовки нашего объекта action
        Эта функция в качестве параметра принимает payload который мы передаем

        const addTodo = createAction('@@todos/ADD_TODO', () => ({
            payload: {
                title,
                id: nanoid, // доп библиотека RTK
                compleated: false
            }
        })) 

        И передавать как ...action.payload

        Т.к reducer должен быть чистым, то мы не можем делать никакие случайные значения
        Поэтому мы передаем просто id которые ранее был расчитан в createAction в функции подготовки
        Библиотека nanoid позволит сформировать нам id - автогенерация

        Все данные которые приходят в reducer должны уже обработаны
        Обработка происходит в payload - createAction

        const removeTodo = createAction('@@todos/REMOVE_TODO')
        const toggleTodo = createAction('@@todos/TOGGLE_TODO')

        На случай сочетания case: addTodo.toString()

Метод createReducer():
        - метод для создания reducer

        const todos = createReducer([], (builder) => {
            builder
                .addCase(addTodo, (state, action) => {
                    state.push(action.payload)
                })
                .addCase(removeTodo, (state, action) => {
                    const id = action.payload
                    const todo = state.find(todo => todo.id === id)
                    todo.completed = !todo.completed // инверсия, от обратного
                })
                .addCase(toggleTodo, (state, action) => {
                    const id = action.payload
                })
        })

        1. Параметром принимает default value

        2. Параметром может быть объект или некоторый builder
            Которым redux нас обеспечивает самостоятельно
            И на базе этого builder мы создаем определенный случай

            builder.addCase() - кейсов может быть любое кол-во
            Сам case представляет собой некий action

            Без default value 
            Внутри addCase функция описываеться в мутабельном стиле

        3. Кажется что мы мутируем данные. 
            Но под капотом используется тот самый immer - которая создает так называемый прокси
            Прокси - современный JS объект. Перехватывает события которые мы делаем 
            И дополнительно обеспечивает нам иммутабельность

!!! Важно: 
        - Когда мы мутируем state мы можем state не возвращать, под капотом все сделает immer
        
        - Если у нас создается новая структрура например через метод filter, то нам 
            нужно обезательно его вернуть 
            
            return state.filter(todo => todo.id !== id)


        1. Если конструкция в action можно написать в одну строку с мутирующим методом, могут 
            возникнуть проблемы т.к если писать в одну строку будет так называемый не явный return

            - Можно использовать оператор void чтобы явно ничего не возвращать
            - Или использовать фигурные скобки и обернуть выражение после =>

        2. Альтернативный синтаксис без функции builder
        const todos = createReducer([], {
            [addTodo]: (state, action) => {
                state.push(action.payload)
            },

            [removeTodo]: (state, action) => {
                const id = action.payload
                const todo = state.find(todo => todo.id === id)
                todo.completed = !todo.completed // инверсия, от обратного
            }
        })

        Первый вариант записи более выгодный с точки зрения Redux и предоставления подсказок редактором


        Метод createSlice():
            - использование слайсов (срезы) подразумевает что мы не заходим создавать отдельно actions и 
                отдельно reducers

        const todoSlice = createSlice({
            name: '@@todos', - некоторое доменное имя
            initialState: [],
            reducers: {
                addTodo: (state, action) => {},
                removeTodo: (state, action) => {},
                toggleTodo: (state, action) => {}
            },
            extraReducers: (builder) => {
                builder.addCase()
            }
        })

        1. Принимает параметром объект с настройками
            У него есть несколько обязательных полей их 4

        name - прописываеться в createAction вместо строки
        initialState - может быть внешняя переменная или описанно внутри
        reducers - набор reducers которые описываются на прямую

        extraReducers - экстра reducers. дополнительные reducers которые не попадают в namespace
            т.е обрабатываются вне домена @@todos

        В todos находятся reducers которые связаны с todos, extraReducers это дополнительные 
            reducers которые выполняют доп работу при этом на прямую не связаны с доменом name

        createSlice() Возвращает:
            1. name - и его можно где-то использовать
            2. Возвращает сам reducer

    export const store = createStore(todoSlice.reducer)        

    export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions
        - автоматически создаст actions с всеми названиями {}

        const todoSlice = createSlice({
            name: '@@todos', - некоторое доменное имя
            initialState: [],
            reducer: {
                addTodo: {
                    reducer: (state, action) => {
                        state.push(action.payload)
                    },
                    prepare: (title) => ({
                        payload: {
                            title,
                            id: nanoid, // доп библиотека RTK
                            compleated: false
                            }
                    })
                },
                removeTodo: (state, action) => {
                    const id = action.payload
                    return state.filter(todo => todo.id !== id)
                },
                toggleTodo: (state, action) => {
                    const id = action.payload
                    const todo = state.find(todo => todo.id === id)
                    todo.completed = !todo.completed
                }
            },
            extraReducers: (builder) => {
                builder.addCase()
            }
        })

        reducer может быть как функцией так и объектом
        Если нам нужна какая-то предподготовка мы можем использовать prepare

        Эти предподготовленные данные попадут в action.payload 

        Теперь нам не нужно создавать отдельные файлы достаточно делать слайсы


    Метод configureStore():
        - теперь мы не используем createStore()

        1. export const store = configureStore({
            reducer: todoSlice.reducer
        }) 

        - Теперь мы не передаем 3 параметра, а передаем просто объект 
            И этот объект в любом парадке мы настраиваем 

        - Единственное обязательное поле это reducer

        2. reducer: {
            todos: todoSlice.reducer
            },
            devTools: true
        

        По типу combineReducer. Теперь на не нужно писать комбайн функцию, все делаеться под капотом
        Плюсы во втором подходе, что мы можем подключать devTools

        Если devTools нам нужен ставим true


        Добавление middleware: npm i redux-logger
        
        import loggger from 'redux-logger'

        export const store = configureStore({
            reducer: todoSlice.reducer,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(logger),
            preloaderState: [{id: 1, title: 'Redux', compleated: true}]
        })

        У нас есть поле middleware если мы его не используем, то у нас подключаются middleware по умолчанию
        Принимает параметр getDefaultMiddleware

        RTK подразумевает что у него есть default middleware (по умолчанию)
        Если нужны еще middleware нужно добавить через concat нужные middleware

        middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(logger)

        Middleware представляет собой массив функций, поэтому мы сначало получаем исходный
            массив, а потом пополняем

        preloaderState: - предзагруженный state по default
        Элементы которые будут отображение до загрузки данных

        enhencer - дополнительные библиотеки которые складываются в массив


        extraReducers:
            - 

        export const resetDefault = createAction('root/reset-app')

        const todosSlice = createSlice({
            name: root/reset-app,
            initialState: [],
            reducers:
        })








































































































*/