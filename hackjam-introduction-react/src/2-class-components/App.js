import React from 'react';

class Counter extends React.Component {
  // TODO 1: initialize the state with an object containing a "value" property
  state = { counter: 0 };

  // TODO 2: implement the increment and decrement function
  increment = () => {
    this.setState ({
        counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        {/** TODO 3: Attach the increment and decrement functions to the on click Events of the buttons **/}
        <button onClick={this.increment}>+</button>
        {this.state.counter}
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export class App extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <h1>Im a class component!</h1>
        {/** TODO: Use the Counter component**/}
        <Counter/>
      </div>
    );
  }
}
