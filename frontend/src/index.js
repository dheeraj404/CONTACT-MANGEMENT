import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import getTheme from './theme/theme';

// Import Montserrat font with desired weights
import '@fontsource/montserrat/400.css'; // Regular
import '@fontsource/montserrat/500.css'; // Medium
import '@fontsource/montserrat/700.css'; // Bold
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
