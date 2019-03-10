import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    }
  }
  tick(){
    this.setState(state => ({
      time: new Date().toLocaleString()
    }));
  }
  /**
   * @description 组件挂载后
   */
  componentDidMount(){
    this.timer = setInterval(() => this.tick(),1000);
  }
  /**
   * @description 组件销毁前
   */
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="App">
        <h4>Hello World!</h4>
        <h5>Now is {this.state.time}</h5>
      </div>
    );
  }
}

export default App;
