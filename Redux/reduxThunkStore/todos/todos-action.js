export const ADD_TODO = 'ADD_TODO'

const addTodosAction = (todos) => ({
    type: ADD_TODO,
    payload: todos
})

export const loadTodo = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => dispatch(addTodosAction(data)))

}

