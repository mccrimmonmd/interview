import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {val: 0};
  }

  update1 = () => {
    this.setState((prevState, _) => ({
      val: prevState.val + 1
    }));
  }
  update2 = () => {
    this.setState((prevState, _) => ({
      val: prevState.val - 1
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {this.state.val}&nbsp;
            <button onClick={this.update1}>+</button>
            <button onClick={this.update2}>-</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
