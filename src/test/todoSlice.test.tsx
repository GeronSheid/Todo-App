import '@testing-library/jest-dom';
import todoSlice, { addTodo, deleteFulfilledTodos, deleteTodo, toggleTodo } from '../store/todoSlice';
import type { ITodo } from '../components/TodoItem/TodoItem.type';

describe('Тесты для todoSlice', () => {
    it('addTodo должен добавлять новые задачи', () => {
        const text = 'text';
        const prevState = {todoList: []};
        const nextState = todoSlice(prevState, addTodo(text));
        expect(nextState.todoList).toHaveLength(1);
        expect(nextState.todoList[0].title).toBe(text);
        expect(nextState.todoList[0].isFulfilled).toBe(false);
    })
    it('toggleTodo должен менять статус задачи по id', () => {
        const todo: ITodo = {id: 'id', title: 'title', isFulfilled: false};
        const prevState = {todoList: [todo]};
        const nextState = todoSlice(prevState, toggleTodo('id'));
        const thirdState = todoSlice(nextState, toggleTodo('id'));
        expect(nextState.todoList[0].isFulfilled).toBeTruthy();
        expect(thirdState.todoList[0].isFulfilled).toBeFalsy();
    })
    it('deleteTodo должен удалять задачу по id', () => {
        const todo: ITodo = {id: 'id', title: 'title', isFulfilled: false};
        const prevState = {todoList: [todo]};
        const nextState = todoSlice(prevState, deleteTodo('id'));
        expect(nextState.todoList).toHaveLength(0);
    })
    it('deleteFulfilledTodos должен удалять выполненные задачи', () => {
        const prevState = {todoList: [
            {id: 'id1', title: 'title1', isFulfilled: false},
            {id: 'id2', title: 'title2', isFulfilled: true},
            {id: 'id3', title: 'title3', isFulfilled: false},
            {id: 'id4', title: 'title4', isFulfilled: true},
            {id: 'id5', title: 'title5', isFulfilled: false}
        ]}
        const nextState = todoSlice(prevState, deleteFulfilledTodos());
        expect(nextState.todoList).toHaveLength(3);
        expect(nextState.todoList[1].id).toBe('id3');
        expect(nextState.todoList[2].id).toBe('id5');
    })
})