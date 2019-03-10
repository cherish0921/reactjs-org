import React, { Component } from 'react';

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = { date: new Date().toLocaleString() }
  }
  /**
   * @description 组件首次渲染到DOM--挂载
   */
  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  /**
   * @description 卸载组件时，释放资源
   */
  componentWillUnmount(){ 
    clearInterval(this.timerID);
  }
  /**
   * @description 处理更新state中date状态
   */
  tick(){
    this.setState({
      date: new Date().toLocaleString()
    })
  }
  render(){
    return (
      <div>
        <h1>Hello World!</h1>
        <h4>It is {this.state.date} !</h4>
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
