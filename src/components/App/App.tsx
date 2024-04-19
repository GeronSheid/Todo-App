import { AddForm } from "../AddForm/AddForm";
import { Container } from "../UI/Container/Container";
import { AppRouter } from "../../shared/AppRouter/AppRouter";

import { Header } from "../UI/Header/Header";


function App() {
  return (
    <>
      <Header/>
      <Container>
        <AddForm />
        <AppRouter />
      </Container>
    </>
  )
}

export default App
