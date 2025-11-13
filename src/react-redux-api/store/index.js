import { combineReducers } from "redux";
import ToDoReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    ToDoReducer
});

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(thunk)
})