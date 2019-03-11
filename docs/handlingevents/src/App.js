import React, { Component } from 'react';
import './App.css';

class Toggle extends Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    // TODO: 显示绑定this,方便在函数中使用
    // this.handChange = this.handChange.bind(this);
  }
  /**
   * @description input checkbox value改变
   */
  // handChange(e){
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn
  //   }));
  // }
  handChange = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render(){
    return (
      <div className="checkbox">
        <input type="checkbox" className="checkbox-item" onChange={this.handChange} 
        checked={this.state.isToggleOn} id="toggle"/>
        <label htmlFor="toggle" className="checkbox-label"></label>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
       <Toggle></Toggle>
      </div>
    );
  }
}

export default App;
