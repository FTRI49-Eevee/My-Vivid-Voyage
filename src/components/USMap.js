import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// USMap.tsx
import { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import InfoContainer from './infoContainer';
import VisitedForm from './formContainer';
// Import a JSON file that includes the geographical data of US states
const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';
const USMap = () => {
    // Handle hover state for UI feedback
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [hoveredRegion, setHoveredRegion] = useState(null);
    const [visitedRegions, setVisitedRegions] = useState([]);
    // randomize color
    const rgbRandom = () => {
        function rgbRand() {
            return Math.floor(Math.random() * 255);
        }
        return ('rgb(' +
            rgbRand() +
            ',' +
            rgbRand() +
            ',' +
            rgbRand() +
            ')');
    };
    const onRegionClick = async (regionId, regionName) => {
        console.log(`Clicked state with id: ${regionId}`);
        setSelectedRegion(regionName);
        await setVisitedRegions([...visitedRegions, regionId]);
        // Perform additional actions, like fetching data for the clicked state
    };
    useEffect(() => {
        console.log(visitedRegions);
    }, [visitedRegions]);
    return (_jsxs("div", { children: [_jsx(ComposableMap, { projection: 'geoAlbersUsa', children: _jsx(Geographies, { geography: geoUrl, children: ({ geographies }) => geographies.map((geo) => {
                        const regionId = geo.id;
                        const regionName = geo.properties.name;
                        return (_jsx(Geography, { geography: geo, onMouseEnter: () => setHoveredRegion(regionName), onMouseLeave: () => setHoveredRegion(null), onClick: () => onRegionClick(regionId, regionName), style: {
                                default: {
                                    //   fill: hoveredRegion === regionName ? '#f0e68c' : '#D6D6DA',
                                    fill: visitedRegions.includes(regionId)
                                        ? rgbRandom()
                                        : '#D6D6DA',
                                    outline: 'none',
                                },
                                hover: {
                                    fill: '#FFD700',
                                    outline: 'none',
                                },
                                pressed: {
                                    fill: '#FF6347',
                                    outline: 'none',
                                },
                            } }, regionId));
                    }) }) }), hoveredRegion && _jsxs("div", { children: ["Hovering over: ", hoveredRegion] }), _jsx(InfoContainer, { selectedRegion: selectedRegion }), _jsx(VisitedForm, { region: selectedRegion })] }));
};
export default USMap;
