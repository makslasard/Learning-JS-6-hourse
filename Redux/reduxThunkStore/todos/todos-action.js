import {client} from '../api/index'

export const ADD_TODO = 'ADD_TODO'

const addTodosAction = (todos) => ({
    type: ADD_TODO,
    payload: todos
})

export const loadTodo = () => (dispatch) => {
    client.get('https://jsonplaceholder.typicode.com/todos', {})
        .then(data => dispatch(addTodosAction(data)))
        .catch(err => console.error(err))
}

