import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
// form for no data
const AddingRegionInfo = (props) => {
    const { selectedRegion } = props;
    const [imgInput, setImgInput] = useState('');
    const [caption, setCaption] = useState('');
    //image/file handler
    function handleImage(e) {
        setImgInput(e.target.files?.[0] || null);
    }
    const visitedData = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const formData = new FormData();
        formData.append('selectedRegion', selectedRegion);
        if (imgInput instanceof File || typeof imgInput === 'string') {
            formData.append('image', imgInput);
        }
        formData.append('caption', caption);
        console.log('Form submitted with region:', formData);
        for (const pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        console.log('caption submitted with region:', caption);
        try {
            const response = await fetch('http://localhost:8080/db', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const data = await response.json();
                setImgInput('');
                setCaption('');
                console.log('Successful POST', data);
            }
            else {
                console.log('Error', response.statusText);
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    };
    return (_jsxs("form", { className: "dataForm", onSubmit: visitedData, children: [_jsx("input", { type: "file", name: "picture", accept: "image/png, image/jpeg", onChange: handleImage }), _jsx("input", { type: "text", placeholder: "Caption", onChange: (event) => setCaption(event.target.value) }), _jsx("input", { type: "submit" })] }));
};
export default AddingRegionInfo;
