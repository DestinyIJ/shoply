import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

import { persistStore } from "redux-persist"

const middlewares = []

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}

export const store = configureStore({
    reducer: rootReducer, 
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(...middlewares),
    // middleware: middlewares
})

export const persistor = persistStore(store)

