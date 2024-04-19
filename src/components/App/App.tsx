import { useState } from "react"
import { Input } from "../Input/Input"
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { AddForm } from "../AddForm/AddForm";


function App() {

  const [inputValue, setInputValue] = useState<string>('');

  return (
    <>
      <AddForm />
      <TodoList/>
    </>
  )
}

export default App
