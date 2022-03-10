// Практически все сущности в JS это объекты
/*
Параметры – это переменные, которые описываются в круглых скобках на этапе объявления функции. 
Аргументы – это значения, которые передаём функции в момент её вызова

Объект - это набор свойств "ИМЯ - ЗНАЧЕНИЕ". Имена часто называют ключами
Массив - это объект
Функция - это объект
Числа и строки - ведут себя как объекты. Значение типа string, тип number - это приметивы

console.log('Hello World!!!') - т.к log это метод мы можем его вызвать
1. console - это объект у которого есть свойства это пара ключ значение
2. log - это метод. Метод - это функция которая является значением одного из свойств объекта
У нашего объекта console есть свойство значение которого это функция. А такие свойства называются методами
3. Точна между conole и log - это синтаксис JavaScript которая называется точечная запись. С помощью точечной записи можно получать доступ к свойствам объекта
В данном случае мы получаем с помощью точечной записи доступ к методу объекта. Метод называется log
4. Скобки это вызов метода также часть синтаксиса JavaScript. Поставив скобки после log() мы говорим что мы хотим вызвать ту функцию которая является методом объекта console. Вызывается метод log
5. Внутри вызова метода (внутри круглых скобок) - находится аргумент и в данном примере это значение типа строка String
Значения типа строка помещаются в JS либо в одинарные ковычки, либо в обычные

console.dir() - отображает все свойства объекта
console.table() - отображает все свойства объекта в табличном виде

После вызова метода log в консоле, мы видим ответ от интерпритатора JavaScript undefined. 
Это результат выражения console.log('Hello World!!!'). Любое выражение возвращает значение. 
log - это метод. Это функция. Любая функция возвращет значение. Всегда возвращает undefined
undefined - это значение которое возвращает функция log. Метод log возвращает значение undefined(неопределино)
Также видна стрелочка справа с точкой от результата которая говорит о том что это значение было передано от интерпритатора JavaScript стрелочка с точкой. 

Выражение - любое выражение всегда возвращает значение. Результатом любого выражения всегда является значение
Выражение с побочными действиями - не только возвращает значение, но и выполняет другие действия после получения результата

Переменные - дают возможность повторного доступа к значениям которые присвоены этим переменным
Имена переменных: 3 варианта названий
1. PascalCase - для типов и классов
В этом варианте название переменной всегда начинается с заглавной буквы. Другие слова которые являются частью переменной также должны быть с большой буквы
2. DB_PASSWORD - значения известны до запуска приложения и не меняются
В этом варианте все буквы заглавные и между словами используются нижнее подчеркивание   
Такие значения, можно сказать константы. Которые никогда не будут меняться
Как правило находятся в отдельном файле откуда экспортируются
3. Используется во всех остальных случаях используется camelCase

Названия переменных - должны быть понятными
- Не использовать коротких названий, лучше длиннее и понятнее
- Нельзя объявить переменную через const не присвоя значение

Типы переменных определяется типом присвоенного значения
const a = 10; - значение переменной типа число. Поэтому сама переменная будет типа число
const b = 'abc'; - значение переменной типа строка. Поэтоиу сама переменная будет типа строка
Можно сказать что переменная b типа строка, она содержит значения типа строка
- Если ты пишешь приложение которое состоит из многих файлов, то рекомендуется использовать либо одинарные ковычки везде либо двойные везде. 

Типы: Примитивные типы / Ссылочный типы
1. Перменная => Имеет значение => Значение имеет тип
Переменная тоже имеет определенный тип после того как вы присвоили такой переменной определенное значение 

Примитивные типы:
1. String
2. Boolean 
3. Number
4. null : используется тогда когда мы явно хотите явно указать что у какой-то переменной на данном этапе значение отсутсвует. Можем присвоить null переменной
5. undefined : подразумевает что той или иной переменной не существует. Оно не определено
6. symbol : с помощью такого типа можно создавать уникальные значения. Используется редко

Разница null и undefined в том что: Null присваивается тобой той или иной переменной. Подразумевая что пока что у этой переменной значения нет. Позже оно будет присвоено
undefined - не нужно присваивать переменной. Когда ты объявляешь переменную через let и не присваеваешь ей начальное значение, значение у этой переменной будет undefined

Примеры: 'Hello World!', undefined, true, 25
Если вы присваиваете такие значения переменным, то в памяти компьютера переменные непосредственно будут содержать значение
Переменная в памяти содержит, то или иное значение 


Ссылочный тип:
1. Объект

Что такое ссылочный тип? Как он сохраняется в памяти?
0x3151 {a: 10, b: true} - если ты присваиваешь объект переменной, то переменная в памяти будет хранить только ссылку на этот объект
0x7213 [1,2,3] - 
Ссылка 0x3151 - это адрес этого объекта в памяти. С массивами такая же ситуация
Для массивов - переменная будет содержать ссылку на область в памяти где находится сам массив
Ссылочный тип в JS только один, и он называется объект

Ты можешь иметь несколько одинаковых ссылок в разных местах памяти которые указывают на один и тот же объект
Тем самым мы можем иметь 2 разных переменных одна содержит это значение в памяти, другая содержит такое же значение, но в другом месте памяти 
Переменные разные, но содержат одинаковые ссылки и эти ссылки ссылаются на один и тот же объект в памяти
Тем самым можно создавать не 2 переменные которые ссылаются на один и тотже объект, а сколько угодно. И все они будут указывать на один объект в памяти 

С примитивными типами такое не возможно, т.к значения примитивных типов хранятся непосредственно в переменных 
Точно также как хранятся в этих переменных ссылки

Не важно через что объявлен объект через let или const 
Если вы меняете свойства объекта и присваиваете им новые значения, то поменяв значение свойств объекта одной переменной, вы тем самым поменяете значение в одном месте памяти 
И соответственно значение другиъ переменных также изменится 
Используя разные переменные можно изменять один и тотже объект 

const objectA = {
    a: 10,
    b: true
}
const copyOfA = objectA

- Мы берем ссылку которая была записана в переменной objectA и копируем ее в другую переменную copyOfA
- Тем самым объект остается в памяти только в одном месте, а ссылка на него копируется из одной переменной в другую 
- Здесь мы также использовали const, т.к мы не присваиваем новое значение copyOfA. Поэтому смысл использоавть let тут нет

- Результатом этих двух инструкций то что в памяти компьютера 2 переменных copyOfA, objectA
- Они будут содержать одни и теже ссылки на объект который находится в другом месте памяти. Т.к копируется лишь ссылка объект

- Что произойдет если мы попытаемся изменить объект?
Изменить объект мы можем с использованием либо objectA либо copyOfA, т.к они ссылаются на один и тот же объект
Доступ к свойствам того или иного объекта возможени с помощью оператора точка. Мы можем поменять значение того или иного свойства 
С помощью команды copyOfA.a = 10;

Динамическая типизация 
- Статическая типизация - синтаксис не JS. При объявлении переменной также указывается тип, и другой тип данных уже нельзя присвоить переменной 
В JS нет необходимости указывать тип переменной. В JS можно присваивать одной переменной значения разных типов 
В динамичесой типизация можно переопределять значение одной переменной сколько угодно раз и присваивать значение разных типов данных 

Пример динамической типизации:

let a = 10;
a = true;
a = 'Bogdan'
a = undefined

function a() {
    console.log('Hey here')
}
a() //  Результать: 'Hey here'
a = 10
a() //  Результать: Uncaugth TypeError: a is not a function

Мы объявили функцию a. И дальше мы можем вызвать эту функцию. Мы можем легко присвоить новое значение переменной a
Мы присваиваем новое значение переменной a = 10; Если мы снова попытаемся вызвать функцию a() - мы получим ошибку т.к переменная уже не является функция, а является числом

Это недостаток динамической типизации JS: 
Вы можете объявить функцию в одном месте, потом где-то позже случайно присвоить другое значение этой же переменной с таким же именет с которым вы объявили функцию. 
Больше вы не сможете вызвать функцию которую вы определили ранее вы получите ошибку

Какой выход из этой ситуации?
- Вы должны использовать const везде где это возможно. Тем самым вы предотвратите ситуации когда вы случайно присвоите значение другого типа той или иной переменной 
- const - объявляет переменную только раз и также нужно присвоить значение этой переменной. Все одной стракой. И позже новое значение присвоить нельзя

ОБЪЕКТЫ
- Практически все сущности в JS это объекты. Они являются либо объектами явно либо ведут себя как объекты 
- Порядок свойств в объекте не имеет значения. Поэтому они технически одинаковы. Точечная 

Использование оператора удаления свойства объектов:
delete myCity.country - оператор delete 

Также работать со свойствами объекта можно работать используя квадратные скобки
myCite['popular'] = true - чтобы добавить новое свойство. Название свойства указывается в виде строки

Такой синтаксис используется в том случае если название свойства является значением той или иной переменной 
const countryPropertyName = 'country'
myCity[countryPropertyName] = 'USA' - в данном случае мы использовали название переменной которая будет использована в качестве свойства объекта

Мы хотим добавить новое свойство к объекту myCity, которое будет называть так как значение переменной countryPropertyName
В данном случае подойдет только синтаксис с [] квадратными скобками 
Запись с квадратными скобками называется 'Скобочная запись или Bracket Natation'
Отличается тем что в квадратных скобках мы можем использовать любое выражение JS 

У объектов JS могут быть вложенные свойства которые содержать вложенные объекты 
const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

Получаем доступ до свойств вложенного объекта
console.log(myCity.info.isPopular) || true

Удаляем свойсво у вложенного объекта 
delete myCity.info['isPopular'] - комбинация. В [] скобки мы записываем свойство которое хотим получить 'isPopular' объекта info

У вложенных объектов могут быть вложенные объекты, тем самым может появлятся многоуровневая вложенность
Чтобы получить доступ к свойствам вложенного объекта нужно в данном случае использовать 2 точки чтобы дойти по иерархии объекта к нужному свойству
Первая точка говорит о том что мы хотим получить к свойству info, а у этого свойства есть еще одно свойство isPopular поэтому мы используем еще одну точку
Так же можно удалять свойства у вложенного объекта используя либо точечную запись либо квадратные скобки

Можно использовать либо точечную запись либо запись с квадратными скобками. На самом деле в этом примере такая запись с квадратными скобками в которых мы пишем строку и название свойства. 
Это не имеет смысла, лучше ипользвать точечную запись. Используйте точечную запись с квадратными скобками только тогда когда в квадратных скобкаъ должно быть какое-то выражение. Пример название переменной 

Использование переменных при формировании объекта:
cosnt name = 'Bogdan'
const postQty = 23 

const userProfile = {
    name: name,
    postQty: postQty,
    hasSignedAgreement: false
}

В этом примере у нас есть переменные name и postQty и эти переменные объявлены используя const 
Допустим мы хотим создать новые объект который будет называть userProfile
Значение свойств name и postQty должны использоваться из переменных объявленных ранее

Вы можете легко использовать переменные в качестве значений для свойств объекта
В качестве значений свойств объекта можно использовать любые выражения
Сначало JS получит результат выражения, а после этого результат присвоется одному из свойств объекта. Используем название переменных как выражение

В JavaScript есть возможность сокращенной записи при формировании таких объектов. Сокращенный формат записи свойств

const userProfile = {
    name,
    postQty,
    hasSignedAgreement: false
}
Это очень популярный формат создания объектов в JS
Сокращенные свойства рекомендуется размещать в начале объекта из за удобства чтения и поиска

Глобальные объекты:
1. window - этот глобальный объект присутствует в веб-браузере. 
В этом глобальном объекте присутствуют методы и свойства которые доступны в этом веб-браузере по умолчанию
Мы можем использовать все методы и свойства глобального объекта

2. global - объект из Node.js
Также есть ряд свойств и методов. Которые доступны по умолчанию

Унифицированные глобальные объект: globalThis

Свойства глобальных объектов
Объект console является свойством глобальных объектов window и global
window.console.log() либо просто console.log() - т.к JS поймет что мы пытаемся получить доступ до метода глобального объекта

Методы объекта:
- это свойство объекта, значение которого функция

const myCity = {
    city: 'New York', - просто свойство т.к его значение не является функцией
    cityGreeting: function () { - метод объекта
        console.log('Greetings!!!')
    }
}
myCity.cityGreeting() - вызов функции 

Если у вас есть такой объект с методом мы можем всегда вызвать этот метод

Сокращенный формат записи: 
const myCity = {
    city: 'New York', - просто свойство т.к его значение не является функцией
    cityGreeting() { - метод объекта
        console.log('Greetings!!!')
    }
}
При записи объектов в случае если у вас значение свойства это функция можно убирать ключевое слово function
И ставить круглые скобки просто после названия свойства

Методы VS Свойства объектов
Свойства не содержат функции. Для доступа к значениям свойств, мы используем точечную запись myCity.city и имя свойства
Методы содержат функции как значения. Для вызова метода myCity.cityGreeting() - использовать круглые скобки и название метода

JSON - JavaScript object natation
- Это формат обмена данными между компьютерами в интернете

Обычно когда вы загружаете любую веб-страницу, эта веб-страница обращается к другим серверам для того чтобы получить данные. 
Чтобы показать их на экране. Такими данными могут быть таблицы стилей CSS, картинки, текстовые данные которые необходимо отобразить на странице 
Такие текстовые данные передаются с серверов используя формат JSON
{
    "userId": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
}
Пример JSON. 
В нем есть набор свойств. Эти свойства очень похожи на свойства в JS объкте
Все свойства находятся между двойными ковычками их значения могут быть разных типов 

Формат JSON отличается от формата записи объектов в JS использованием двойныъ ковычек, а не одинарных
Можно также использовать boolean тип как значение свойств в JSON

Как происходит передача данных в формате JSON между компьютерами?
- Передача происходит просто в виде строки
{"userId": 1, "id": 1, "title": "Test title", "status": {"completed: false"}}

Конвертация JSON в JavaScript объект?
- Если сервер присылает JSON (например: объект который описывает пользователя)
- И нам необходимо распарсить JSON и конвертировать его в JS объект чтобы далее отобразить информацию о пользователе на frontend странице

- Для этого есть встроенный метод JSON.parse()

- Получив JSON в формате строки от сервера вы можете его передать как аргумент в вызове метода parse()
- И в результате получите JavaScript объект
- Cвойства будут без ковычек {userId: 1, id: 1, title: 'Test title', status: {completed: false}}
- А их значения такие же какие были в JSON

Если наоборт у вас есть объект и вы хотите конвертировать его в JSON
- Для этого есть обратная функция которая называется JSON.stringify()
- В качестве аргумента указывается объект и в результате вы получите строку JSON
- Которую уже можно передавать на удаленный сервер 

В объекте JSON есть всего 2 метода: JSON.parse(), JSON.stringify() 

Как происходит передача данных в формате JSON:
- В браузере выберем вкладки Network выберите Fetch/XHR
- Также в меню будут другие варианты 
- С помощью этих пунктов меню мы можем фильтровать какие запросы вы хотите отследить и проанализировать между вашим ПК и удаленными серверами

- Нас интересуют запросы которые будут возвращать с удаленных серверов данные в формате JSON

- Переходим в браузер и переходим на сайт Amazon и переходим в вкладку Fetch/XHR
- И мы видим ряд запросов
- Мы кликаем на любой запрос и перейти на вкладку responce
- И в этой вкладке мы как раз видим JSON который сервер вернул ПК в ответ на этот запрос 

- Если кликнуть на вкладку preview сдесь мы увидим уже распаршенный JSON (JSON конвертированный в JS объект)

Мутация в JavaScript:
- это изменение свойств у объекта или примитивных типов с помощью переопределения

При мутировании копируется только ссылка на объект. Поэтому при изменении копии меняется и сам объект

Как избежать мутаций?:

Вариант 1:

const person = {
    name: 'Bob',
    age: 25
}
const person2 = Object.assign({}, person)
person2.age = 26

- Используется при необходимости изменения только копии, чтобы исходный объект не менялся 
- Первый аргумент это пустой объект, второй это объект который нужно скопировать. Мы хотим создать новый объект на основании объект person

- Object.assign({}, person) - метод создаст новый объект и запишет в него все свойства объекта person
- Он создает новую ссылку на объет которая не совпадает со старой. Т.е мы не мутировали оригинальный объект

- Если у объект есть вложенные объекты, то ссылки на них сохраняются. Т.е мы можем избежать мутирования только корневых свойств

Вариант 2: 

const person = {
    name: 'Bob',
    age: 25
}
const person2 = {...person}
person2.name = 'Alice'

- Троеточие оператор разделения объекта на свойства. Оператор spread
- Оператор сначала разбирает оригинальный объект на свойства, а затем собирает в новый т.к это все находится в фигурных скобках

- Если у оригинального объекта есть свойства которые ссылаются на вложенные объекты, то ссылки на вложенные объектты сохраняются

Вариант 3: Как полностью избежать мутаций 

const person = {
    name: 'Bob',
    age: 25
}
const person2 = JSON.parse(JSON.strigify(person))
person2.name = 'Alice'

- Сначало мы конвертируем объект person в строку 
- А потом мы берем эту строку и передаем как аргумент внутри метода parse

- По сути происходит двойная конвертация. Мы получим полностью новый объект и в этом новом объекте мы можем менять любые свойства 
- В данном случае ссылки на вложенный объект не сохраняются 


Функции:
Функция - это блок кода который можно выполнять многократно

Очень рекомендуется избегать повторений блоков кода. Можно оптимизировать с помощью функций

let a = 5
let b = 3

function sum(a, b) {
    const c = a + b 
    console.log(c)
}
sum(a, b)

a = 8
b = 12

sum(a, b)

- Тем самым функция позволяет выполнять одни и теже действия многократно с разными вводными значениями 

Функция может быть:
1. ...именнованой 
2. ...анонимной 
3. ...присвоена переменной
4. ...аргументом при вызове другой функции (callback)
5. ...значение свойства (метода) объекта

Функция - это объект. У функций есть свойства 

Структура функции:

function myFn(a, b) { - параметров функции может быть сколько угодно
    let c
    a = a + 1
    c = a + b
    return
}
myFn(10, 3)
Параметры в функции ведут себя как переменные и в теле функции мы имеем доступ к этим переменным a и b
Значения этих переменных определяются в момент вызова функции
Когда мы вызываем функцию, мы говорим какие значения мы хотим присвоить параметрам переменным внутри функции
Но эти переменные действуют только внутри функции

После инструкции с ключевым словом return функция прекращает выполнение дальнейших инструкций 

Если функция не имеет инструкции return, то она возвращает значение undefined
Функция всегда возвращает какое-то значение 

При вызове функции в круглые скобки передаются аргументы

1. Параметрам 'a' и 'b' присваиваются значения 10 и 3 
2. Объявляется переменная 'c'
3. Значение 'a' увеличивается на 1
4. Сумма значений 'a' и 'b' присваивается 'c'
5. Возвращается значение 'c'

Что важно отметить:
- Параметры функции, аргументы, return опциональны

Передача значения по ссылке:

const personOne = {
    name: 'Bob',
    age: 25
}
function increasePersonAge(person) {
    person.age += 1
    return person
}
increasePersonAge(personOne) - передача объекта по ссылке 

Мы подразумеваем что person это объект который будет передоваться в функцию при вызовею. И мы объявили объект personOne
Мы передаем в вызове функции аргумент personOne. Это переменная которую мы объявили и значение этой переменной объект.
Эта переменная содержит только ссылку на объект
В вызове функции мы передаем только ссылку на объект, поэтому personOne и person будут ссылаться на один объект в памяти

Получается внутри функции мы мутируем внешний объект когда меняем одно из его свойств 
И когда после вызова функции мы попытаемся прочесть значение age мы получим измененное значение 
Это проиходит потому что мы передали объект по ссылке, т.е копии объекта небыло созданно. С помощью функции мы изменили внешний объект

!!!! ВАЖНО. Внутри функции не рекомендуется мутировать внешние объекты
Внутри функции не меняйте внешние объекты которые передаются внуть функци как аргументы


Как же быть если мы хотим выполнять какие-то действия с объектами внутри функции?

- Мы можем внутри функции создавать копии объектов внутри функций

const personOne = {
    name: 'Bob',
    age: 25
}

function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)

    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age) // 21
console.log(updatedPerson.age) // 22

Все также как и раньше у нас есть объект personOne, мы объявили функию increasePersonAge ...
Внутри функии increasePersonAge мы создаем новый объект который называется updatedPerson
По сути мы создаем копию объекта, на основании того объекта который был передан в качестве аргумента

person на входе в функцию будет ссылать на объекта personOne
Но с помощью Object.assign({}, person) мы создаем новый объект и формируем его изходя из свойств объекта person
Т.е updatedPerson теперь будет новым объектом, это будет новая ссылка на новый объект 
И дальше мы уже меняем новый объект в частности значение age
И в конце функции мы возвращаем новый объект updatedPerson

Результат такой функции мы присваиваем новой переменной updatedPersonOne и тем самым мы получаем новый объект который мы получили в результате вызова функии
И теперь у нас в новом объекте будет console.log(updatedPerson.age) // 22, но personOne.age не изменился 

Иногда функции создают именно специально таким образом чтобы они меняли внешние объекты. Иногда такое делают

Колбэк функции: 

function anotherFunction() {
    // Действия...
}

function fnWithCallback(callbackFunction) {
    callbackFunction()
}

fnWithCallback(anotherFunction)

Пример:
У нас есть две функции. В одной из которых есть параметр который называется callbackFunction
И мы подразумеваем что значением этого параметра при вызове этой функции будет другая функция
И в теле этой функции fnWithCallback мы вызываем эту функцию обычным образом использую круглые скобки

Функция callbackFunction кототрая передается в качестве параметра внутрь другой функции называется колбек функцией

- Потому что одна функция в данном примере fnWithCallback вызывает внутри себя другую функцию callbackFunction()
В результате этого когда мы создали функцию в теле который вызывает callbackFunction мы можем вызвать эту функию fnWithCallback
И передать ей другую функцию вот этот вызов fnWithCallback(anotherFunction) 
И аргументов в вызове этой функции является другая функия anotherFunction

Смысл callbackFunction в том что она просто вызывается внутри другой функции

В данном случае anotherFunction это колбек функция т.к она передается как аргумент в другую функцию

Пример: 

function printMyName() {
    console.log('Bogban')
}

setTimeout(printMyName, 1000)

В этом примере есть функция которая называется printMyName
У этой функции нет никаких параметров и в теле функции мы делаем console.log('Bogban')
Далее мы вызываем функцию setTimeout

setTimeout - эта функция встроена в JavaScript. Доступна по умолчанию как один из методов глобального объекта window в браузере либо объекта global в node.js 
Эта встроенная функция внутри себя вызывает функцию которая передана как первый аргумент в вызове функции
Мы передаем только название функции printMyName, сами ее нигде не вызываем потому что она вызовется внутри функции setTimeout

Колбэк функция - одна функция вызывает другую. Функции которые вызываются внутри других функций

Правила работы с функциями:
- Называть функции исходя из выполняемых задач
- Одна функция должна выполнять одну задачу (Одно назначение у каждой функции)
Если задача комплексная, нужно для каждого действия использовать только одну функцию
- Не рекомендуется изменять внешние относительно функции переменные
Т.е если функция работает с объектами, то внутри создавайте копии этих объектом и меняйте их не меняя оригинальный объект которые были переданы как значения аргументов 

Функция должна быть чистой. Чистая функция работает только с переменными которые объявленны внутри самой фунции и она не меняет вгешние переменные 
Даже те которые переданы как аргументы этой функции
Функции всегда что-то возвращают. С помощью return если нет, то undefined
Функцию мы можем вызывать многократно. Нужны чтобы выполнять действия с разными вводными данными

Области видимости:
- Область видимость определяет границы действия переменной

Есть глобальная область видимости. В этой области определены window, global. Это глобальная область видимости
Мы также можем определять новые переменные в глобальной области видимости. Например создание переменной в браузере

Есть локальные области видимости. Создаются внутри типов данных
Переменные с одинаковым называнием Глобально и Локально - это 2 разные переменные 

Кроме того мы можем создавать локальные области видимости и создавать в них переменные 

Глобальная область: Созданные переменные a, b, c

Предположим что есть локальная область видимости 1 и в ней созданы переменные a, c
Предположим что есть локальная область видимости 2 и в ней создана переменная b

Обратите внимание что в локальных областях видимости 1 и 2 некоторые переменные пересикаются с переменными которые созданы в глобальной области видимости
Допустим в ЛОВ 1 есть переменные a и c, а ЛОВ 2 есть b. И такие же переменные есть в глобальной области видимости

Переменные из ЛОВ и ГОВ это разные переменные 

Если вы определяется переменную b в ЛОВ 2 и далее пытаетесь получить доступ к значению этой переменной, то вы будете работать с переменной созданной в ЛОВ
Не с переменной из ГОВ

Если в ЛОВ 1 вы попытаетесь получить доступ к переменной b , которая не объявлена в ЛОВ 1
То будет использоваться переменная объявленная в ГОВ

Локальная область видимости создается каждый раз когда мы создаем функцию

Пример:

let a
let b

function myFn() {
    let b
    a = true
    b = 10
    console.log(b)
}
muFn()
console.log(a) // true
console.log(b) // undefined

Переменные a и b объялены в глобальной области видимости 
Переменная b объяленна в локальной области видимости внутри фунции - это локальная переменная 
- которая доступна только внутри функции
Название переменной b в ЛОВ и ГОВ совпадают

Цепочка областей видимости:
- global scoop
- myfn scoop
- innerFn scoop

const a = 5 

function myFn() {
    function innerFn() {
        console.log(a)
    }
    innerFn()
}
myFn()

У нас есть переменная a объявленная в ГОВ
Также мы объявили функцию myFn и значением переменной будет фунция 
Внутри фунции myFn мы объявили еще одну функцию innerFn она объявленна внутри фунции myFn
И каждый раз когда будет вызываться фунция myFn внутри ее будет объявлятся новая переменная которая называется innerFn

После объявления фунции innerFn в myFn мы вызываем фунцию innerFn. И делаем это внутри фунции myFn
Если мы попытаемся вызывать фунциию innerFn после myFn, то она не вызовется т.к в глобальной области такой фунции нет
Поэтому мы можем ее вызывать только внутри фунции myFn

Если мы попытаемся получить значение переменной a, то значение будет получино
Потому что JS начинает поиск в ЛОВ и если не находит переменную, поднимается на уровень выше и т.д пока не найдет
Или не выдаст ошибку

Мы можем получать значения переменных внутри ЛОВ, когда переменная была объявлена в ГОВ

Жизненный цикл переменной 'b'

let a
let b

function myFn() {
    let b
    a = true
    b = 10
    console.lgo(b) // 10
}
myFn()
console.log(a) // true
console.log(b) // undefined

1. Объявление 'b' - в глобальной области видимости. Ее значение undefined
2. Вызов myFn()
3. Объявление 'b' в зоне видимости функции
4. Объявлена ли 'b' в рамках функции? ДА. Присвоение этой переменной 'b' значения 10
5. 'b' имеет значение 10 в области видимости фунции
6. 'b' все также имеет undefined в глобальной области

Командой console.log(b) мы пытаемся найти переменную в глобальной области видимости, потому что эта команда выполнаяется в глобальной области видимости, а не в функции
Следственно мы ищем все ГОВ где находится это выражение. 'b' все также имеет значение undefined

Переменная 'b' которая создавалась в области видимости функции давно уже была удалена. Почему?
Потому что мы вызвали myFn(), она выполнила свою работу и все переменные уничтожились
Все переменные которые находились в области видимости функции myFn()

Жизненный цикл переменной 'a'

1. Объявление 'a' в глобальной области видимости. Ее значение undefined
2. Вызов функции myFn()
3. Объявлена ли 'a' в зоне видимости функции? НЕТ
4. Объявлена ли 'a' во внешней области видимости? ДА
5. Присваивание значения true глобальной переменной 'a'
Присваивая переменной 'a' внутри функции значение true. Внутри фунции интерпритарор не может найти переменную и поднимается на уровень выше
Которая находится в глобальной области видимости и ей присваивается значение которое выводится в консоль
6. Переменная 'a' имеет значение true

Почему мы ищим переменную 'a' в глобальной области видимости?
- Потому что вызов функции происходи в глобальной области видимости

Внутри функции myFn() мы изменили глобальную переменную. Внутри функции крайне не рекомендуется менять значение внешних переменных

Типы областией видимости:
- Глобальная область видимости 
- Область видимости функции
- Области видимости блока
Переменные, объявденные с помощью let и const внутри блока имеют область видимости, ограниченную этим блоком

!!!ВАЖНО. Не рекомендуется пытаться присваивать каке-то значения переменной которые не были объявленны ранее
В таком случае переменные автоматически будут созданы внутри JS в глобальной области видимости 

Параметры в функции это своего рода переменные которые получают значение в момент вызова функции

Чтобы избежать таких ситуаций используется: Строгий режим ( 'use strict' )
- Это иструкция интерпритатору JS анализировать код более пристально







*/
