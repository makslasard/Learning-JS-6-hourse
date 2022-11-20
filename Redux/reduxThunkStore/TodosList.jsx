import {useSelector} from 'redux'

const TodosList = () => {
    const todos = useSelector(state => state.todos)

    return (
        <>
            <div>
                Todos: {todos.length}
            </div>
        </>
    )
}

export default TodosList