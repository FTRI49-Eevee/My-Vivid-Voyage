import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
// form for no data
const AddingRegionInfo = (region) => {
    const [imgInput, setImgInput] = useState('');
    const [caption, setCaption] = useState('');
    //image/file handler
    function handleImage(e) {
        setImgInput(e.target.files[0]);
    }
    const visitedData = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const formData = new FormData();
        formData.append('region', region + '');
        formData.append('image', imgInput);
        formData.append('caption', caption);
        console.log('Form submitted with region:', formData);
        try {
            const response = await fetch("/db", {
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
        console.log('HI');
    };
    return (_jsxs("form", { className: 'dataForm', onSubmit: visitedData, children: [_jsx("input", { type: 'file', name: 'picture', accept: 'image/png, image/jpeg', onChange: handleImage }), _jsx("input", { type: 'text', placeholder: 'Caption', onChange: (event) => setCaption(event.target.value) }), _jsx("input", { type: 'submit' })] }));
};
export default AddingRegionInfo;
