
import ReactDOM from 'react-dom/client'
import App from './components/App/App.tsx'
import { Provider } from 'react-redux'
import store from './store/index.tsx'
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
