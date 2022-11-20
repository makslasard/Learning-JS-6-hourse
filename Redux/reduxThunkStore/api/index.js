export const client = async (endPoint, {body, ...customConfig}) => {
    const headers = {
        "Content-Type": "application/json"
    }

    const config = {
        method: body ? 'POST' : 'GET'
    }
}

// endPoint - точка входа пользователя
// {body, ...customConfig} - настройки 

/*
Обычно когда мы работаем с асинхронными запросами у нас чаще всего есть объект заголовков headers
    В headers могут быть истории связанные с авторизацией и т.д
    В базовом варианте тут живет "Content-Type"

*/