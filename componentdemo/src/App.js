import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h4>组件</h4>
        <p>Hello {this.props.name}</p>
      </div>
    )
  }
}

export default App;
