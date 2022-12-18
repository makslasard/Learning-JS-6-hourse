/*
TailwindCSS:
    - это CSS фреймворк который предлагает обширный каталог классов и инструментов для облегчения 
        стилизации сайтов и приложений

    Его основная особенность заключаеться в том что вместо традиционного использования одного класса который
        содержит набор свойств фреймворк прелагает класс которому соответствует одно свойство

        Причем наборы классов, префиксов и суффиксов которые предлогает Tailwind интуитивно понятны,
        просты для чтения и понимания

        Для IDE и редакторов кода есть удобное расширение автозамены


Начало работы:

1. Установка
    - Использование через CDN: <script src="https://cdn.tailwindcss.com"></script>

2. Подготовка окружения:
    - npm i -D tailwindcss postcss

    postcss - это процессор css преобразующий исходный css файл в модифицированный
        с помощью плагинов

3. Создаем файл конфигурации для фреймворка tailwindcss
    npx tailwindcss init - команда для создания конфигурационного файла

    В нем нам понадобиться изменть поле content

    Где мы определим:
        - путь до файлов которые будут использовать tailwind

4.Созаем папку src внутри которой добавляем файл main.css - это корневой файл стилей

5. В внутрь файла main.css используя дерективу tailwind нужно подключить 3 элемента

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    Это 3 основные элементы которые обязательно должны быть подключены в проект

6. Последнее что осталось сделать это написать скрипт который будет преобразовывать исходный css файл
    в готовый. 

    В файле package.json в разделе scripts

    "scripts": {
    "build": "tailwindcss build"
    },

    Дальше нужно указать входной и выходной файлы
    1. Входной файл помечаеться флагом i или input
        Входным файлом будет main.css который будет в папке src
        -i src/main.css
    2. Выходной файл помечаеться флагом -o или output
        -o public/styles.css

    Полная запись

    "scripts": {
    "build": "tailwindcss build -i src/main.css -o public/styles.css"
    },

7. Теперь чтобы у нас появилась папка public нужно написать npm run build

!!! Важно: 
    - TailwindCSS и PostCSS при написании классов в index.html builds в styles.css
        При написании классов стили могут не срабатывать. Т.к чтобы сработали стили нужно: npm run build   
        Это называеться механизм генерации

        Чтобы каждый раз не перезапускать генерацию стилей в ручную нужно добавить флаг --watch

Tailwind это современный вариант фреймворка в котором под капотом есть css переменные и даже аутопрефиксер
Это только часть функционала который идет из коробки и не требует дополнительных настроек


Шрифты и цвета:

header>a{webDev}+nav>ul>li*3>a[href="#"] - создание нескольких элементов

Также чтобы не копировать много одинаковых стилей на одни и теже элементы можно задать
    нужные стили для родительского элемента и стили унаследуются к дочерним

Отступы и границы:
    - для работы с отступами есть специальные класс p (padding) и m (margin)

Если добавить букву x и y отступы будут производиться по осям
y - сверху и снизу
x - слева и справа

Декорирование:
    - некоторые свойства работают только в совокупности свойств

Decoration - для !возможно для подчеркивания?

underline-offset-2 - по логике должно отступать от текста при наведении, но что-то не работает

Работает вот так: hover:underline underline-offset-8
Нужно включить свойство underline


Кнопки buttons:

border-2 - задаем границу вокруг кнопки
rounded-md - скругление уклов 
border-cyan-700 - определение цвета обводки

Тень: Первым классом обозначаем размер, а вторым цвет
shadow-md - позволяет определить размер тени

Можно изменять стандартные браузерные методы для доступности при переключении с помощью tab
focus:outline-none focus:ring focus:ring-violet-300

rounded-l-lg - скругление слева. Левый верний - левый нижний. lg - размер скругления
rounded-r-lg - скругление справа. Правый верхний - правый нижний


Дерективы:
    - Так в tailwind есть много дублирующего кода и из за этого код сложно читать
        Для решения данной проблемы нам подойдет деректива apply

    Apply - с помощью данной дерективы блок классов который отвечает за стилизацию определенного элемента
        может быть вынесен в отдельный css файл
        
    Выносим в отдельный файл часто используемые повторяющиеся стили для каких-то компонентов
        и объединяем их в 1 кастомный класс. Далее применяем этот класс вместо полотна классов    

Дерективу лучше использовать с большим колличеством классов которые реально трудно поддерживать

@layer - для переопределения стилей

@layer component {
    .pagination {
        ...стили
    }
}

Иконки
    - из коробки у tailwind нет иконок 

    Для иконок мы будем использовать сервис heroicons

heroicons - это коллекция svg иконок которая разработана как дополнение для tailwind
    Из плюсов что дополнительно устанавливать иконки в проект не потребуется 
    Все что нужно сделать это скопировать блок разметки и вставить его в проект 


Сеточный макет:
    - для построения макета с помощью сеток

Основные концепции на которых базируются построение сетки и layout:
    1. Ширина (Width) - 
    2. Пространство (Space) - когда мы задаем колонки которые должны идти в ряд между ними мы 
        должны добовлять некоторое расстояние. Это нужно для того чтобы колоночный контент не слипался

        В большинстве случаев определяеться как space-x-0 с каким-то значением

Чтобы использовать сетку нужно применить свойство например w-1/3
    Это свойство делит доступное пространство на 3 части по 33%
    Также есть возможность делить на 4 части, 5, 6, 7, 8, 9, 10, 11, 12 частей

Также если есть необходимость можно изменять размеры колонок

w-3/5 - блок будет занимать 3 блока из 5

Также можно ограничивать размеры страницы на большом экране 
max-w-screen-xl mx-auto

relative - относительно которого будет позиционирование
absolute - добавляеться дочернему элементу 
overflow-hidden - обрежем все что будет выходить за его пределы

Цвет блока может не появляться из за отсутствия свойства inline-block

space-x-2 - сделать расстояние между блоками по типу gap


Градиенты:
    - это плавный переход между минимум 2 цветами

Чтобы использовать градиет используеться специальный класс bg-gradient
    После чего указываеться суффикс to и определяеться направление tr / bl

    t - top, r - right, b - bottom, l - left 

bg-gradient-to-r - направление градиента слева на право
bg-gradient-to-l - направление градиента справа на лево 

Далее нужно задать минимум 2 цвета с помощью приставок from и to
from - с какого градиента цвет начинается
to - каким цветом заканчивается

bg-gradient-to-r from-red-500 to-blue-500

hover:to-green-500 - при наведении цвет to меняется на зеленый

bg-gradient-to-tr - изменение направления градиента в верхний правый угол

Если градиент из 3 цветов, то используется приставка via - промежуточный цвет
bg-gradient-to-r from-red-500 via-purple-500 to-blue-500

hover:via-purple-500/50 - через дробную черту пишеться прозрачность в процентах


Отзывчивый макет: Mobile Frendly
    - в tailwind есть набор модификаторов классов которые вводят основные blreack points

'sm' - 640px @media (min-width: 640px) {...}
https://tailwindcss.com/docs/responsive-design

Tailwind по умолчанию использует Mobile First подход
    Т.е перестройка макета идет от Mobile к Desktop

Поэтому изначальная навигация скрываеться с помощью hidden
class="hidden md:flex items-center"

Отзывчивый макет делаеться с помощью модификаторов sm, md, lg, xl, 2xl
Для изменения элементов нужно добавлять sm: и классы которые применяться на разрешении sm(640px)

w-full - полная ширина контейнера


Картинки: Image
    - чтобы картинка не изменялась при адаптиве нужно написать object-cover


Плавные переходы: Transitions
    - основным классом который добавляет переход является transition

    У него может быть определенное значение по типу opacity, color, shadow и т.д
    В этом случае переход будет применятся только для выбранного свойства

    Можно использовать суффикт all: transition-all
        Это универсальное свойство которое анимирует все свойства изменяющие свое значение

    Класс duration (длительность)
        - он определяет сколько секунд будет длиться переход
        Например duration-1000 изменение в течении 1 секунды

    transition-all duration-300

    Класс ease - эквивалентно свойству transition timing function
        С помощью него можно установить тип анимации
            1. Будет ли она одинакова по всей длительности
            2. Быстрая вначале медленная вконце 
            3. Медленная вначале и быстрая вконце

    Класс delay - задержка
        При его установке плавный переход выполниться по истечении какого-то времени в милесекундах
        delay-1000 переход осуществляется через 1 секунду

object-cover - свойство чтобы изображение изменялось пропорционально


Темная тема:
    - популярная история для использования светлой и темной темы (небольшой хайп)

Добавляеться darkMode с значением class в tailwind.config.js
    - данный флаг нам понадобиться чисто для разработки

На тег html вешаем класс dark
На body вешаем класс по умолчанию и класс dark
И для каждого элемента прописываем классы которые должны будут применяться при переключении темы

Также если ты работаешь через директивы, то можно просто добавить класс дарк к классу @apply

Нужно изменять элементы которые плохо видны

dark:text-white

Если в одном классе больше чем 1 свойство для темной темы

dark:text-white dark:bg-purple-500
dark:hover:bg-indigo-500 - эфект наведения в темной тем

module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

добавление шрифтов и темной темы

Если после стилизации удалить из module.exports - darkMode он останеться на системном уровне



Пользовательские настройки: (Customization)
    - конфигурирование проекта и пользовательские настройки

footer к низу страницы

Весь контент который не относиться к header и footer мы помещаем в div обертку
Теперь этот div является главной оберткой и для него устанавливаем класс h-screen (100vh)

Если нужного значения нет, классы могут быть указаны:
    grid-rows-[auto_1fr_auto] - квадратные скобки

Но можно использовать config.tailwind.js чтобы создать самостоятельно нужный класс

module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
      colors: {
        'logo-main': '#0998b6'
      },
      fontFamily: {
    'main': ['Monserrat'] 
      },
    },
  },
  plugins: [],
}

gridTemplateRows - это свойство которое отмечает за соответствующий класс
layout - это имя по которому мы можем использовать суффикс для класс

С помощью данного подхода можно не использовать квадратные скобки и заменить своим классом
    grid-rows-layout

Все свойства которых нет из коробки можно самостоятельно добавить

logo-main - это суффикс по которому будет доступен кастомный цвет

Чтобы добавить шрифт нужно с помощью @import импортировать ссылку в файл main.css с директивами

@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap');


И в файле tailwind.confing.js в extend - fontFamily

fontFamily: {
    'main': ['Monserrat'] 
}

И применить на тег body

npx tailwind init --full - config tailwind с всеми классами


*/
