import { TodoList } from '../../components/TodoList/TodoList'
import { FulfilledTodos } from '../../store/todoSelectors';

export const FulfilledTodosPage = () => {
    const todos = FulfilledTodos();
  return (
    <>
        <TodoList todos={todos}/>
    </>
  )
}