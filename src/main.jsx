// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './router.jsx'; // make sure router.jsx exists

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);