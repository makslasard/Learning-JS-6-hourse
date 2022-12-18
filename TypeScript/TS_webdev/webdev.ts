/*
Типизация React & Redux:
    -

Установка окружения:
    npx create-react-app react-typescript --template typescript

tsconfig.json - основной файл для конфигурации проекта на typescript.
    В нем уже выполнена базовая настройка

Файлы tsx могу содержать JSX разметку


Типизация функциональных компонентов:

    1. Функциональные React компоненты должны обязательно что-то возвращать. React.FC
        const Title: React.FC = () => <h1>Hello World!</h1>

    Если возврать ничего не будет, то будет ошибка

В использовании React.FC есть 2 ньанса:
    1. Из отличие от нормальных функций в том что они обеспечивают проверку типов и автозаполнение для
        статических свойств таких как: displayName, propTypes и defaultProps
    Но есть проблема использования defaultProps и React.FC

    2. Они предостовляют не явное определение потомков т.е если в компонент передать children, то 
        TS не выдаст ошибку о том что его тип не определен. children может свободно использоваться внутри
        компонента без его строгой типизации

    2. Фунция как и любой компонент может принимать props и для того чтобы их описать есть 2 варианта:
        - Использование Generic Types


        - Использование type, interface
            Мы отдельно создаем тип и используем для описания значений
            Использовать можно и то и другое, только interface дает более широкие возможности

Типизация классовых компонентов:

    class App extends Component<{}, {count: number}> {} - Если входящих значений мало

    1. При типизации классовых компонентов мы используем 2 объекта:
        - Первый {} это типизация props
        - Второй {} это типизация state

    type CounterProps = {
        readonly count: number
    }

    type CounterState = {
        color: string
    }

    class App extends Component<CounterProps, CounterState> {
        constructor(props: CounterProps) {
            super(props)
        }
    }

    Используется если много входных параметров которые нужно типизировать
    При использовании страндартного constructor типизировать props нужно дважды

Защита от дурака - философия React это иммутабельность, т.е не изменяемость данных
    И если мы хотим поменять значение в state мы используем setState()
    Тем самым мы можем с помощью readonly(только для чтения) мы можем закрыть доступ к state без 
        специальных get и set

componentDidMount(): void {} 

Ничего не возвращает и ничего не принимает. Поэтому void
Если есть необходимость типизирвоать входящие данные нужно сделать по типу props: CounterProps


Типизация событий:
    - События в React это не просто события в их классическом понимании. Библиотека React использует
        собственную обертку. Так называемый synteticEvent над каждым событием. Это необходимо для
        обеспечения лучшей кроссбраузерности. Т.е каждое событие оборачиваеться собственной имплементацией,
        а раз существует такая обертка, то для этой надстройки были разработаны специальные событийные типы

        Данная типизация предостовляеться самой библиотекой

Список типов событий:
    - AnimationEvent
    - ClipboardEvent
    - DragEvent
    - FormEvent
    - MouseEvent
    - TouchEvent
    - WheelEvent
    - ChangeEvent
    - CompositionEvent
    - FocusEvent
    - KeyboardEvent
    - PointerEvent
    - TransitionEvent

Чтобы начать работу с событиями нужно как параметр передать в функцию событие event

handleClick = (event: React.MouseEvent<HTMLButtonElement | <HTMLArchorElement>) => {}

Далее нам нужно определить тип события. Мы используем React.SynteticEvent для того чтобы типизировать аргумент

Как специальное React событие. Однако сама типизация немного расплывчата т.к мы не уточняем какой
    конкретно тип события произошол. Клик по кнопке это событие мыши. Поэтому React.SynteticEvent мы можем 
    заменить на React.MouseEvent

Элемент на котором срабатывает событие мы также можем типизировать
Для этой задачи используеться Generic HTML + тип элемента

После определения типа события мы указываем тип элемента на котором мы отлавливаем это событие
В нашем случае это кнопка которой соответствует специальные тип <HTMLButtonElement>

Поэтому если событие повесить не на кнопку как указано в типе , то получиться ошибка
И чтобы поменять принименение события например для ссылки, то нужно заменить <HTMLArchorElement>
Либо добавить как второй тип в Generic 

В данном случае это установка зависимости TypeScript с ReactDOM
handleClick = (event: React.MouseEvent<HTMLButtonElement | <HTMLArchorElement>) => {}

Мы контролируем тип события, и контролируем тип элемента на котором событие может сработать

Пример:

handlerFocus = (event: React.FocusEvent<HTMLInputElement>) => {}


Типизация элементов:

interface Positions{
    id: number,
    title: string, 
    discription: string
}

const position: Array<Positions> = [id, title, discription]

const DEFAULT_SELECT_VALUE: string = POSITIONS[0].value
const styles: React.CSSProperties = { displau: block, marginBottom: '10px'}

state типизируеться также по type, или interface

class App extends React.Component<{}, FormState>
{} - это типизация props
FormState - типизация state

private rootRef = React.createRef<HTMLSelectElement>()


Типизация Context и Portal

Portal - это нативный React компонент который рендерит свое содержимое в любую часть DOM дерева вне корневоого дива
    Такое свойство позволяет отображать элементы за пределами блоков. Например с свойством overfloy: hidden
    И при этом минимально изменять дерево компонентов

    Применяются для: всплывающих подсказок, модальных окон, toolType, и т.д

class Portal extends Component<{ children: React.ReactNode }> {}

Типы для children:
    - children: JSX.Element
    - children: JSX.Element | JSX.Element[]
    - children: React.ReactChildren
    - children: React.ReactChild[]
    - children: React.ReactNode - лучший вариант

Далее определяеться элемент внутрь которого будет рендериться разметка

el: HTMLDivElement = document.createElement('div')

Либо можно вынести это все в type или interface


Context - это способ передачи данных через дерево компонентов без необходимости передавать свойства вручную 
            на каждом уровне. Т.е использование context позволяет избежать props drilling
            Это когда нужный props пробрасываеться от корневого компонента в целевой через 100500
            уровней вложенности

Используя context такую передачу можно совершить на прямую

interface IContext{
    isAuth: boolean,
    toggleAuth: () => void
}

const AuthContext = React.createContext<IContext>({
    isAuth: false,
    toggleAuth: () => {},
})

class Login extends Component {
    static contextType = AuthContext
    context!: React.ContextType<typeof AuthContext>

    render() {
        const { toggleAuth, isAuth } = this.context
        const context: IContext = { isAuth: toggleAuth, this.toggleAuth }


        return (
            <button onClick={toggleAuth}>
                {!isAuth ? 'Login' : 'Logout'}
            </button>
        )

    }
}

1. Через interface опишем наш context
2. Через generic передаем наш interface в компонент. Теперь наш контекст типизирован

const Profile: React.FC = (): React.ReactElement => {}


Типизация Хуков:

Хук useState:

// Если мы используем простое значение , то выполнять дополнительную типизацию не требуеться
const [value, setValue] = useState(0)

// Если значение комплексное или оно может отсутствовать при инициализации нам понадобиться типизации
const [value, setValue] = useState<number | undefined>(undefined)
const [value, setValue] = useState<Array<number>>([])

// Использование interface

interface IUser {
    name: string, 
    age?: number
}

const [value, setValue] = useState<IUser>({ name: 'Maksim' })

Хук useRef: или создание ссылки

const ref1 = useRef<HTMLElement>(null!)
    Первая опция сделает ref1 current доступной только для чтения и управляемой только через React

const ref1 = useRef<HTMLElement | null>(null!)
    Вторая опция сделает ref2 current модифицируемым и предназначеным для изменяемых экземпляров 
    которыми ты сам управляешь. Конфигурируем все самостоятельно

Данный хук возвращает объект у которого есть свойство current. И это свойство инициализируеться 
    переданным аргументом initialValue. И возвращаемый объект будет сохраняться в течении всего времени
    жизни компонента


Хук useContext:

interface ITheme {
    backgroundColor: string,
    color: string
}

const ThemeContext = createContext<ITheme>({
    backgroundColor: string, 
    color: 'white'
})

const themeContext = useContext<ITheme>(ThemeContext)

Это чистая функция которая возвращает типы которые ей были переданы


Хук useReducer:
    - хук для управления глобальным состоянием приложения

interface State {
    count: number
}

type Action = {
    type: 'increment' | 'decrement'
}

const counterReducer = ({ count }: State, { type }: Action) => {
    switch(type) {
        case 'increment': return { count: count + 1}
        case 'decrement': return { count: count - 1}
        default: return {}
    }
}

useCallback & useMemo:
    - основная задача хуков уменьшение общего колличества перерендеринга компонентов

const memoizedCallback = useCallback(() => { sum{a,b}; }, [a, b])

const memoizedMemo = useMemo((a: number, b: number) => sum(a, b), [a, b])

Оба метода это чистые функции, а значит возвращаемый тип зависит от переданного. Явная типизация не требуется


useEffect & useLayoutEffect
    - оба хука используются для side effects на подобии получения данных и подписки на какие-то события
        Заменяют собой методы жизненного цикла compenentDidMount и componentWillUnmount
        Никакой дополнительной типизации не требуется

По факту TS сам проверяет правильность структруры методов которые мы используем       

useEffect(() => {
    const subscriber = subscribe(options)

    return () => {
        unsubscribe(subscriber)
    }
}, [options])

React хуки практически не требуют дополнительной типизации со стороны TypeScript


Типизация Hooks: Компоненты высшего порядка
    - тип компонента который принимает другой компонент оборачивает его своей логикой тем самым
        расширяя его возможности и возвращает новый

interface WithLoadingProps {
    loading: boolean
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
    class WithLoading extends React.Component<P & WithLoadingProps> {
        render() {
            const { loading, ...props } = this.props
            return laoding ? <LoadingSpiner /> : <Component {...props as P} />
        }
    }
}


Типизация React.Router:
    - чтобы начать типизировать роутер нужно сначало установить зависимости
        npm i react-router-dom @types/react-router-dom

Чтобы определить props из react-router есть специальный тип RouteComponentProps from 'react-router'
    после чего мы можем выполнить типизацию props компонентов

type RouteParams = {
    id: string,
}

interface IPost {
    title?: stirng,
    body?: string
}

type PostState {
    post: IPost,
}

class Post extend React.Component<RouteComponentProps<RouteParams>, PostState> {
    state = {
        title: '',
        body: ''
    }
}

<ul>
    {data.map({title, body}: IPost) => <li><li/>)}
<ul/>


Типизация ассинхронных функций:

export async function http<T>(request: string): Promise<T> {
    const response = await fetch(request)
    const body = await response.json()
    return body
}

Ответ от ассинхронных фунций мы можем присваивать(записывать) переменным внутри state через функцию setState

async componentDidMount() => {
    const id = this.props.match.params.id || ''

    const post = await http<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    setState({ post })
}

Дополнительно запрос можно обернуть в tru/catch и обробатывать ошибки

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(res => res.json() as Promise<IPost[]>)
        .then(data => { thisState({ data }) })
}


Типизация Redux:
    - чтобы начать типизировать redux нужно установить зависимости 
        npm i redux react-redux @types/react-redux redux-localstorage-simple

На реальных больших проектах типизация разбрасываеться по отдельным файлам
typeof - жестко определит значение которое может быть. Т.е тип ADD_TASK может принять константу только ADD_TASK


import { ADD_TASK } from './constants'

export type Filter = string

export interface ITask {
    id: number, 
    text: string, 
    isCompleated: boolean
}

// Actions

interface IAddTaskAction {
    type: typeof ADD_TASK
    payload: ITask 
}

payload: {
    id: number,
    activeFilter: Filter
}

После этого мы можем export каждого interface по отдельности
Также можно создать так называемый тип объединения

export type TaskActionTypes = IAddTaskAction | IRemoveTaskAction | ICompleateTaskAction
export type FilterActionType = IChangeFilterAction

Далее добавляем наши interface в нужный файлы и начинаем исправлять ошибки

import { TaskActionTypes, ITask и т.д } from '../types'

export const addTask = (task: ITask): TaskActionTypes => ({
    type: ADD_TASK,
    payload: {
        ...task
    }
})

Типизируем тип принимаемого результата и тип возвращаемого значение

Все остальные actions типизируем по подобию


Типизация Reducer & Store

import { Filter, FilterActionType } from '../types'

const BASE_FILTER: Filter = 'all'

const filter = (state = [], { type, payload }: FilterActionType): Filter => {
    const { activeFilter } = payload

    switch(type) {
        case CHANGE_FILTER: {
            return payload.activeFilter
        }
        default: {
            return state
        }
    }
}

export default filter;








*/