import { useState } from 'react';
import { Input } from '../Input/Input';
import { useAppDispatch } from '../../lib/hooks';
import { addTodo } from '../../store/todoSlice';

export const AddForm = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const dispatch = useAppDispatch();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTodo(inputValue));
    }
    
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <Input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Введите текст напоминания" 
          type="text"
        />
        <button>Добавить в список дел</button>
    </form>
  )
}
