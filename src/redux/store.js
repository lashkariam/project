import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import resultReducer from "../features/Search/searchSlice"
import rootSaga from "./rootSaga";
import pageReducer from "../features/page/pageSlice"

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer:{
        result: resultReducer,
        page:pageReducer,
    },
    middleware:[sagaMiddleware,]
});

sagaMiddleware.run(rootSaga);