import React, { Component } from 'react';

function WarningBanner(props){
  if(!props.warn){
    return null
  }
  return (
    <div className="waring">Warning!</div>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = { showWarning: true };
    this.handleToggleclick = this.handleToggleclick.bind(this);
  }
  handleToggleclick(){
    this.setState( state => ({
      showWarning: !state.showWarning
    }));
  }
  render() {
    return (
      <div className="App">
        <WarningBanner warn={this.state.showWarning}></WarningBanner>
        <button onClick={this.handleToggleclick}>{this.state.showWarning ? 'hide' : 'show'}</button>
      </div>
    );
  }
}

export default App;
