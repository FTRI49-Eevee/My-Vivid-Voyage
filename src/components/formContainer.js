import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React from 'react'
// form for no data
const addingRegionInfo = (region) => {
    const visitedData = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('Form submitted with region:', region);
        // fetch('/visited', {
        //   method: "POST",
        // })
        console.log('HI');
    };
    return (_jsxs("form", { className: 'dataForm', onSubmit: visitedData, children: [_jsx("input", { type: 'file', id: 'avatar', name: 'avatar', accept: 'image/png, image/jpeg' }), _jsx("input", { type: 'text', placeholder: 'Caption' }), _jsx("input", { type: 'submit' })] }));
};
export default addingRegionInfo;
