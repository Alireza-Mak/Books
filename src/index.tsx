import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

const element = document.getElementById('root')! as HTMLDivElement;

const root = ReactDOM.createRoot(element);

root.render(<App />);
