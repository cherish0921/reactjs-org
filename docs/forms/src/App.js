import React, { Component } from 'react';

class Nameform extends Component {
  constructor(props){
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /**
   * @description input输入改变
   * @param {Object} e 
   */
  handleChange(e){
    this.setState({
      value: e.target.value
    });
  }
  /**
   * @description 提交form表单
   * @param {Object} e 
   */
  handleSubmit(e){
    console.log('提交的名字：' + this.state.value);
    e.preventDefault();
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字：
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <button type="submit">提交</button>
      </form>
    )
  }
}

class FlavorForm extends Component {
  constructor(props){
    super(props);
    this.state = { value: 'coconut' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  /**
   * @description input输入改变
   * @param {Object} e 
   */
  handleChange(e){
    this.setState({
      value: e.target.value
    });
  }
  /**
   * @description 提交form表单
   * @param {Object} e 
   */
  handleSubmit(e){
    console.log('你喜欢的风味是：' + this.state.value);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">葡萄柚</option>
          <option value="lime">柠檬</option>
          <option value="coconut">椰子</option>
          <option value="mango">芒果</option>
        </select>
        <button type="submit">提交</button>
      </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nameform></Nameform>
        <FlavorForm></FlavorForm>
      </div>
    );
  }
}

export default App;
