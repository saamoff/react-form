import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login/login.jsx'
import Success from './pages/Success/success.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/success' element={<Success/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
