import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api/api";
import { reducer as favoritesReducer } from "./favorites/favorites.slice";
import { userSlice } from "./user/user.slice";
import { createLogger } from "redux-logger";

const logger = createLogger({
    // collapsed: true,
})

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        user: userSlice.reducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>