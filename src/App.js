import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current: 0};
  }

  increment = () => {
    this.setState((prevState, _) => ({
      current: prevState.current + 1
    }));
  }
  decrement = () => {
    this.setState((prevState, _) => ({
      current: prevState.current - 1
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {this.state.current}&nbsp;
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
