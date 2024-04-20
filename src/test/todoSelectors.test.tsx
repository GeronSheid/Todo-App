import '@testing-library/jest-dom';
import store from '../store';
import { addTodo } from '../store/todoSlice';
import { render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { AllTodos, FulfilledTodos, UnfulfilledTodos } from '../store/todoSelectors';
import { FC } from 'react';

describe('Тесты для todoSelectors', () => {
    it('AllTodos должен возвращать все задачи', () => {
        store.dispatch(addTodo('test1'));
        const TestComponent: FC = () => {
            const todos = AllTodos();
            return (
                <div data-testid='test-id'>
                    {todos[0].title}
                </div>
            )
        }
        render(
            <Provider store={store}>
                <TestComponent />
            </Provider>
        )
        const div = screen.getByTestId('test-id');
        expect(div).toHaveTextContent('test1');
    })
    it('UnfulfilledTodos должен возвращать невыполненные задачи', () => {
        store.dispatch(addTodo('test2'));
        const TestComponent: FC = () => {
            const todos = UnfulfilledTodos();
            console.log(todos)
            return (
                <div data-testid='test-id'>
                    {todos.length}
                </div>
            )
        }
        render(
            <Provider store={store}>
                <TestComponent />
            </Provider>
        )
        const div = screen.getByTestId('test-id');
        expect(div).toHaveTextContent('2');
    })
    it('FulfilledTodos должен возвращать невыполненные задачи', () => {
        const TestComponent: FC = () => {
            const todos = FulfilledTodos();
            console.log(todos)
            return (
                <div data-testid='test-id'>
                    {todos.length}
                </div>
            )
        }
        render(
            <Provider store={store}>
                <TestComponent />
            </Provider>
        )
        const div = screen.getByTestId('test-id');
        expect(div).toHaveTextContent('0');
    })
})