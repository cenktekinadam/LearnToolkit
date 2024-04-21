import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = { tasks: [], }
const crudSlice = createSlice({
    name: "crud",
    initialState,
    reducers: {
        addTask: (state, action) => {
            //taske id ekle
            action.payload.id = v4()
            //veriyi diziye ekle
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action) => {
            //* Filter metodu yeni bir dizi döndürdüğünden performans odaklı çalışabilmemiz için Splice ile silme işlemini gerçekleştireceğiz
            //* Splice ile çalışmamız için silmemiz gereken elemanın indexini bulmamız lazım
            const index = state.tasks.findIndex((i) => i.id === action.payload)
            state.tasks.splice(index, 1)
        }, editTask: (state, action) => {
            const index = state.tasks.findIndex((i) => i.id === action.payload)
            state.tasks.splice(index, 1, action.payload)
        }
    },
})
export default crudSlice.reducer;

export const { addTask, deleteTask, editTask } = crudSlice.actions;