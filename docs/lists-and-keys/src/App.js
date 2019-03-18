import React, { Component } from 'react';

class NumberList  extends Component {
  render(){
    return (
      <ul>
        {this.props.numbers.map( (item,index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }
}

const numbers = [1, 2, 3, 4, 5];

class App extends Component {
  render() {
    return (
      <div className="App">
        <NumberList numbers={numbers}></NumberList>
      </div>
    );
  }
}

export default App;
