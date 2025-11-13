import { configureStore } from "@reduxjs/toolkit";
import additionReducer from "./reducer";

export const store = configureStore({
    reducer: additionReducer
})