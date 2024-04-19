import { useState } from "react"
import { Input } from "../Input/Input"
import { TodoItem } from "../TodoItem/TodoItem";


function App() {

  const [inputValue, setInputValue] = useState<string>('');

  return (
    <>
      <div>
        <h1>Todo list</h1>
        <Input 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Введите напоминание" 
          type="text"
        />
      </div>
      <TodoItem />
    </>
  )
}

export default App
