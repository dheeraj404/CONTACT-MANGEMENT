import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import getTheme from './theme/theme';


import '@fontsource/montserrat/400.css'; 
import '@fontsource/montserrat/500.css'; 
import '@fontsource/montserrat/700.css'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





reportWebVitals();
