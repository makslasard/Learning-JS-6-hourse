/*
Redux - обучение на Stepik

Основная идея: 
    - Что без Redux наши компоненты могут как-то взаимодействовать, но они взаимодействуют по цепочке

И если мы создаем много компонентов с определенным уровнем вложенности, то часто бывает что через props пробрасываеться информация 
    от компонента к компоненту при этом она может не использоваться по пути - такая проблема называеться Props Drilling

Т.е просверливать props - ми сквозь компоненты где они не нужны. Это не удобно
Если например props создан на уровне App и нужно его переименовать на большой вложенности, то придеться переименовывать props по всей цепочке

    - С Redux все данные на уровне приложения который должны глубоко опускаться и использоваться. Они выносяться на уровень некоторого общего хранилища
Которое называется store. И с store может взаимодействовать абсолютно любой компонент без необходимости пробрасывать что-то через props

Она не отменяет props как таковые, мы продалжаем ими пользоваться там где это уместно
Но там где цепочка может быть сложной мы храним информацию в store и получаем его на прямую с любого уровня и любого компонента


Варианты state managment для React: 

    - Context встроеный в React инструмент
Инструмент который позволяет из некоторого контекста получить нужную информацию. При этом мы не устанавливаем никаких дополнительных библиотек,
    наш итоговый bundle не утяжеляется. Используеться на маленьких иногда на средних проектах

    - recoil 
С точки зрения веса самое лайтовое. Делает по сути тоже самое только по своему

    - MobX 
Обычно любят разработчики которые предпочитают ООП

    - Xstate

    - Эффектор от Российских разработчиков
Предпологает более декларативный подход

Три принципа Redux:

    - У нашего проекта должен быть единый источник правды
Предпологаеться что у нас есть некий глобальный state (глобальное хранилище). Информация о котором потребляется нашими компонентами и при этом
    не дублируеться в самих компонентах. Нельзя чтобы в redux и в компоненте были разные данные 

Вся та информация которая должна разделяться между разными компонентами она в большинстве своем будет храниться в redux

    - Наш state (объект store) он дается только для чтения
Любой компонент потребляет информцию которая есть в объекте store, читает её, но не может ее модифицировать на прямую
Перезаписывать мы будем через специальные сущности которые называются actions
Только через actions мы можем как-то изменить наше состояние приложения. Логику action мы будем писать не в самих компонентах
    в компонентах мы будем вызывать эти события

    - Обрабатываются actions в такой сущности как reducer
Это по сути просто фукнции. Но эти функции должны быть чистыми т.е ведут себя предсказуемо. Выдавать одинаковый результат при одинаковых входных данных
Чистые функции не имеют side effects это значит что полученные объекты будь-то state, или что-то еще они их не мутируют, они их только читают

Базовы сущности Redux:

    Наше приложение работает с какими-то данными. Наши компоненты из Store в любом колличестве получают данные. На основании данных отрисовывают 
представление которое доступно пользователю. Пользователь может что-то сделать

    Любое действие пользователя может привести к определенному событию action
Action - это объект. Объект содержит информацию о типе события и какую-нибудь сопроводительную информацию

    На основании информации которую содержит обхект action, наш reducer - это некоторая функция должен преобразовать в наш store
Reducer можно представить в виде фильтра. Это фукнция которая всегда принимает наш store, конкретное событие и отталкиваясь от
конкретного события по условию делает то или иное действие. И всегда возвращает новый store. Обновляеться набор данных


Action creators и их использование:
    - если нам нужно вернуть из action несколько свойств, тогда можно синтаксически можно записать 
action в формате функции которая возвращает объект. 

Если мы обернем возвращаемый объект в круглые скобки, то это как return 
Это современный синтаксис где return уже подразумеваеться

И также эта функция может принимать некоторый параметры например title, тогда в объекте мы можем вернуть
    еще какие-то дополнительные данные
    
const addTodo = (title) =>({
    type: 'ADD_TODO',
    title,
})

Action чтобы понять какой именно задаче нужно изменить статус нужно предоставить id каждой задачи
Через параметры в action: todoId
Современный синтаксис позволяет нам не дублироваться внутри объектов

const toggleTodo = (todoId) => ({
    type: 'TOGGLE_TODO',
    todoId,
})

Такие варианты actions называются action creators

action creatores - функции которые создают actions. И возвращает объект с динамическими значениями

В момент вызова мы должны будем передать необходимые параметры и они сами вернут нам actions

default: { - возвращаемое значение по умолчанию
    return state
}
Если у нас несколько reducers когда у нас происходит любой action, любой reducer будет работать
Не важно сколько их все они отработают
И если никаких видоихменений в рамках reducers не должно происходить, то он просто должен
    вернуть себя не измененным

У нескольких reducers один action.type может выполнить разные действия

Можно использовать специальный ключ payload и в него уже какие-либо значения

...state - добавить все значения которые находятся в state
{} - также объект дополнительных значений которые необходимо добавить в store к state

Мы никогда не мутируем наш state мы всегда создаем что-то новое
Не использовать методы которые мутируют данные, а использовать которые возвращают новые

Второй параметр для createStore
    - store может принимать 3 параметра, 1 является единственным обязательным

Это некоторое значение по умолчанию которое может быть каким либо образом получено
В реальных условиях для нас это будет LocalStorage



React & Redux

Чтобы приложение React работало с Redux нужно все приложение обернуть в provider

Provider предпологает что есть какой-то Context и есть его потребители 
Потребителем может быть каждый компонент, любой компонент или несколько

Context когда мы работаем с функциональными компонентами и хуками, предостовляет нам 2 хука
    доступных из библиотеки React & Redux

useSelector - предостовляет какие-то данные 
    С помощью данного хука мы можем получить какие-то данные из нашего Redux store

useDispatch - возвращает метод dispatch()
    Напрямую о store наш компонент ничего не знает. И не может использовать store.dispatch() или getState()
Вместо этого используются 2 наших хука. Мы ничего не пробрасываем наш store на прямую во все приложение

Store передается в Provider. Provider будет знать об этом Store. Использую 2 этих хука мы сможем 
    получать нужную нам информацию из store и метод dispatch()


Через useSelector благодаря Provider мы получаем данные из нашего стора
Благодаря useDispatch полученному из Provider мы можем вызвать любой импортированный action


useSelector - всегда принимает некую функцию по которой наш Contex определяет что именно из store 
    можно взять. Сейчас state это просто число

useSelector(state => ...state)
    В качестве параметра получает наше хранилище state (его текущее состояние)
    Потом мы говорим что мы от туда хотим взять. Если есть вложенные значения получить их можно через точку
    (state => state.id) - пример

onClick={() => dispatch(addTodo(todo.id))}

Для того чтобы мы могли что-то обновлять мы должны использовать диспетчер
И для получения диспетчера мы используем хук useDispatch()
Это тоже самое что и раньше у нас был store.dispatch()

useDispatch() - возвращает функцию store.dispatch() ничего не принимая

Для того чтобы dispatch работал ему нужны actions которые мы будем экспортировать из store

Если мы создадим копию компонента, то они будут синхронизированны т.к получают данные из хранилища
Все компоненты синхронизированы вне зависимости от вложенности


Redux DevTools
    - инструмент для работы в браузере с Redux

Используется для отслеживания состояния компонента в реальном времени, чтобы каждый раз
    не консолить какие-то данные или изменившиеся состояния


Варианты организации кода:
    
    Как правило в больших проектах в src есть папка store/redux/и т.д чтобы было понятно
за что она отвечает. Как правило в этой папке есть точка входа в которой происходит основная магия. 

    - Создаеться файл index.js
В нем создаеться вся логика с созданием store

    - Отдельная папка хранит actions
    (Например будет называться todos-actions)

Также в каждом отдельном файле могут быть actions для разных задач. Например filter-actions для фильтров

    - Папка reducers
Если файлов reducers много, то в папке будет лежать файл index.js
Который будет объеденять вокруг себя все reducers которые внутри этой папки живут
Он будет содержать корневой reducer который будет объеденять в combaineReducer все остальные reducer

В каждой папке может быть файл index.js это точка входа которая объеденяет в себе все остальные файлы


Подход через создание constants
    - используется чтобы все типы type которые используются в actions сделать неизменными
Т.к в процессе работы может произойти апечатка и мы не сможем ее отследить
type: ADD_TODO, 

Эти константы потребляются reducers и actions

selectors

Второй подход:
    - В папке store создаются папки под отдельные фичи в которых для каждой отдельной фичи
пишуться actions, reducers, selectors, constant. Содержание тоже самое

Точка входа для rootReducer переедет в корневой файл root-reducer.js


Именнование selector 
    - Хорошая, правильная практика перед названием selector писать select

Например: selectActiveTodo

По умолчанию useSelector может принимать только 1 параметр
Если нам необходимо передать несколько параметров мы можем добавить еще 1 useSeclector 

Например

const activeFilter = useSelector(selectActiveFilter)
const todos = useSelector(state => selectVisibleTodo(state, activeFilter))


Синхронизация с LocalStorage:

Мы создадим файл localStorage.js в котором будем 2 фукнции которые помогут работать с localStorage

export const loadState = () => {}
    - Отвечает за загрузку данных в наш state из localStorage

export const saveState = () => {}
    - Будет принимать наш state и сохранять его в localStorage по необходимости

Оба этих варианта будут записаны с помощью try/catch
    - Потому-что у некоторых пользователей может быть отключен доступ для записи в их хранилище
Тогда попытка обратиться к localStorage будет вызывать ошибку. И чтобы их избежать мы будем использовать try/catch

Описание выполнения:

    1. Мы будем обращаться к localStorage, получить элемент.
И нам нужно будет придумать ключ для хранения нашего state

    localStorage.getItem('state')

    2. То что мы получим мы сохраним в переменную и назавем saveState сохраненный state
И будем проверять ее на null. Т.к у нас такой переменной еще нет. И если это null мы вернем undefined
Чтобы наше приложение получило undefined как значение по умолчанию и тогда не исопльзовала предзагруженные данные
Чтобы у нас отработали все default которые есть в reducer

    3. Если у нас произойдет ошибка чтобы приложение продолжало работать мы вернем undefined

    4. Подключаем файл localStorage в store. Helper

    5. Прописываем в store что при создании нашего store мы должны получить данные из loadState
И вторым параметром будем передавать наш предзагруженный state. - persistedState
Мы таким образом загружаем данные. Вопрос в том как мы их будем синхронизировать?

Для этого мы напишем 2 функцию saveState

    6. 2 функция также будет использовать try/catch 
В try мы говорим что наш state должен быть приведен к формату JSON.stringify(state)
В который мы передаем наш state

    7. Мы будем обращаться к localStorage.setItem('state', stateToBeSaved)

    8. Второй метод saveState мы импортируем в store как и первый
И будем его использовать с помощью метода subscribe()
Метод принимает callback и выполняется каждый раз когда store изменился

В нем мы будем говорить вызови наш Helper saveState и передай туда актуальное состояние стора
store.getState()

Мы можем самостоятельно написать helper, но в данном случае используем библиотеку lodash
Нам на уровне приложения нужно импортировать helper из lodash

import throttle from 'logash/throttle'

Чтобы мы смогли использовать только одну конкретную функцию, а не все из библиотеки
Используется чтобы ограничить перезапись localStore

Это используеться для оптимизации операции обращения к localStorage


Добавление React-Router к приложению с Redux:

import {BrowserRouter, Routes, Route} from 'react-router-dom'

Чтобы можно было использовать библиотеку нужно импортировать основные переменные

<Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
            <Route path=':filter' element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

1. Дополнительным провайдером у нас будет BrowserRouter. Внутри которого будут Route (Роуты)
2. Route будет ссылаться '/' на наше приложение <App />
3. Также мы хотим чтобы в нашем приложении работали истории связанные с параметрами
4. Мы добавим дополнительный Route связанный фильтрами: <Route path=':filter' element={<App />} />
    Для фильтров у нас будет использоваться тот же самый элемент
В таком вложенном Route в котором мы будем проверять возможность параметров

Мы хотим чтобы при нажатии кнопки all, active, completed происходил роутинг
Чтобы пользователь мог уже конкретную ссылку сохранять и обновляться в нужном для него месте

5. Пойдем в наши фильтры и добавим возможность работы с сылками link
И все кнопки мы заменим на Link

Так как у нас filter переезжает в роутинг мне становиться не актуальна история хранить информацию о 
    фильтрах в нашем store

<Link to="/all" style={{color: activeFilter === 'all' ? 'red' : 'black'}}>all</Link>

Эти ссылки используются как параметры т.к мы задали их через двоеточие :filter
Чтобы использовать эти параметры мы используем хук useParams из библиотеки react-router-dom

Мы получаем значение параметров через useParams

Когда наша информация переехала в Router, она перестала быть нужной в нашем store
Т.к должен быть один источник истинны. В данном случае им являеться роутинг
Т.к от туда мы берем необходимые значения из параметров

В файле с selector в каждый отдельный селектор мы прописываем какие данные с помощью этого селектора 
    мы хотим получить из store

Redux легаси:
    - С redux есть возможность работать как с функциями так и с классами
    Функции современный стандарт, классы - легаси (старый код)

    Функции в Redux:
        - Используют хук useSelector для получения выборки данных
        - Используют хук useDispatch для получения функции "диспетчер событий"
        - Не нуждаеться в дополнительных обертках 

    Классы в Redux:
        - Не могут использовать хуки
        - Используют обертку connect для добавления данных и диспетчера в props
        - Connect принимает 2 опциональных параметра
            1. Для добавления данных в props
            2. Для добавления методов в props

Redux Middleware:
    - Это нечто что вступает в дело между action и reducer.
        Позволяет выполнять определенные операции на этом промежутке

Middleware может быть не один. Цепочка Middleware при каждом action может быть любая 
По факту это какие-то функции с определенным функционалом который позволяем нам делать определенные вещи

Пример:
    - Логирование
    - Отчеты об ошибках
    - Ассинхронная логика
    - Модификации action (или их отмена)
    - и т.д

Самостоятельно писать Middleware приходиться крайне редко. Как правило используются готовые библиотеки   

    - Подключение Middleware происходит в момент создания store

Пример: Логирование

Это некоторая цепочка вызова функций где у нас есть store, next, action

const myLogger = (store) => (next) => (action) => {}
    - Это сигнатура, которую ожидает от нас Redux чтобы наши Middleware выглядели именно таким образом

    store - это конкретный объект store который мы создаем с помощь createStore. Причем со всеми
        доступными ему методами. 
    
    next - обязательно должен быть вызван внутири нашего Middleware c передачей в него action
    
    action - это текущее событие которые как раз и вызвало что наш Logger вообще отработал

const myLogger = (store) => (next) => (action) => {
  console.log('dispatched an action', action.type)
  next(action)
}
Вызов первой функции возвращает нам слудующую функцию которая возвращает слудующую функцию которая выполняет логику
Все эти вызовы происходят внутри redux нам не нужно об этом беспокоиться 

Чтобы подключить Middleware к нашему store нужно подлючить из нашего 'redux' helper который 
    называеться applyMiddleware

applyMiddleware - helper нужен чтобы подключать наши Middleware к приложению

Функция createStore - может принимать до 3 параметров. 2 и 3 параметры опцианальны

Делаеться это следующим образом:
    - Мы передаем в функцию создания store 2 или 3 параметром enhencer(усилитель)
    - Качестве аргументов applyMiddleware() мы перечисляем наши функции просто по ссылки не вызывая их
    - Далее Redux по своей логике учитывает это встраивает наши Middleware в общую цепочку
        между action и reducer

export const store = createStore(counter, applyMiddleware(myLogger))

Особенность данного подхода является то что на next не обязательно все заканчиваеться
Если мы после нашего next напишем что либо еще, то при таком подходе у нас будет выводиться сразу 2 значения

const myLogger = (store) => (next) => (action) => {
  console.log('dispatched an action', action.type)
  next(action)
  console.log('Updated state is', store.getState())
}

next(action) - гарантирует нам что после 21 строчки у нас отработает reducer. Измениться состояние
    Случиться это синхронно. И только после того как у нас reducer отработает мы попатем на строчку 23
    и выполним слудующую строчку кода с новым обновленным store

reducer -ы всегда должны быть чистыми и никаких случайных значений там быть не должно


Чаще всего Middleware выглядит следующим образом:

const middleware = []

if(process.env.NODE_ENV === 'development') { - добавь logger в список только если мы в режиме разработки
    middleware.push(logger)
}

export const store = createStore(counter, applyMiddleware(...middleware))
...middleware - делаться для того что должны быть функции, а не массив. Поэтому используем spread оператор

Все необходимы middleware собираються в массив middleware который передаем в applyMiddleware
    которая может принять любое кол-во middleware. Дальше разворачиваем 

compose - это возможность последовательно вызывать функции
Мы можем передать в саму функцию compose как аргументы любое колличество функций, они по очереди будут вызваны 
    с переданным аргументом который будет подан на вход. В нашем случае это будет store

export const store = createStore(
  counter,
  composeEnhancers(applyMiddleware(logger))
);

Возможность объеденить middleware и devTools


Библиотека Redux Persist
    - Не работает с middleware

Чтобы начать работу с библиотекой ее нужно установить в зависимости npm i redux-persist

После установки нужно сделать 2 вещи:
    - Добавить 2 дополнительных import. Один из корня библиотеки, второй из доп пути storage

import { persistStore, persistReducer } from 'redux-persist' - hepler
import storage from 'redux-persist/lib/storage' - работает с разныит видами storage
    По умолчанию мы используем браузерный localStorage

Для работы предлогаеться создать некоторый config

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [],
  // blacklist: [],
}

Этот config может содержать больше ключей, чем есть по умолчанию
Мы добавим whitelist: [], blacklist: []

Далее нам предлогаеться создать persistedReducer

const persistedReducer = persistReducer(persistConfig, rootReducer)

Если мы используем библиотеку как внешний инструмент мы должны использовать hepler persistedReducer
    передать туда настройи нашего persist и передать туда наш reducer (rootReducer)

persistedReducer - это будет некоторая обертка над нашим reducer нужная для логики работы 
    данной библиотеки

И теперь мы меняем функцию создания store
export const store = createStore({
    persistedReducer,
    devTools,
})

Так же во вне нам нужно export const persister = persistStore(store)

Чтобы ее создать нужен 2 helper - persistStore(). Который принимает наш store
Это нужно чтобы наше приложение в точке входа в приложении смогло потреблять данные в рамках React

Для этого по инструкции мы должны воспользоваться еще одним import
import { PersistGate } from 'redux-persist/integration/react'

Уже на уровне всего приложения

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};


<PersistGate loading={null} persistor={persistor}>
    PersistGate - требует несколько ключей.

    loading - это мог бы быть какой-то компонент где бы мы отображали например preloader
        что сейчас у нас синхронизируются данные

    persistor - это что мы создавали на уровне store
        export const persister = persistStore(store)

Это нужно чтобы при перезагрузке браузера наши данные оставались неизменными

whitelist: [filters, positions] - у нас в store может быть много ключей. Для хранения определенного набора ключей чтобы 
    их сохранять. Например filters, positions. Все храниться в localStorage

blacklist: [] - указываем какие ключи мы не хотим хранить. Все что не попало в blacklist
    будет сохранено в localStorage

Так же можно реализовать собственный persister в зависимости от нужд проекта


Redux async middleware:
    - Если есть какие-либо ассинхронные операции работы с данными, то на этапе middleware мы можем
        реализовать какие-либо запросы ассинхронные

Например:
    - Есть какой-либо API с которым мы хотим общаться. Для общения нам нужно отправить запрос,
        получить ответ и после это инициировать какую-то логику. При этом не тормазив работу всего 
        приложения. 
    
Есть специальный подход который позволяет все это реализовать. Подход подразумевает что на этопе
    middleware мы отправляем запрос ассинхронно. После этого выполняеться любая логика reducer, а
    сам reducer ассинхронно по ответу от сервера вызывает еще какой-то action дополнительный 
    когда уже пришел ответ.

При этом в рамках middleware может случиться не один action 

    - Может быть статус: Загрузка...
        Мы вызвали action. Action на этапе middleware вызвал другой action. Сейчас пошла загрузка

    - Полученные данные
        Когда получил данные инициировал второй action что данные получены

    - Ошибка
        Если данные не получены случилась ошибка. Мы должны вызвать следующий action
        Чтобы у нас на уровне приложения была информация об ошибках и могули пользователю отрисовать ошибку

    Action Creator
        - Функция которая возвращает объект события. С полем type и вспомогательной информацией
        - Не вызывает другие события
        - Не имеет доступа к внешним redux методам
        - Только синхронная работа

        const actionExample = (data) => ({
            type: "SOME_TYPE_STRING", 
            payload: data,
        })

    Thunk Action
        - Отличаються по логике от action creator. Использовать thunk action можно только благодаря 
            специальному middleware без них такой возможности не будет.

        - Функция НЕ возвращает объект события. В этом нет необходимости т.к задачая иная  
        - Вызывает внутри себя другие события. В любом колличестве    
        - Имеет доступ к dispatch() и getState()
        - Предназначены для ассинхронной логики: запросы на сервер и т.д

        const thunkExample = (data) => (dispatch, getState) => {
            dispatch(someAction())

            fetch(url) {
                .then(res => res.json())
                .then(loaded => {
                    dispatch(someOtherAction(loaded))
                })
            }
        }

        Функция возвращает функцию. И на базе того что функция возвращает функцию redux понимает что
            речь идет о не обычном action, а о thunkAction. Ему нужо предоставить 2 метода
            dispatch и getState которые в теле мы можем использвать

export const store = createStore(rootReducer, composeDevTools(applyMiddleware(thunk)))
composeDevTools - функция объединения devTools и Middleware. Т.к функция createStore может принять 3 параметра


Чтобы начать работу c Redux-thunk:
     - Установить библиотеку redux-thunk

import composeDevTools from '@redux-devtools/extension'
import thunk from 'redux-thunk' - наличие этого middleware дает нам возможность использовать
        thunk action

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


Подготовка клиентского API:
        - Папка api в которой будет обработывать запросы. Обстракция


*/

import { createStore } from 'redux'

let nextTodoId = 0

const rootReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, {
                id: ++nextTodoId,
                title: action.title,
                complited: false,
            }]
        }
        case 'TOGGLE_TODO': {
            return state.map(todo => (
                todo.id === action.todoId
                    ? {
                        ...todo, // Мы копируем todo и изменяем одно свойство
                        complited: !todo.complited,
                    } : todo
            ))
        }

        default: {
            return state
        }
    }
}

// persist - мы сохраняем какие-то предыдущие значения при перезагрузки браузера
const defaultValue = [ // Обстрактные данные 
    { id: 1, title: 'One todo', complited: false },
    { id: 2, title: 'Two todo', complited: false },
    { id: 3, title: 'Three todo', complited: false }
]

const store = createStore(rootReducer, defaultValue) // reducer + значение по умолчанию

const addTodo = (title) => ({
    type: 'ADD_TODO',
    payload: {
        title,
    }
})

const toggleTodo = (todoId) => ({
    type: 'TOGGLE_TODO',
    todoId,
})

console.log(store.dispatch(addTodo, 'Learn Redex!'))
console.log(store.dispatch(toggleTodo, 1))


export const configureStore = () => { // При создании store мы получаем данные из localStorage
    const persistedState = loadState() // Сохраненное состояние

    const store = createStore(
        rootReducer,
        persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )

    store.subscribe(throttle(() => { // Выполняется каждый раз когда произходит изменение state
        saveState({ // Мы можем точечно определить что именно должно храниться в state
            todos: store.getState().todos
        })
    }, 1000)) // Временное ограничение на перезапись в localStorage
    // НЕ используем на уровне React приложения. Только на уровне store
    return store
}

// localStorage

// Подключение к store - localStorage (Helper)
import { loadState } from './code_organization/store2/localStorage'

// Загрузка данных из localStorage
export const loadState = () => {
    try {
        const saveState = localStorage.getItem('state')

        if (saveState === null) return undefined

        return JSON.parse(saveState)
    } catch (error) {
        return undefined
    }
}

// Сохранение текущего состояния в localStorage. Синхронизация c localStorage
export const saveState = (state) => {
    try {
        const stateToBeSave = JSON.stringify()

        localStorage.setItem('state', stateToBeSave)
    } catch (error) {
        console.error(error)
    }
}
//Роутинг 

import { useParams } from 'react-router-dom'

const filter = () => {
    const { filter: activeFilter = 'all' } = useParams()

    return (
        <div>
            <Link to="/all" style={{ color: activeFilter === 'all' ? 'red' : 'black' }}>all</Link>
            <Link to="/active" style={{ color: activeFilter === 'active' ? 'red' : 'black' }}>all</Link>
            <Link to="/complited" style={{ color: activeFilter === 'complited' ? 'red' : 'black' }}>all</Link>
        </div>
    )
}