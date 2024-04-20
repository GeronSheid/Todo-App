import '@testing-library/jest-dom';
import {render, screen } from "@testing-library/react";
import { TodoItem } from '../components/TodoItem/TodoItem';
import { ITodo } from '../components/TodoItem/TodoItem.type';
import store from '../store';
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
        const label = screen.getByText(todoItemProps_unfulfilled.title);
        const component = label.parentElement;
        expect(component).toBeInTheDocument();
    })
    it('Проверяем переданный текст', () => {
        render(
            <Provider store={store}>
                <TodoItem {...todoItemProps_unfulfilled} />
            </Provider>
        );
        const label = screen.getByText(todoItemProps_unfulfilled.title);
        expect(label).toHaveTextContent(todoItemProps_unfulfilled.title);
    })
})