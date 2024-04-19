import { FC } from 'react'
import { Checkbox } from '../Checkbox/Checkbox'
import type { ITodo } from './TodoItem.type';
import { useAppDispatch } from '../../lib/hooks';
import { deleteTodo, toggleTodo } from '../../store/todoSlice';
import styles from './TodoItem.module.scss';

export const TodoItem: FC<ITodo> = ({...props}) => {
    const dispatch = useAppDispatch();

    const handleToggle = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(toggleTodo(props.id))
    }

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(deleteTodo(props.id))
    }

  return (
    <div className={styles.todoItem}>
        <Checkbox checked={props.isFulfilled} id={props.id} onClick={handleToggle}/>
        <label htmlFor={props.id}>{props.title}</label>
        <button onClick={(e) => handleDelete(e)} type='button'>
            &#10006;
        </button>
    </div>
  )
}
