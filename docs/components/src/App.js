import React, { Component } from 'react';

/**
 * @description 渲染组件
 */
class Welcome extends Component {
  render(){
    return (
      <h1>Hello, {this.props.name}</h1>
    )
  }
}

/**
 * @description 组合组件
 */
class App extends Component {
  render() {
    return (
      <div>
        <Welcome name="kaixiang"></Welcome>
        <Welcome name="Cahal"></Welcome>
        <Welcome name="Edite"></Welcome>
      </div>
    );
  }
}

export default App;
