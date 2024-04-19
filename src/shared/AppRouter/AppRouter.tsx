import { Route, Routes } from 'react-router-dom'
import { AllTodosPage } from '../../pages/AllTodos/AllTodos';
import { FulfilledTodosPage } from '../../pages/FulfilledTodos/FullFilledTodos';
import { UnfulfilledTodosPage } from '../../pages/UnfullfilledTodos/UnfulfilledTodos';

interface IRoute {
    path: string;
    element: JSX.Element;
    suspenseElement?: JSX.Element;
}

const routes: IRoute[] = [
    {path: '/', element: <AllTodosPage/>},
    {path: '/done', element: <FulfilledTodosPage/>},
    {path: '/undone', element: <UnfulfilledTodosPage/>}
]

export const AppRouter = () => {


  return (
    <Routes>
        {routes.map(route => 
            <Route
                key={route.path}
                path={route.path}
                element={route.element}
            />
        )}
    </Routes>
  )
}
