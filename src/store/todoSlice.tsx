import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ITodo {
    id: string,
    title: string,
    isFulfilled: boolean
}

const initialState: ITodo[] = []

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.push({
                id: new Date().toISOString(),
                title: action.payload,
                isFulfilled: false,
            })
        },
        toggleTodo(state, action: PayloadAction<string>) {
            const todoToToggle = state.find(todo => todo.id === action.payload);
            if(todoToToggle) {
                todoToToggle.isFulfilled = !todoToToggle?.isFulfilled;
            }
        },
        deleteTodo(state, action: PayloadAction<string>) {
            state.filter(todo => todo.id !== action.payload);
        }
    }
})

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;