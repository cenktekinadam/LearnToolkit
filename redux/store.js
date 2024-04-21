import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlice'
import crudReducer from './slices/crudSlice'
// ConfigureStore - createStore farkları
// 1- Varsayılan olarak Thunk kurulu Gelir
// 2- Verilen Reducerları otomatik olarak birleştirir
// 3- Devtools Eklentisi kurulu gelir
export default configureStore({
    reducer: { counterReducer, crudReducer },
})