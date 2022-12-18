import React, {useContext} from "react";
import { CustomContext } from "../hooks/Context";

const Book = (props) => {
    const {removeBooks} = useContext(CustomContext)

    return (
        <>
            <h2 onClick={removeBooks(props.id)}>{props.title}</h2>
        </>
    )
}

export {Book}