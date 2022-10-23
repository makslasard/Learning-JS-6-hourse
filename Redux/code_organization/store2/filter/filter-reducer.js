import { SET_FILTER } from "./filter-const";

export const filterReducer = (state = [], action) => {
    switch(action.type) {
        case SET_FILTER: {
            return [...state]
        }


        default: {
            return state
        }
    }
}