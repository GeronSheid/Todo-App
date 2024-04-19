import { useAppSelector } from '../../lib/hooks';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = () => {
    const todos = useAppSelector(state => state.todo.todoList);
  return (
    <div>
        {todos.length > 0 
        ?
        todos.map(todo => (
            <TodoItem
                key={todo.id}
                id={todo.id}
                isFulfilled={todo.isFulfilled}
                title={todo.title}
            />
        ))
        :
        <span>Список дел пуст...</span>
        }
    </div>
  )
}
