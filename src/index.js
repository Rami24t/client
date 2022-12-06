import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} >
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);