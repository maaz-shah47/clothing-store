import React from 'react';
import ReactDOM from 'react-dom/client';

import { UserProvider } from './contexts/user-context';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import './index.scss';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
