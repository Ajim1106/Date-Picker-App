import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // If you need custom CSS
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
