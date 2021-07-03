import React, { Component } from "react";
import MyComponent from "./MyComponent";
import "./App.css";

class App extends Component {
  state = { age: 24 };
  buttonHandler = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };
  render() {
    return (
      <div className="App">
        <MyComponent age={this.state.age} />
        <button className="Button" onClick={this.buttonHandler}>
          Happy Bithday!
        </button>
      </div>
    );
  }
}

export default App;
