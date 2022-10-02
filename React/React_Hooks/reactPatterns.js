/*
React паттерны: 
    - можно назвать Best Practice для решения типовых задач

15 паттерном библиотеки React:

1. Функциональный компонент

const Greeting = (props) => {
    <div>
        <h1>Hi {props.name}!</h1>
        <h2>I work as a {props.position}</h2>
    </div>
}

2. Диструктуризация props
    - нужно стараться диструктуризировать любые возможные конструкции

const Greeting = ({ name, position }) => {
    <div>
        <h1>Hi {name}!</h1>
        <h2>I work as a {position}</h2>
    </div>
}

3. Использование значений по умолчанию
    - используется на всякий случай если данные не придут

const Greeting = ({ name = '', position = '' }) => {
    <div>
        <h1>Hi {name}!</h1>
        <h2>I work as a {position}</h2>
    </div>
}

4. Использование REST оператора
    - такая фишка ES6 позволяет пробросить в компонент дополнительные props без необходимости из полного перечисления

<Greeting 
    name="Jack"
    position="Front-end Developer"
    data-name="position"
    onClick={showFunction}
    id="person-position"    
/>

const Greeting = ({ name, position, ...restProps }) => {
    <div>
        <h1>Hi {name}!</h1>
        <h2 {...restProps}>I work as a {position}</h2>
    </div>
}

5. Смешивание props и различных значений
    - данный паттерн можно использовать для перетирания default настроек различных компонентов
Использовать нужно с осторожностью чтобы не перетиреть нужные для функциональности свойства и атрибуты

<Greeting 
    name="Jack"
    position="Front-end Developer"
    className="new-class"
/>

const Greeting = ({ name, position, ...restProps }) => {
    <div>
        <h1>Hi {name}!</h1>
        <h2 className="old-class" {...restProps}>I work as a {position}</h2>
    </div>
}

6. Условный рендеринг: ||, &&, Тернарный опрератор

const Greeting = ({ name, position, ...restProps }) => {
    <div>
        <h1>Hi {name}!</h1>
        {position || <h2>I work as a Developer</h2>}
    </div>
}

7. Использование компонента в качестве props
    - периодически такая возможность полезна. И вместо того чтобы городить громозкую имплиментацию или изменять код
    уже существующего компонента. 

<LayoutComponent 
    top={<Navigation />}
    leftSide={<Sidebar />}
    rightSide={<Main />}
    bottom={<Footer />}
/>

8. Массив в качестве дочернего элемента
    - react предлогает элегантное решение для реализации списков однотипных данных

Эти данные нужно объеденить в массив, после чего пробежаться методом .map() и вернуть кусок разметки
Способ используется когда нужно отрендерить повторяющиеся куски разметки

const List = () => (
    <ul>
        {["first", "second"].map(item => <li key={item}>{item}</li>)}
    </ul>
)

9. Использование <React.Fragment>
    - обертка для react элементов, в реальном DOM дереве он не рендериться

const Greeting = ({ name, position, ...restProps }) => {
    <>
        <h1>Hi {name}!</h1>
        <h2>I work as a {position}</h2>
    </>
}

10. Рендер массива данных
    - react научился рендерить массив данных и возвращать список элементов

В этот массив можно забрасывать как теги так и компоненты
Единственное условие что каждый элемент массива должен иметь уникальных ключ

const Layout = ({ childern }) => [
    <Navigator key="navigation" />
    <Main key="main">{children}</Main>
    <Footer key="footer" />
]

11. Использование propTypes и defaultProps
    - данные поступающие в компонент можно описать, а также присвоить им default значения по умолчанию
в случае если значения не придут в компонент

Благодаря propTypes и defaultProps компоненты становятся самоописательными

12. proxy componet

<Button />



*/

