// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import { LanguageProvider } from './Components/language/Language';
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
    <React.StrictMode>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </React.StrictMode>,
document.getElementById('root')
);

reportWebVitals();
