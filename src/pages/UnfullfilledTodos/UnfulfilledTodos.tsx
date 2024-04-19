import { TodoList } from '../../components/TodoList/TodoList'
import { UnfulfilledTodos } from '../../store/todoSelectors';

export const UnfulfilledTodosPage = () => {
    const todos = UnfulfilledTodos();
  return (
    <>
        <TodoList todos={todos}/>
    </>
  )
}