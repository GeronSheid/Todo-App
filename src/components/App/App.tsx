import { useState } from "react"
import { Input } from "../Input/Input"


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
    </>
  )
}

export default App
