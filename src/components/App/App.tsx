import { TodoList } from "../TodoList/TodoList";
import { AddForm } from "../AddForm/AddForm";
import { Container } from "../Container/Container";


function App() {
  return (
    <>
      <Container>
        <AddForm />
        <TodoList/>
      </Container>
    </>
  )
}

export default App
