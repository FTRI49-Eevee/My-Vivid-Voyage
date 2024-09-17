// App.tsx
// import React, { useState, useEffect } from 'react';
import USMap from './homepage/USMap';
import './App.css'

const App: React.FC = () => {
  // const [selectedState, setSelectedState] = useState<string | null>(null);
  // const [clickedStates, setClickedStates] = useState<string[]>([]);

  // const handleStateClick = async (stateId: string) => {
  //   console.log(`Clicked state with id: ${stateId}`);
  //   setSelectedState(stateId);
  //   await setClickedStates([...clickedStates, stateId])
  //   // Perform additional actions, like fetching data for the clicked state
  // };

  // useEffect(()=> {
  //   console.log(clickedStates)
  // }, [clickedStates])

  return (
    <div>
      <h1>Clickable US Map</h1>
      <USMap/>
      {/* {selectedState && <div>Selected State: {selectedState}</div>} */}
    </div>
  );
};

export default App;

//       <USMap onStateClick={handleStateClick}/>
