import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './store/index.js';

const element = document.getElementById('root');
const root = createRoot(element);


root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
