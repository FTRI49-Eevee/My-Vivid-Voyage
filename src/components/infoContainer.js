import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
// import React from 'react';
//functionality to determine if we visited state or not
function InfoContainer(props) {
    const { selectedRegion } = props;
    // function getPicture(selectedRegion){
    //fetch('/state)
    // }
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["Info about ", selectedRegion, " will go here!"] }), _jsx("img", { src: 'https://i0.wp.com/www.projectwhim.com/wp-content/uploads/2021/06/FA2A7F05-FABD-4035-A2EC-8E9995EDB30Eedit.jpg?fit=800%2C800&ssl=1' }), _jsx("div", { children: _jsxs("p", { children: [' ', selectedRegion, " was so fun because blah blah blah. I can't wait to go back blah blah blah."] }) })] }));
}
export default InfoContainer;
