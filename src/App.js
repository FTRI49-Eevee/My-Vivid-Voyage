import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import USMap from './components/USMap';
import './App.css';
function App() {
    return (_jsx(_Fragment, { children: _jsxs("div", { children: [_jsx("h1", { children: "Clickable US Map" }), _jsx(USMap, {})] }) }));
}
export default App;
