import React from 'react';
import ReactDOM from 'react-dom/client';

import { UserProvider } from './contexts/user-context';
import { ProductsProvider } from './contexts/products-context'
import App from './App';
import { BrowserRouter } from "react-router-dom";

import './index.scss';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './contexts/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
              <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
