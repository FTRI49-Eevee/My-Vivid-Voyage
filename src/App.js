import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import USMap from './components/USMap';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './components/userlogs/login';
import Signup from './components/userlogs/signup';
function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Login, {}) }), _jsx(Route, { path: '/login', element: _jsx(Login, {}) }), _jsx(Route, { path: '/home', element: _jsx(USMap, {}) }), _jsx(Route, { path: '/signup', element: _jsx(Signup, {}) })] }));
}
export default App;
