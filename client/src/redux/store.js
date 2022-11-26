import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
import { persistStore } from "redux-persist"

const SagaMiddleware = createSagaMiddleware()

const middlewares = [SagaMiddleware]

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}

export const store = configureStore({
    reducer: rootReducer, 
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        thunk: false
    }).concat(...middlewares),
})

SagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

