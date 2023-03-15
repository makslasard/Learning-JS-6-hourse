/*
Запись советов и фишек с интенсива по верстке - 4.03.2023

Лайфхак как ускорить верстку
    - Сначала наверстываешь костяк блока HTML с помощью сокращений Emmet
    - Стилизуешь SASS
    - Сразу используем сетку bootstrap
    

1. Чтобы вынести переменые scss в отдельный файл нужно прописать import "vars"
    - создать папку sass для хранения scss файлов
    - создать файл _vars.scss

    - импортировать переменные в главный scss файл
        @import "vars"

    - export внутри scss файла писать не нужно

2. Если шрифтов которые используются в макете нет на google fonts нужно
    взять похожий, чтобы во всех браузерах отображалось хорошо

3. favicon должен быть png 48 Х 48

4. Продвинутое использование emmet
header#header>.container>.inner_header>a.logo.>img^+.right_side_header>ul.menu_top>li*4>a^^+a.btn_simple

5. background-size: cover - чтобы картинка адаптировалась по размеру блока
    background-repeat: no-repeat - чтобы картинка не повторялась
    background-position: center - чтобы картинка была по центру
    

6. Для ограничения блока использовать max-width, а не width

7. Именновать классы с помощью нижнего подчеркивания для простоты выделения

8. Создание выпадающего меню
    - внутри li создаем новый ul на уровне a

    <ul class="menu_top">
        <li>
            <a href="#">About</a>
            <ul class="sub_menu">
                <li><a href="#">Certification</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Requisites</a></li>
                <li><a href="#">History</a></li>
            </ul>
            </li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Login</a></li>
    </ul>





























*/