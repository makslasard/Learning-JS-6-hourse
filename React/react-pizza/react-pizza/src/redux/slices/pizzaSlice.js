import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, thunkAPI) => {
    const { pageCount, category, sortBy, order, search } = params
    const { data } = await axios.get(
        `https://63c03f0ce262345656fb3d97.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data
})



const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
        items: [],
        status: 'loading' // loading | success | error
    },
    reducer: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = 'loading'
            state.items = []
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchPizzas.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        },
    }
})

export const { setItems } = pizzaSlice.actions
export default pizzaSlice.reducer