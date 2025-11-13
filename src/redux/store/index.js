import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AdditionReducers from "./reducer";

const rootReducer = combineReducers({
    AdditionReducers
})

export const store = configureStore({
    reducer: rootReducer
})
