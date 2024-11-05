import { useState, useEffect } from 'react'
import { data } from '../data/randomData/module-data.js';
import PersonProfile from '../components/PersonProfile.jsx';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

function Lab1() {
    const [count, setCount] = useState(0)
    const [profiles, setProfiles] = useState([]);
  
    useEffect(() => {
      setProfiles(data); // Set profiles from imported data
  }, []);

  return (
    <>
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
            <h1>Vite + React</h1>
            <div className="profiles">
                {profiles.map(person => (
                    <PersonProfile key={person.id} person={person} />
                ))}
            </div>
        </div>
        </>
  );
}

export default Lab1;
