import React, { Component } from 'react';

class Mainbox extends Component {
  render(){
    return (
      <div>
        <h1>Hello World!</h1>
        {
          this.props.unreadMessages.length ? 
          (<h2>You have {this.props.unreadMessages.length} unread messages.</h2>)
          :
          (<h2>No messages !</h2>)
        }
      </div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = { messages: ['React', 'Re: React', 'Re:Re: React'] }
  }
  render() {
    return (
      <div className="App">
        <Mainbox unreadMessages={this.state.messages}></Mainbox>
      </div>
    );
  }
}

export default App;
