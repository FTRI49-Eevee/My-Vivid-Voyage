import { jsx as _jsx } from "react/jsx-runtime";
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';
import '../src/index.css';
createRoot(document.getElementById('root')).render(_jsx(BrowserRouter, { children: _jsx(App, {}) }));
