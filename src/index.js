import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

console.log(process.env.REACT_APP_API_KEY);
console.log(process.env.REACT_APP_API_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);