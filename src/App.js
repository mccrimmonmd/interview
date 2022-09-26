import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [current, setCurrent] = useState(0);

  const increment = () => setCurrent(current + 1);
  const decrement = () => setCurrent(current - 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {current}&nbsp;
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
