import { useAppSelector } from "../lib/hooks";

export const AllTodos = () => {
    return useAppSelector(state => state.todo.todoList)
}

export const FulfilledTodos = () => {
    const todos = useAppSelector(state => state.todo.todoList);
    return todos.filter(todo => todo.isFulfilled);
    
}

export const UnfulfilledTodos = () => {
    const todos = useAppSelector(state => state.todo.todoList);
    return todos.filter(todo => !todo.isFulfilled);
}

