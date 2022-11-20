/*
Типизация приложения React & Redux
    - 

Плюсы и минусы использования TypeScript в приложения React & Redux:

    Плюсы:
        - Намного проще избежать очень распространенных опечаток, какие как не правельные типы actions
        - Дает разработчикам лучшее понимание типов передаваемых данных
        - Намного проще делать рефакторинг
        
    Минусы:
        - Не самые лучшие файлы определения типа (особенно для Redux)
        - Огромное колличество Generics
        - Очень много импортов, так как почти всё (action creator, action, reducer, store, component)
    должно знать о разных типах
        - Redux по своей сути функциональный по своей природе, трудно интегрировать с классами TS

Файлы с расширением .tsx - это TS файлы написанные с использованием JSX


Interfaces & Props
    - Один из самых простых способов при помощи которого мы работаем с компонентами - это мы создаем
Interface который описывает различные свойства которые мы собираемся передовать в компоненты

Часто в React мы можем иметь свойства которые опциональные 

interface AppProps {
    color: string
}
type Propa {
    title: string,
    description: string
}

class App extends React.Component<AppProps> {}

Наследование типизации от interface


Обработка Component state

onIncrement = (): void => {}

const createTask: React.FC<AppProps> = ({title}: Props) => {}


const [title, setTitle] = useState<null | sting>(null)

interface Member {
    username: number,
    age?: number
}

const [title, setTitle] = useState<Member | sting>(null)















*/
