/**
 * @description JSX 
 */
import React, { Component } from 'react';

const username = 'wangkaixiang';
const element = <h1>Hello，{username}.</h1>;

class App extends Component {
  render() {
    return (
      element
    );
  }
}

export default App;
