
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from './store/index.tsx'
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
)
