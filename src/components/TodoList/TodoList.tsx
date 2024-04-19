import { FC } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { IList} from '../TodoItem/TodoItem.type';
import styles from './TodoList.module.scss';




export const TodoList: FC<IList> = ({todos}) => {
    
  return (
    <div className={styles.todoList}>
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
