import { configureStore } from "@reduxjs/toolkit";

import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import pizzasSlice from "./slices/pizzaSlice";

const store = configureStore({
    reducer: {
        filter: filterSlice,
        cart: cartSlice,
        pizza: pizzasSlice
    }
})

export default store