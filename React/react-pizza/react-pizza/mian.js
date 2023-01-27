/*
Подходы в разработке JS/React/Redux/TypeScript 

    1. SCSS и модульная разработка
        - использование модулей это современный формат работы с стилями

        Важно установить в проект зависимости sass и проверить пути файлов


    2. Сортировка и фильтрация

        - реализованы с помощью связывания двух компонентов Sort и Category в Home
        и передачи индексов и объекта

    3. Контролируемый input
        - передавать value

        <input
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            className={style.input}
            placeholder="Поиск пиццы..."
        />

    4. Передача props вниз по дереву

    5. Реализация поиска
        - происходит с помощью фильтраци если массив статический, если нет работа через backend

        const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue)) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

    6. Классы из библиотек
        - чтобы использовать классы из библиотек нужно использовать :global и поместить внутрь все классы
    
        .root {
            :global {
                .previous {
                background-color: red;
                }
            }
        }




*/