import React, { Component } from 'react';

/**
 * @description 登录后
 */
class UserGreeting extends Component {
  render(){
    return (
      <h1>Welcome back!</h1>
    )
  }
}

/**
 * @description 未登录
 */
class GuestGreeting extends Component {
  render(){
    return (
      <h1>Please sign up.</h1>
    )
  }
}

class Greeting extends Component {
  render(){
    return this.props.isLoggedIn ? <UserGreeting/> : <GuestGreeting/>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting isLoggedIn={false}></Greeting>
      </div>
    );
  }
}

export default App;
