export const client = async (endPoint, {body, ...customConfig}) => {
    const headers = {
        "Content-Type": "application/json"
    }

    const config = {
        method: body ? 'POST' : 'GET',
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers
        }
    }

    if(body) {
        config.body = JSON.stringify(body)
    }

    try {
        const response = await fetch(endPoint, config)

        if(!response.ok) throw new Error('Failed to fetch')

        const data = await response.json()

        return data 
    } catch(err) {
        return Promise.reject(err.message)
    }
}

client.get = function(endPoint, customConfig = {}) {
    return client(endPoint, customConfig)
}

client.post = function(endPoint, body, customConfig = {}) {
    return client(endPoint, {...customConfig, body})
}

client.delete = function(endPoint, customConfig = {}) {
    return client(endPoint, {...customConfig, method: 'DELETE'})
}

client.patch = function(endPoint, body, customConfig = {}) {
    return client(endPoint, {...customConfig, body, method: 'PATCH'})
}

// endPoint - точка входа пользователя
// {body, ...customConfig} - настройки 

/*
Обычно когда мы работаем с асинхронными запросами у нас чаще всего есть объект заголовков headers
    В headers могут быть истории связанные с авторизацией и т.д
    В базовом варианте тут живет "Content-Type"


Начало работы:

    1. Создадим константу которая будет называться client.
        Константа будет ассинхронной и будет выполнять какой-то набор операций 
        Мы хотим от клиента получать точку входа endPoint, и какие-то настройки

        С точки зрения настроек это будет объект с какими-то данными.
        Мы можем его поместить в параметры как отдельную переменную

        В данном случае мы помещаем туда переменную body, и все остальное если что-то есть 
            попадет в ...customConfig

    2. Обычно когда мы работаем с ассинхронными запросами у нас чаще всего есть объект заголовков headers
        Внутри headers могу быть истории связанные с авторизацией и т.д 
        В базовом варианте тут живут "Content-Type". 

        И т.к мы работаем с JSON мы напишем в "Content-Type": "application/json"
        Мы хотим добавлять данный headers во все запросы, а в остальные мы получим чер параметры

    3. Для fetch мы подготовим некоторый config
        Во первых мы будет определять метод. Есть ли в нем body
        Если он у нас уже есть мы будем говорить 'POST'
        Потому-что на GET запросе body у нас никаго нет
        Если body нет, то будет обычный GET запрос. Запросов у нас может быть больше
        Для этого мы смотрим базовую историю, которая может быть переопределена в ...customConfig
        Если мы передадим метод ...customConfig в config, то мы его перезапишем 
        А перезапишем с помощью spead ...customConfig

    4. Далее нам нужно определить headers.
        Мы будем использовать все headers которые мы определили в const headers выше
        Все ...headers которые мы установим всегда обязательные 
        И дополнительно если пользователь установил в ...customConfig тоже какие-то headers, 
            то мы их тоже определим в ...customConfig.headers

    5. Дополнительно мы делаем проверку на случай если body у нас все-таки есть
        Тогда нам нужно подготовить body к отправке на сервер
        На сервер могут уходить данные только в формате JSON: 

        if (body) {
            config.body = JSON.stringify(body)
        }

    6. Далее мы делаем try/catch с попыткой сделать ту самую синхронную опрерацию
        Мы создаем переменную response которая ожидает ответа от сервера
        Ответ от сервера будет по тому адресу который мы передадим endPoint
        И тем config который мы передадим 

        При этом response может быть не самый хороший. У нас в response есть ключ ok
        response.ok у нас может быть false
        Если что-то пошло не так, то мы обычно хотим в приложении об этом узначть
        Поэтому будем выбрасывать ошибку

        Если мы смогли нормально все загрузить, то мы разбираем полученную информацию на json
        И полученные данные возвращаем во внешний мир
        Если мы выбросили ошибку, мы должны ее обрабатывать
        Т.е мы возвращаем не конкретные данные, а Promise.reject()
        Мы передаем ошибку во внешний код чтобы мы в catch могли ее поймать и задействовать в приложении

Это базовый вариан клиента который может быть усложнен










*/