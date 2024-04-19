import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { TodoItem } from './TodoItem';
import { ITodo } from './TodoItem.type';
import store from '../../store';
import { Provider } from 'react-redux';

// const todoItemProps_fulfilled: ITodo = {
//     id: 'string',
//     title: 'Titile',
//     isFulfilled: true
// }

const todoItemProps_unfulfilled: ITodo = {
    id: 'string',
    title: 'Titile',
    isFulfilled: false
}

describe('Тесты для TodoItem', () => {
    it('Проверяем отрисовку', () => {
        render(
            <Provider store={store}>
                <TodoItem {...todoItemProps_unfulfilled} />
            </Provider>
        );
        const element = screen.getByText(todoItemProps_unfulfilled.title);
        expect(element).toBeInTheDocument();
    })
})