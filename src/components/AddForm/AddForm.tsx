import { useState } from 'react';
import { Input } from '../UI/Input/Input';
import { useAppDispatch } from '../../lib/hooks';
import { addTodo } from '../../store/todoSlice';
import styles from './AddForm.module.scss';
import { Button } from '../UI/Button/Button';

export const AddForm = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useAppDispatch();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!inputValue) return
        dispatch(addTodo(inputValue));
        setInputValue('');
    }
    
  return (
    <form className={styles.addForm} onSubmit={(e) => handleSubmit(e)}>
        <Input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Введите описание задачи" 
          type="text"
        />
        <Button type='submit'>Добавить задачу</Button>
    </form>
  )
}
