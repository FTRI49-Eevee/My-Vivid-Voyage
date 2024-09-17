import USMap from './components/USMap';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1>Clickable US Map</h1>
        <USMap />
        {/* {selectedState && <div>Selected State: {selectedState}</div>} */}
      </div>
    </>
  );
}

export default App;
