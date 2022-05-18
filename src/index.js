import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from '~/Components/GloabaStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = 'https://tiktok.fullstack.edu.vn/api/';
root.render(
    //<React.StrictMode>
    <GlobalStyle>
        <App />
        <ToastContainer />
    </GlobalStyle>,
    //</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
