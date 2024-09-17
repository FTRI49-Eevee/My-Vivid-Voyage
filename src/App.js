import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// import { useState } from 'react';
// import reactLogo from '../src/assets/react.svg';
// import viteLogo from '../src/public/vite.svg';
import USMap from './components/USMap';
import './App.css';
function App() {
    // const [count, setCount] = useState(0);
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx("h1", { children: "Clickable US Map" }), _jsx(USMap, {})] }) }));
}
export default App;
