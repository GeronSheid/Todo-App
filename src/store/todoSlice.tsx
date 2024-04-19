import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ITodo } from "../components/TodoItem/TodoItem.type";

interface ITodos {
    todoList: ITodo[];
}

const initialState: ITodos = {
    todoList: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.todoList.push({
                id: new Date().toISOString(),
                title: action.payload,
                isFulfilled: false,
            })
        },
        toggleTodo(state, action: PayloadAction<string>) {
            const todoToToggle = state.todoList.find(todo => todo.id === action.payload);
            if(todoToToggle) {
                todoToToggle.isFulfilled = !todoToToggle?.isFulfilled;
            }
        },
        deleteTodo(state, action: PayloadAction<string>) {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
        }
    }
})

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;