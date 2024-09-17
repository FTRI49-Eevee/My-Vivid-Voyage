// import { useState } from 'react';
// import reactLogo from '../src/assets/react.svg';
// import viteLogo from '../src/public/vite.svg';
import USMap from './components/USMap';

import './App.css';

function App() {
  // const [count, setCount] = useState(0);

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

// <div>

//         <a href='https://vitejs.dev' target='_blank'>
//           <img src={viteLogo} className='logo' alt='Vite logo' />
//         </a>
//         <a href='https://react.dev' target='_blank'>
//           <img src={reactLogo} className='logo react' alt='React logo' />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className='card'>
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className='read-the-docs'>
//         Click on the Vite and React logos to learn more
//       </p>
