import React, { createContext, useState } from "react";

export const CustomContext = createContext()

export const Context = (props) => {
    const [books, setBooks] = useState([
        {id: 1, title: 'JavaScript'},
        {id: 2, title: 'React'},
        {id: 3, title: 'Redux'}
    ])

    const addBooks = (book) => {
        setBooks([...books, book])
    }

    const removeBooks = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    const value = {
        books, 
        addBooks,
        removeBooks
    }

    return  <CustomContext.Provider value = {value}>
        {props.children}
    </CustomContext.Provider>
}