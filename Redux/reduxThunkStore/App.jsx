import {useEffect} from 'react'

import { useDispatch } from 'react-redux'

import { loadUser } from './users/users-action'
import { loadTodo } from './todos/todos-action'

function App() { 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser()),
        dispatch(loadTodo())
    }, [dispatch])

    return (
        <>
            <div className='App'>
                <h1>Hello form Redux thunk</h1>
                <UserList />
                <TodoList />
            </div>
        </>
    )
}

export default App