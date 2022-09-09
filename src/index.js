import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { ProductsProvider } from './contexts/products-context'
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { store } from './store/store'

import './index.scss';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './contexts/cart-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
