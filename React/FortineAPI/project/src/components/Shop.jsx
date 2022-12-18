import {useState, useEffect} from 'react';

import {API_URL, API_KEY} from '../config'

import Preloader from './Preloader';

const Shop = () => {
    const [goods, setGoods] = useState([]) // Товары и список товаров
    const [loading, setLoading] = useState(true) // Статус загрузки товаров

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            }
        }).then(responce => responce.json())
          .then(data => {
            data.featured && setGoods(data.featured) 
            setLoading(false)
          })
            
    }, [])
    /* fetch() имеет 2 параметра 1 - это ссылка для GET запроса, 2 - это headers заголовки
    
    headers идет в формате объекта, и для работы с базой должен принимать уникальный ключ чтобы получить
        доступ до данных. Нужный header - это Authorization: и получает в качестве ключа API_KEY
        в который мы положили заранее уникальный ключ доступа к базе
    
    
    */


    return (
        <>
            <main className="container content">
                {
                    loading ? <Preloader /> : goods
                }
            </main>
        </>
    )
}

export default Shop