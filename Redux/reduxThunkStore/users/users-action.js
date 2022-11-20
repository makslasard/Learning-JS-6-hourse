export const ADD_USERS = 'ADD_USERS'

const addUsersAction = (users) => ({
    type: ADD_USERS,
    payload: users // payload - это все сопроводительные данные
})

export const loadUser = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()) // Как только данные будет получены разбери их на JSON
        .then(data => dispatch(addUsersAction(data)))
}       