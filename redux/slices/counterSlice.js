/* Hem Reducerı hemde reducerın aksiyonlarını 
*createSlice methodu ile tek seferde tanımlıyacapız */

/*
! Slice oluşturma
* name: slice ismi
* initialState Başlagıç stati
* Reducers : Aksiyonların Görevini tanımladığımız fonskiyonları ifade eder
  */

import { createSlice } from "@reduxjs/toolkit"
const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0, isDarkThem: true, },
    reducers: {
        increace: (state, action) => {
            state.count++;

        },
        decreace: (state, action) => {
            state.count--;

        },
        setCount: (state, action) => {
            state.count = action.payload;
        },
        toggleTheme: (state) => {
            state.isDarkThem = !state.isDarkThem
        }

    }
})
export default counterSlice.reducer;
export const { increace, decreace, setCount, toggleTheme } = counterSlice.actions;