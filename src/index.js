import React from 'react';
import ReactDOM from 'react-dom/client';
import './Fonts/Poppins-Bold.ttf';
import './Fonts/Poppins-Regular.ttf';
import './Fonts/Poppins-Medium.ttf';
import './Fonts/Poppins-Light.ttf';
import './Fonts/Poppins-SemiBold.ttf';
import './Fonts/PlayfairDisplay-Bold.ttf';
import './Fonts/PlayfairDisplay-Medium.ttf';
import './Fonts/PlayfairDisplay-MediumItalic.ttf';
import './Fonts/PlayfairDisplay-Regular.ttf';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
