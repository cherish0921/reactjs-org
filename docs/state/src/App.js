import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {date: new Date().toLocaleString()}
  }
  render(){
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {this.state.date}</h2>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Clock></Clock>
    );
  }
}

export default App;
