import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/css/imports.css';
import App from './Components/App';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<App />} />
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
