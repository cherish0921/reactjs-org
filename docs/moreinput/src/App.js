import React, { Component } from 'react';

class Reservation extends Component {
  constructor(props){
    super(props);
    this.state = {
      isGoing: true, //TODO: checkbox默认选中
      numberOfGuests: 2  //TODO: 默认来宾人数
    }
    this.handleChange = this.handleChange.bind(this);
    this.hanleSubmit = this.hanleSubmit.bind(this);
  }
  /**
   * @description 文本输入框 checkbox复选框改变
   */
  handleChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  /**
   * @description 提交表单
   */
  hanleSubmit(e){
    console.log('当前提交项为：');
    console.log(JSON.stringify(this.state))
    e.preventDefault();
  }
  render(){
    return (
      <form onSubmit={this.hanleSubmit}>
        <div className="form-item">
          <label htmlFor="isGoing">
            参与：<input type="checkbox" id="isGoing" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange}></input>
          </label>
        </div>
        <div className="form-item">
          <label>
            来宾人数：<input type="text" id="numberOfGuests" name="numberOfGuests" value={this.state.numberOfGuests}  onChange={this.handleChange}></input>
          </label>
        </div>
        <div className="form-item">
          <button type="submit">提交</button>
        </div>
      </form>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reservation></Reservation>
      </div>
    );
  }
}

export default App;
