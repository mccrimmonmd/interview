import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  const increment = () => setNum(current => current + 1);
  const decrement = () => setNum(current => current - 1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {num}&nbsp;
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
