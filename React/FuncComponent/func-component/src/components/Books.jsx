import React, { useContext } from "react";
import { CustomContext } from "../hooks/Context";

import { Book } from './Book'

const Books = () => {
    const { books = [] } = useContext(CustomContext)

    return  (
        <div className="books">
            {
                books.map(book => {
                   return <Book key = {book.id} {...book}/>
                })
            }
        </div>
    )
}

export {Books};