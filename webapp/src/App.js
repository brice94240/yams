import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [test, setTest ] = useState([])

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:3002/login")
      .then((res) => res.json())
      .then((data) => setTest(data))
      .catch((err) => console.error("Error is:", err))
  }
  return (
    <div className="App">
      <h2>T'es ici </h2>
      <button onClick={getData}>Click ici</button>
    </div>
  );
}

export default App;
