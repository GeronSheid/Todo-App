import { TodoList } from '../../components/TodoList/TodoList'
import { AllTodos } from '../../store/todoSelectors';

export const AllTodosPage = () => {
    const todos = AllTodos();
    console.log(todos)
  return (
    <>
        <TodoList todos={todos}/>
    </>
  )
}
