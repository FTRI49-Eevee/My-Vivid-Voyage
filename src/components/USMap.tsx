// USMap.tsx
import React, { useState, useEffect, ReactElement } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import InfoContainer from './infoContainer';
import VisitedForm from './formContainer';
import Logout from './userlogs/logout';
// Import a JSON file that includes the geographical data of US states
const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

interface USMapProps {
  onStateClick?: (stateId: string) => void;
}

const USMap: React.FC<USMapProps> = () => {
  // Handle hover state for UI feedback
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [visitedRegions, setVisitedRegions] = useState<
    string[] | number | null
  >([]);
  const [regionInfo, setRegionInfo] = useState<ReactElement>(<div></div>);

  // randomize color
  const rgbRandom = (): string => {
    function rgbRand() {
      return Math.floor(Math.random() * 255);
    }
    return 'rgb(' + rgbRand() + ',' + rgbRand() + ',' + rgbRand() + ')';
  };

  const onRegionClick = async (regionId: number, regionName: string) => {
    console.log(`Clicked state with id: ${regionId}`);
    setSelectedRegion(regionName);
    await setVisitedRegions([...visitedRegions, regionId]);
    // Perform additional actions, like fetching data for the clicked state
    if (regionId % 2 == 0) {
      return setRegionInfo(<InfoContainer selectedRegion={regionName} />);
    } else {
      return setRegionInfo(<VisitedForm selectedRegion={regionName} />);
    }
  };

  // useEffect(() => {
  //   console.log(visitedRegions);
  // }, [visitedRegions]);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        {' '}
        <Logout />{' '}
      </div>
      <div className="map">
        <h1>Clickable US Map</h1>
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const regionId = geo.id;
                const regionName = geo.properties.name;

                return (
                  <Geography
                    key={regionId}
                    geography={geo}
                    onMouseEnter={() => setHoveredRegion(regionName)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => onRegionClick(regionId, regionName)}
                    style={{
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
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        {hoveredRegion && <div>Hovering over: {hoveredRegion}</div>}
      </div>
      {/* <InfoContainer selectedRegion={selectedRegion} />
      <VisitedForm region={selectedRegion}/> */}
      {regionInfo}
    </div>
  );
};

export default USMap;
