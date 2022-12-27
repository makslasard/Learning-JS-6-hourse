import { createSlice } from '@reduxjs/toolkit'

import {setFilter} from './Filter'

const filterSlice = createSlice({
    name: 'filter',
    initialState: 'all',
    reducer: {
        setFilter: (_, action) => {
            return action.payload
        }
    },
    extraReducer: (builder) => {
        builder
            .addCase(resetToDefault, () => {
                return 'all'
            })
    }
})

export const {setFilter} = filterSlice.actions

export const filterReducer = filterSlice.reducer